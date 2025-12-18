"use client";

import React from "react";
import Link from "next/link";

export interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`relative bg-[#1A0089] ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        
        {/* Navigation links - Responsive grid */}
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12 lg:mb-14">
          <Link 
            href="/menu" 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white hover:text-[#EFE7D3] transition-colors text-center py-2"
          >
            Menu
          </Link>
          <Link 
            href="/about" 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white hover:text-[#EFE7D3] transition-colors text-center py-2"
          >
            Über mich
          </Link>
          <Link 
            href="/practices" 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white hover:text-[#EFE7D3] transition-colors text-center py-2"
          >
            Praktiken
          </Link>
          <Link 
            href="/humanenergetik" 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white hover:text-[#EFE7D3] transition-colors text-center py-2"
          >
            Humanenergetik
          </Link>
        </nav>
        
        {/* Contact email - Responsive text */}
        <div className="text-center mb-8 md:mb-10 lg:mb-12 px-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-[#EFE7D3] break-words">
            Schreiben Sie uns -{" "}
            <a 
              href="mailto:office@beachosteopathy.com" 
              className="hover:underline hover:text-white transition-colors"
            >
              office@beachosteopathy.com
            </a>
          </p>
        </div>
        
        {/* Copyright - Responsive text */}
        <div className="text-center pt-6 md:pt-8 border-t border-white/20">
          <p className="text-xs sm:text-sm md:text-base font-medium text-[#EFE7D3] opacity-90">
            Copyright © Dr. Charlene Hudson 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
