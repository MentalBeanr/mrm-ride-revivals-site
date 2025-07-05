import Script from 'next/script';
import { useEffect } from 'react';

export default function BookNowPage(): JSX.Element {
    useEffect(() => {
        // Scroll to bottom after slight delay to reveal embedded widget
        const timeout = setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        }, 3000); // Adjust based on loading time

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                    Book Your Detailing Appointment
                </h1>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                    Select from our available services and times below to book your revival instantly.
                </p>
                <p className="mt-4 text-sm text-muted-foreground italic">
                    (The calendar is loading below. Please wait a few seconds.)
                </p>
            </div>

            {/* Just a spacer to push content closer to widget */}
            <div className="min-h-[300px]"></div>

            <Script src="https://app.squareup.com/appointments/buyer/widget/98srivfydm23zn/L174B515J0VKD.js" />
        </>
    );
}

