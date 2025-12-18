"use client";

import React from "react";
import Image from "next/image";

export interface AppointmentSummaryCardProps {
  appointmentType: string;
  description: string;
  price: string;
  imageSrc?: string;
  onNext?: () => void;
  className?: string;
}

export function AppointmentSummaryCard({
  appointmentType,
  description,
  price,
  imageSrc,
  onNext,
  className = "",
}: AppointmentSummaryCardProps) {
  return (
    <div
      className={`bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
        p-2 sm:p-[10px] flex flex-col gap-2 sm:gap-[10px] w-full max-w-[352px]
        transition-all duration-300 hover:shadow-[0px_6px_12px_rgba(0,0,0,0.3)] ${className}`}
    >
      {/* Calendar/Booking Interface Preview */}
      <div className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] rounded-[10px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Appointment booking interface"
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4 sm:p-6">
            <div className="text-center text-gray-400">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xs sm:text-sm font-medium">Booking Calendar</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Appointment Summary Section */}
      <div className="bg-gray-50 rounded-[10px] p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-xs sm:text-sm text-gray-900 flex-1">
            Appointment summary
          </h3>
          <button 
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Expand details"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
        
        <div className="text-xs text-gray-600">
          <p className="font-medium line-clamp-2">{appointmentType}</p>
          <p className="text-gray-500 mt-1">{description}</p>
        </div>
        
        <div className="border-t border-gray-200 pt-2 sm:pt-3 mt-1 sm:mt-2">
          <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
            <p className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 flex-1">{appointmentType}</p>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <span className="text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">{price}</span>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Next Button */}
          <button
            onClick={onNext}
            className="w-full bg-[#007AFF] hover:bg-[#0066DB] active:bg-[#0055B8]
              text-white font-semibold text-xs sm:text-sm py-2.5 sm:py-3 rounded-lg
              transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
