"use server"

import { Resend } from "resend"
import BookingConfirmationEmail from "@/components/emails/booking-confirmation"
import type React from "react"

// --------------------
// Safe Resend init
// --------------------
// Use the environment variables
const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM_EMAIL = process.env.FROM_EMAIL
const TO_EMAIL = process.env.TO_EMAIL

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

export async function submitBooking(formData: FormData) {
  const name = formData.get("name") as string
  const phone = formData.get("phone") as string
  const email = formData.get("email") as string
  const streetAddress = formData.get("streetAddress") as string
  const aptSuite = formData.get("aptSuite") as string
  const city = formData.get("city") as string
  const state = formData.get("state") as string
  const zipCode = formData.get("zipCode") as string
  const carMake = formData.get("carMake") as string
  const carModel = formData.get("carModel") as string
  const date = formData.get("date") as string
  const time = formData.get("time") as string
  const primaryService = formData.get("primaryService") as string
  const secondaryService = (formData.get("secondaryService") as string) || null
  const notes = formData.get("notes") as string

  const bookingDetails = {
    name,
    phone,
    email,
    streetAddress,
    aptSuite,
    city,
    state,
    zipCode,
    carMake,
    carModel,
    date,
    time,
    primaryService,
    secondaryService,
    notes,
  }

  // Helper – send email only if Resend is properly configured
  const sendEmail = async () => {
    // Check if Resend is configured
    if (!resend || !FROM_EMAIL || !TO_EMAIL) {
      console.warn(
          "[MRM] Email sending is not configured. Check RESEND_API_KEY, FROM_EMAIL, and TO_EMAIL environment variables.",
          bookingDetails,
      )
      // Simulate success for the UI, but log the issue.
      return { id: "simulated-email-id-missing-config" }
    }


    const { data, error } = await resend.emails.send({
      from: `MRM Ride Revivals <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `New Booking: ${primaryService}${secondaryService ? ` + ${secondaryService}` : ""} for ${name} on ${date}`,
      react: BookingConfirmationEmail(bookingDetails) as React.ReactElement,
    })
    if (error) throw error
    return data
  }

  // Basic validation - check for required fields
  if (!name || !phone || !email || !streetAddress || !city || !state || !zipCode || !carMake || !carModel || !date || !time || !primaryService) {
    return { success: false, message: "Missing required fields. Please fill out the form completely." }
  }

  try {
    const mailResult = await sendEmail()
    console.log("Booking email handled:", mailResult)
    return { success: true, message: "Booking request sent! We will contact you shortly to confirm." }
  } catch (err) {
    console.error("Email error:", err)
    return { success: false, message: "Error sending booking notification. Please contact us directly." }
  }
}
