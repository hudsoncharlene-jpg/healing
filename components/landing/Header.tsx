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
      <div className="container mx-auto px-4 h-full flex items-center justify-between relative">
        {/* Logo - Responsive sizing */}
        <div className="flex-shrink-0">
          <div className="hidden lg:block relative h-[123px] w-[750px]">
            <HumanEnergyFieldLogo variant="Small" className="absolute inset-0" />
          </div>
          {/* Tablet logo */}
          <div className="hidden md:block lg:hidden relative h-[100px] w-[600px]">
            <HumanEnergyFieldLogo variant="Small" className="absolute inset-0" />
          </div>
          {/* Mobile logo - text only */}
          <div className="md:hidden">
            <Link href="/" className="text-xl font-black">
              Human Energy Field
            </Link>
          </div>
        </div>
        
        {/* Navigation links - Responsive */}
        <nav className="flex items-center gap-4 md:gap-8 lg:gap-[140px]">
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            <Link 
              href="/" 
              className="text-sm md:text-lg lg:text-[24px] font-medium text-[#2E2E2E] hover:text-[#1A0089] transition-colors leading-normal"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm md:text-lg lg:text-[24px] font-medium text-[#2E2E2E] hover:text-[#1A0089] transition-colors leading-normal"
            >
              About
            </Link>
            <Link 
              href="/appointments" 
              className="hidden sm:block text-sm md:text-lg lg:text-[24px] font-medium text-[#2E2E2E] hover:text-[#1A0089] transition-colors leading-normal"
            >
              Appointments
            </Link>
          </div>
          <div className="text-sm md:text-lg lg:text-[24px] font-medium text-[#2E2E2E] leading-normal">
            EN
          </div>
        </nav>
      </div>
    </header>
  );
}
