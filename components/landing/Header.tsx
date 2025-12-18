"use client";

import React from "react";
import Link from "next/link";
import { HumanEnergyFieldLogo } from "./HumanEnergyFieldLogo";

export interface HeaderProps {
  className?: string;
}

export function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`relative ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center justify-between relative">
        {/* Logo - Responsive sizing */}
        <div className="flex-shrink-0 overflow-hidden">
          {/* Desktop logo */}
          <div className="hidden lg:block relative h-[100px] xl:h-[123px] w-[600px] xl:w-[750px]">
            <HumanEnergyFieldLogo variant="Small" className="absolute inset-0" />
          </div>
          {/* Tablet logo */}
          <div className="hidden md:block lg:hidden relative h-[80px] w-[500px]">
            <HumanEnergyFieldLogo variant="Small" className="absolute inset-0" />
          </div>
          {/* Mobile logo - text only */}
          <div className="md:hidden">
            <Link href="/" className="text-lg sm:text-xl font-black text-gray-900 hover:text-[#1A0089] transition-colors">
              Human Energy Field
            </Link>
          </div>
        </div>
        
        {/* Navigation links - Responsive */}
        <nav className="flex items-center gap-3 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-[140px]">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <Link 
              href="/" 
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[24px] font-medium text-[#2E2E2E] hover:text-[#1A0089] transition-colors leading-normal whitespace-nowrap"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[24px] font-medium text-[#2E2E2E] hover:text-[#1A0089] transition-colors leading-normal whitespace-nowrap"
            >
              About
            </Link>
            <Link 
              href="/buchen" 
              className="hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg xl:text-[24px] font-medium text-[#2E2E2E] hover:text-[#1A0089] transition-colors leading-normal whitespace-nowrap"
            >
              Appointments
            </Link>
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[24px] font-medium text-[#2E2E2E] leading-normal cursor-pointer hover:text-[#1A0089] transition-colors">
            EN
          </div>
        </nav>
      </div>
    </header>
  );
}
