"use client";

import React from "react";

export interface ButtonProps {
  className?: string;
  variant?: "Default" | "Outline";
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  className = "",
  variant = "Default",
  children = "Termin buchen",
  onClick,
}: ButtonProps) {
  if (variant === "Outline") {
    return (
      <button
        className={`relative flex items-center justify-center border-2 border-[#1A0089] rounded-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-3 md:py-4 hover:bg-[#1A0089] transition-all duration-300 shadow-sm hover:shadow-lg group ${className}`}
        onClick={onClick}
      >
        <span className="font-medium text-sm md:text-base lg:text-lg text-[#1A0089] group-hover:text-white leading-normal transition-colors">
          {children}
        </span>
      </button>
    );
  }

  // Default variant
  return (
    <button
      className={`relative flex items-center justify-center bg-[#1A0089] rounded-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-4 md:py-5 hover:bg-[#2E0099] active:bg-[#150066] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 ${className}`}
      onClick={onClick}
    >
      <span className="font-black text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#EFE7D3] leading-tight">
        {children}
      </span>
    </button>
  );
}
