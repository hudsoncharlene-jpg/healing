"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Calendar } from "@/components/booking/Calendar";
import { AppointmentCard } from "@/components/booking/AppointmentCard";

export default function CalendarBookingPage() {
  const searchParams = useSearchParams();
  const bookingType = searchParams.get("type") || "virtual";
  
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Get appointment details based on booking type
  const getAppointmentDetails = () => {
    if (bookingType === "virtual") {
      return {
        title: "Virtual Termin",
        duration: "50 Minuten",
        price: "$185",
      };
    }
    return {
      title: "Vor Ort Termin",
      duration: "50 Minuten",
      price: "$185",
    };
  };

  const appointmentDetails = getAppointmentDetails();

  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header - Fixed at top */}
      <Header className="fixed top-0 left-0 right-0 bg-white h-[120px] md:h-[150px] lg:h-[175px] z-50 shadow-sm" />
      
      {/* Main content with padding for fixed header */}
      <div className="pt-[120px] md:pt-[150px] lg:pt-[175px]">
        
        {/* Booking Section */}
        <section className="bg-[#EFE7D3] relative py-12 sm:py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 overflow-hidden min-h-screen">
          
          {/* Decorative pink bar - rotated horizontally across page */}
          <div className="absolute left-[10%] top-[15%] hidden lg:block">
            <div className="relative w-[1121px] h-[127px] flex items-center justify-center">
              <div className="rotate-[89.66deg]">
                <div className="bg-[#E4ACB5] w-[120px] h-[1121px] opacity-80" />
              </div>
            </div>
          </div>
          
          {/* Decorative navy bar - smaller, positioned to right */}
          <div className="absolute left-[50%] top-[20%] hidden lg:block">
            <div className="relative w-[604px] h-[114px] flex items-center justify-center">
              <div className="rotate-[89.66deg]">
                <div className="bg-[#1A0089] w-[110px] h-[604px] opacity-80" />
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-gray-900">
              {appointmentDetails.title}
            </h1>
            
            {/* Two-column layout for desktop, stacked on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
              
              {/* Left column - Calendar */}
              <div className="flex flex-col gap-6 max-w-[499px] mx-auto lg:mx-0 w-full">
                <Calendar
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                />
              </div>
              
              {/* Right column - Appointment Card */}
              <div className="flex flex-col gap-8 max-w-[352px] mx-auto lg:mx-0 w-full lg:pl-4 xl:pl-8">
                <AppointmentCard
                  title={appointmentDetails.title}
                  duration={appointmentDetails.duration}
                  price={appointmentDetails.price}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer className="relative min-h-[300px] md:min-h-[372px] w-full" />
      </div>
    </div>
  );
}
