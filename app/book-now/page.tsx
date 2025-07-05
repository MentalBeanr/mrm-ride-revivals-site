import Script from 'next/script';

export default function BookNowPage() {
    return (
        <>
            <div className="text-center mb-8">
                {/* Changed text colors to be dark */}
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
                    Book Your Detailing Appointment
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Select from our available services and times below to book your revival instantly.
                </p>
            </div>

            {/* Set a minimum height for the widget container */}
            <div style={{ minHeight: '750px' }}>
                <Script src="https://app.squareup.com/appointments/buyer/widget/98sriyfydm23zn/L1Z4B515J0VKD.js" />
            </div>
        </>
    );
}
