"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { BookingOptionCard } from "@/components/booking/BookingOptionCard";

export default function BuchenPage() {
  const router = useRouter();

  function handleBookingTypeClick(type: string) {
    console.log(`Selected booking type: ${type}`);
    // Navigate to calendar page with booking type
    router.push(`/buchen/calendar?type=${type}`);
  }

  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header - Fixed at top */}
      <Header className="fixed top-0 left-0 right-0 bg-white h-[120px] md:h-[150px] lg:h-[175px] z-50 shadow-sm" />
      
      {/* Main content with padding for fixed header */}
      <div className="pt-[120px] md:pt-[150px] lg:pt-[175px]">
        
        {/* Booking Section */}
        <section className="bg-[#EFE7D3] relative py-12 sm:py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 overflow-hidden min-h-[900px]">
          
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
              Buchen
            </h1>
            
            {/* Centered booking options */}
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[60px] max-w-[499px] mx-auto w-full">
              <BookingOptionCard
                title="Virtual Termin"
                onClick={() => handleBookingTypeClick("virtual")}
              />
              <BookingOptionCard
                title="Vor Ort Termin"
                onClick={() => handleBookingTypeClick("in-person")}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer className="relative min-h-[300px] md:min-h-[372px] w-full" />
      </div>
    </div>
  );
}
