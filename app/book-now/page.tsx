"use client"

import { useState, type FormEvent } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { submitBooking } from "./actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const PRIMARY_INTERIOR_ID = "interior_detail"
const PRIMARY_EXTERIOR_ID = "exterior_detail"
const FULL_REVIVAL_ID = "full_revival"

const serviceOptions = [
  { id: PRIMARY_INTERIOR_ID, name: "Interior Revival ($50 - $150)" },
  { id: PRIMARY_EXTERIOR_ID, name: "Exterior Excellence ($50 - $150)" },
  { id: FULL_REVIVAL_ID, name: "The Full Revival Package ($150 - $250)" },
]

export default function BookNowPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [aptSuite, setAptSuite] = useState("")
  const [city, setCity] = useState("")
  const [stateVal, setStateVal] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [carMake, setCarMake] = useState("")
  const [carModel, setCarModel] = useState("")
  const [selectedTime, setSelectedTime] = useState<string | undefined>()
  const [primaryService, setPrimaryService] = useState<string | undefined>()
  const [secondaryService, setSecondaryService] = useState<string | undefined>()
  const [notes, setNotes] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 7; hour <= 19; hour++) {
      const displayHour = hour % 12 === 0 ? 12 : hour % 12
      const ampm = hour < 12 || hour === 24 ? "AM" : "PM"
      slots.push(`${String(displayHour).padStart(2, "0")}:00 ${ampm}`)
    }
    return slots
  }
  const availableTimes = generateTimeSlots()

  const handlePrimaryServiceChange = (value: string) => {
    setPrimaryService(value)
    setSecondaryService(undefined)
  }

  const getSecondaryServiceOptions = () => {
    if (primaryService === serviceOptions.find((s) => s.id === PRIMARY_INTERIOR_ID)?.name) {
      return [
        { id: "", name: "None (Keep as Interior Only)" },
        serviceOptions.find((s) => s.id === PRIMARY_EXTERIOR_ID)!,
      ]
    }
    if (primaryService === serviceOptions.find((s) => s.id === PRIMARY_EXTERIOR_ID)?.name) {
      return [
        { id: "", name: "None (Keep as Exterior Only)" },
        serviceOptions.find((s) => s.id === PRIMARY_INTERIOR_ID)!,
      ]
    }
    return []
  }

  const showSecondaryServiceDropdown =
    primaryService === serviceOptions.find((s) => s.id === PRIMARY_INTERIOR_ID)?.name ||
    primaryService === serviceOptions.find((s) => s.id === PRIMARY_EXTERIOR_ID)?.name

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setFormMessage(null)

    if (
      !selectedDate ||
      !selectedTime ||
      !primaryService ||
      !name ||
      !phone ||
      !email ||
      !streetAddress ||
      !city ||
      !stateVal ||
      !zipCode ||
      !carMake ||
      !carModel
    ) {
      setFormMessage({
        type: "error",
        text: "Please fill in all required fields and select a date, time, and primary service.",
      })
      setIsLoading(false)
      return
    }

    const formData = new FormData()
    formData.append("name", name)
    formData.append("phone", phone)
    formData.append("email", email)
    formData.append("streetAddress", streetAddress)
    formData.append("aptSuite", aptSuite)
    formData.append("city", city)
    formData.append("state", stateVal)
    formData.append("zipCode", zipCode)
    formData.append("carMake", carMake)
    formData.append("carModel", carModel)
    formData.append("date", selectedDate.toISOString().split("T")[0])
    formData.append("time", selectedTime)
    formData.append("primaryService", primaryService)
    if (secondaryService && secondaryService !== "") {
      formData.append("secondaryService", secondaryService)
    }
    formData.append("notes", notes)

    try {
      const result = await submitBooking(formData)
      if (result.success) {
        setFormMessage({ type: "success", text: result.message || "Booking submitted successfully!" })
        // Reset form
        setName("")
        setPhone("")
        setEmail("")
        setStreetAddress("")
        setAptSuite("")
        setCity("")
        setStateVal("")
        setZipCode("")
        setCarMake("")
        setCarModel("")
        setSelectedDate(new Date())
        setSelectedTime(undefined)
        setPrimaryService(undefined)
        setSecondaryService(undefined)
        setNotes("")
      } else {
        setFormMessage({ type: "error", text: result.message || "Failed to submit booking. Please try again." })
      }
    } catch (error) {
      console.error("Booking submission error:", error)
      setFormMessage({ type: "error", text: "An unexpected error occurred. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl text-primary">
        Book Your Detailing Appointment
      </h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
        Select a date and time that works for you. Our team will confirm your appointment shortly.
      </p>

      {formMessage && (
        <Alert
          variant={formMessage.type === "error" ? "destructive" : "default"}
          className={formMessage.type === "success" ? "bg-green-700/20 border-green-500 text-green-300" : ""}
        >
          {formMessage.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <AlertTitle>{formMessage.type === "success" ? "Success!" : "Error"}</AlertTitle>
          <AlertDescription>{formMessage.text}</AlertDescription>
        </Alert>
      )}

      <Card className="max-w-4xl mx-auto bg-card border-border shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Select Date, Time & Service</CardTitle>
          <CardDescription>Provide your details and vehicle information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-6">
              <div>
                <Label htmlFor="calendar" className="block text-sm font-medium mb-2">
                  Select Date
                </Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border bg-popover p-0 mx-auto md:mx-0"
                  disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                  classNames={{
                    day_today: "bg-green-800/50 text-foreground rounded-md",
                    day_selected:
                      "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary focus:text-primary-foreground",
                  }}
                />
              </div>
              <div>
                <Label htmlFor="time">Preferred Time</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime} required>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="primaryService">Primary Service Type</Label>
                <Select value={primaryService} onValueChange={handlePrimaryServiceChange} required>
                  <SelectTrigger id="primaryService">
                    <SelectValue placeholder="Select a primary service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((service) => (
                      <SelectItem key={service.id} value={service.name}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">
                  *Prices vary based on vehicle conditions and add-on services.
                </p>
              </div>
              {showSecondaryServiceDropdown && (
                <div>
                  <Label htmlFor="secondaryService">Add Second Service (Optional)</Label>
                  <Select value={secondaryService} onValueChange={setSecondaryService}>
                    <SelectTrigger id="secondaryService">
                      <SelectValue placeholder="Select an additional service" />
                    </SelectTrigger>
                    <SelectContent>
                      {getSecondaryServiceOptions().map((service) => (
                        <SelectItem
                          key={service.id}
                          value={service.name}
                          disabled={service.id === "" && secondaryService === undefined}
                        >
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground mt-1">
                    This is only additional add-on services, not the full package.
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="streetAddress">Street Address</Label>
                <Input
                  id="streetAddress"
                  type="text"
                  placeholder="123 Main St"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="aptSuite">Apartment, Suite, Bldg (Optional)</Label>
                <Input
                  id="aptSuite"
                  type="text"
                  placeholder="Apt #101"
                  value={aptSuite}
                  onChange={(e) => setAptSuite(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Houston"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="stateVal">State</Label>
                  <Input
                    id="stateVal"
                    type="text"
                    placeholder="TX"
                    value={stateVal}
                    onChange={(e) => setStateVal(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input
                    id="zipCode"
                    type="text"
                    placeholder="77001"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="carMake">Car Make</Label>
                  <Input
                    id="carMake"
                    type="text"
                    placeholder="e.g., Ford"
                    value={carMake}
                    onChange={(e) => setCarMake(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="carModel">Car Model</Label>
                  <Input
                    id="carModel"
                    type="text"
                    placeholder="e.g., F-150"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="e.g., specific areas of concern"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Request Booking"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
