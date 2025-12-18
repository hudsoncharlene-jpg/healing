"use client";

import React from "react";

interface HumanEnergyFieldIconProps {
  className?: string;
}

function HumanEnergyFieldIcon({ className }: HumanEnergyFieldIconProps) {
  return (
    <div className={className}>
      {/* Pink/Rose bar */}
      <div className="absolute bg-[#E4ACB5] inset-[0_83.33%_0_0]" />
      {/* Coral bar */}
      <div className="absolute bg-[#F17C6A] inset-[0_66.67%_0_16.67%]" />
      {/* Cream bar */}
      <div className="absolute bg-[#EFE7D3] bottom-0 left-[33.33%] right-1/2 top-0" />
      {/* Blue bar */}
      <div className="absolute bg-[#608AD9] bottom-0 left-1/2 right-[33.33%] top-0" />
      {/* Navy bar */}
      <div className="absolute bg-[#1A0089] inset-[0_16.67%_0_66.67%]" />
      {/* Green bar */}
      <div className="absolute bg-[#B7CF4F] inset-[0_0_0_83.33%]" />
    </div>
  );
}

export interface HumanEnergyFieldLogoProps {
  className?: string;
  variant?: "Default" | "Small";
}

export function HumanEnergyFieldLogo({
  className = "",
  variant = "Default",
}: HumanEnergyFieldLogoProps) {
  if (variant === "Small") {
    return (
      <div className={`relative ${className}`}>
        {/* Main title */}
        <div className="absolute flex flex-col font-black inset-[16.26%_15.07%_49.59%_42.4%] justify-center leading-none not-italic text-[32px] text-black text-nowrap text-right">
          <p className="leading-[1.3]">Human Energy Field</p>
        </div>
        {/* Subtitle */}
        <div className="absolute flex flex-col font-medium inset-[52.85%_15.07%_32.52%_66.8%] justify-center leading-none not-italic text-[14px] text-black text-nowrap text-right">
          <p className="leading-[1.3]">by Charlene Hudson</p>
        </div>
        {/* Color bars icon */}
        <HumanEnergyFieldIcon className="absolute aspect-[510/600] left-[86.53%] right-[5.87%] top-[20px]" />
      </div>
    );
  }

  // Default variant
  return (
    <div className={`relative ${className}`}>
      {/* Main title */}
      <div className="absolute flex flex-col font-black inset-[0_15.07%_32.52%_0] justify-center leading-none not-italic text-[64px] text-black text-nowrap text-right">
        <p className="leading-[1.3]">Human Energy Field</p>
      </div>
      {/* Subtitle */}
      <div className="absolute flex flex-col font-medium inset-[70.73%_15.07%_4.07%_53.73%] justify-center leading-none not-italic text-[24px] text-black text-nowrap text-right">
        <p className="leading-[1.3]">by Charlene Hudson</p>
      </div>
      {/* Color bars icon */}
      <HumanEnergyFieldIcon className="absolute aspect-[510/600] left-[86.8%] right-0 top-[7px]" />
    </div>
  );
}
