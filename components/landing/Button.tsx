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
        className={`relative flex items-center justify-center border border-[#1A0089] border-solid rounded-[16px] px-[72px] py-[16px] hover:bg-[#1A0089] hover:text-white transition-colors ${className}`}
        onClick={onClick}
      >
        <span className="font-medium text-[14px] text-[#2E2E2E] hover:text-white leading-normal">
          {children}
        </span>
      </button>
    );
  }

  // Default variant
  return (
    <button
      className={`relative flex items-center justify-center bg-[#1A0089] rounded-[16px] px-[72px] py-[16px] hover:bg-[#2E0099] transition-colors ${className}`}
      onClick={onClick}
    >
      <span className="font-black text-[24px] text-[#EFE7D3] tracking-[-0.048px] leading-[24px]">
        {children}
      </span>
    </button>
  );
}
