"use client";

import React from "react";

export interface AppointmentCardProps {
  title: string;
  duration: string;
  price: string;
  className?: string;
}

export function AppointmentCard({
  title,
  duration,
  price,
  className = "",
}: AppointmentCardProps) {
  return (
    <div
      className={`bg-[#B7CF4F] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
        p-8 sm:p-10 md:p-12 flex flex-col items-center justify-center
        w-full max-w-[352px] min-h-[240px]
        transition-all duration-300 hover:shadow-[0px_6px_12px_rgba(0,0,0,0.3)] ${className}`}
    >
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2">
          {title}
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-1">
          {duration}
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-black text-black">
          {price}
        </p>
      </div>
    </div>
  );
}
