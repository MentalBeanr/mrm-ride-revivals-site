interface BookingConfirmationEmailProps {
  name: string
  phone: string
  email: string
  streetAddress: string
  aptSuite?: string
  city: string
  state: string
  zipCode: string
  carMake: string
  carModel: string
  date: string
  time: string
  primaryService: string
  secondaryService?: string | null
  notes?: string
}

const BookingConfirmationEmail = ({
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
}: BookingConfirmationEmailProps) => (
  <div style={{ fontFamily: "sans-serif", padding: "20px", backgroundColor: "#f4f4f4" }}>
    <div
      style={{ maxWidth: "600px", margin: "auto", backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px" }}
    >
      <h1 style={{ color: "#333", borderBottom: "2px solid #eee", paddingBottom: "10px" }}>New Booking Request</h1>
      <h2 style={{ color: "#555" }}>Customer Details</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Address:</strong> {streetAddress}
        {aptSuite ? `, ${aptSuite}` : ""}, {city}, {state} {zipCode}
      </p>

      <h2 style={{ color: "#555", marginTop: "20px" }}>Vehicle Details</h2>
      <p>
        <strong>Make & Model:</strong> {carMake} {carModel}
      </p>

      <h2 style={{ color: "#555", marginTop: "20px" }}>Booking Details</h2>
      <p>
        <strong>Date:</strong>{" "}
        {new Date(date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Primary Service:</strong> {primaryService}
      </p>
      {secondaryService && (
        <p>
          <strong>Additional Service:</strong> {secondaryService}
        </p>
      )}
      {notes && (
        <>
          <h2 style={{ color: "#555", marginTop: "20px" }}>Additional Notes</h2>
          <p style={{ whiteSpace: "pre-wrap", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "4px" }}>
            {notes}
          </p>
        </>
      )}
    </div>
  </div>
)

export default BookingConfirmationEmail
