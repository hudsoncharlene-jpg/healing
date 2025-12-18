"use client";

import React from "react";

export interface BookingOptionCardProps {
  title: string;
  onClick?: () => void;
  className?: string;
}

export function BookingOptionCard({
  title,
  onClick,
  className = "",
}: BookingOptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#B7CF4F] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] 
        w-full min-h-[300px] sm:min-h-[340px] md:min-h-[360px] lg:h-[387px]
        flex items-center justify-center
        transition-all duration-300 hover:shadow-[0px_6px_12px_rgba(0,0,0,0.3)]
        hover:scale-[1.02] active:scale-[0.98]
        cursor-pointer group ${className}`}
    >
      <h2 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-black text-center leading-normal px-6">
        {title}
      </h2>
    </button>
  );
}
