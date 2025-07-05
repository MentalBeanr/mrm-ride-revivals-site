export default function BookNowPage(): JSX.Element {
    return (
        <>
            <div className="text-center mb-8">
                {/* Changed text colors BACK to light colors for the dark background */}
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                    Book Your Detailing Appointment
                </h1>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                    Select from our available services and times below to book your revival instantly.
                </p>
            </div>

            <div className="w-full min-h-[1000px]">
                <iframe
                    src="https://squareup.com/appointments/book/98srivfydm23zn/L174B515J0VKD"
                    className="w-full h-[1000px] border-none"
                    title="Booking Calendar"
                ></iframe>
            </div>
        </>
    );
}
