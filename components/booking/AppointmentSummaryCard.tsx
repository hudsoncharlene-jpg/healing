"use client";

import React, { useState } from "react";

export interface AppointmentItem {
  id: string;
  title: string;
  description: string;
  price: string;
}

export interface AppointmentSummaryCardProps {
  appointments: AppointmentItem[];
  onNext?: () => void;
  onEdit?: (id: string) => void;
  className?: string;
}

export function AppointmentSummaryCard({
  appointments,
  onNext,
  onEdit,
  className = "",
}: AppointmentSummaryCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
        p-4 sm:p-5 flex flex-col gap-4 w-full max-w-[352px]
        transition-all duration-300 hover:shadow-[0px_6px_12px_rgba(0,0,0,0.3)] ${className}`}
    >
      {/* Appointment Summary Section */}
      <div className="flex flex-col gap-3">
        {/* Header with toggle */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm text-gray-900">
            Appointment summary
          </h3>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-gray-600 transition-all duration-200"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        {/* Collapsible appointment list */}
        {isExpanded && (
          <div className="flex flex-col gap-3">
            {appointments.map((appointment, index) => (
              <div key={appointment.id}>
                {index > 0 && <div className="border-t border-gray-200 my-2" />}
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium text-gray-900 line-clamp-2">
                    {appointment.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {appointment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Appointment items with prices */}
        <div className="border-t border-gray-200 pt-3 flex flex-col gap-2">
          {appointments.map((appointment) => (
            <div key={`price-${appointment.id}`} className="flex items-center justify-between gap-2">
              <p className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 flex-1">
                {appointment.title}
              </p>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">
                  {appointment.price}
                </span>
                {onEdit && (
                  <button 
                    onClick={() => onEdit(appointment.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Edit appointment"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-full bg-[#007AFF] hover:bg-[#0066DB] active:bg-[#0055B8]
            text-white font-semibold text-sm py-3 rounded-lg
            transition-all duration-200 shadow-sm hover:shadow-md mt-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}
