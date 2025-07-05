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
import Script from 'next/script'; //  Add this import

      export default function BookNowPage() {
      return (
      <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl text-primary">
      Book Your Detailing Appointment
      </h1>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
      Select from our available services and times below to book your revival instantly.
      </p>

    {/* --- Start Square Appointments Embed --- */}
      <Script src="https://app.squareup.com/appointments/buyer/widget/98sriyfydm23zn/L1Z4B515J0VKD.js" />
      {/* --- End Square Appointments Embed --- */}

    </div>
  );
}
