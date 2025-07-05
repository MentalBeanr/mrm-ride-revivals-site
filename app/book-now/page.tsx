"use client";

import Script from 'next/script';
import { useEffect } from 'react';

export default function BookNowPage(): JSX.Element {
    useEffect(() => {
        // Scroll to booking widget if it loads
        const timeout = setTimeout(() => {
            const widget = document.getElementById("square-appointments-root");
            if (widget) {
                widget.scrollIntoView({ behavior: 'smooth' });
            }
        }, 3000); // Adjust delay if needed

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
                    (The booking calendar is loading below. Please wait a few seconds.)
                </p>
            </div>

            {/* Container for the injected Square content */}
            <div id="square-appointments-root" className="min-h-[1000px]" />

            {/* Square embed script */}
            <Script src="https://app.squareup.com/appointments/buyer/widget/98srivfydm23zn/L1Z4B515J0VKD.js" />
        </>
    );
}


