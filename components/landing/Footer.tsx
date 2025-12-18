"use client";

import React from "react";
import Link from "next/link";

export interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`relative bg-[#1A0089] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        
        {/* Navigation links - Responsive grid */}
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
          <Link 
            href="/menu" 
            className="text-lg md:text-xl lg:text-2xl font-medium text-white hover:text-[#EFE7D3] transition-colors text-center"
          >
            Menu
          </Link>
          <Link 
            href="/about" 
            className="text-lg md:text-xl lg:text-2xl font-medium text-white hover:text-[#EFE7D3] transition-colors text-center"
          >
            Über mich
          </Link>
          <Link 
            href="/practices" 
            className="text-lg md:text-xl lg:text-2xl font-medium text-white hover:text-[#EFE7D3] transition-colors text-center"
          >
            Praktiken
          </Link>
          <Link 
            href="/humanenergetik" 
            className="text-lg md:text-xl lg:text-2xl font-medium text-white hover:text-[#EFE7D3] transition-colors text-center"
          >
            Humanenergetik
          </Link>
        </nav>
        
        {/* Contact email - Responsive text */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-base md:text-lg lg:text-2xl font-medium text-[#EFE7D3]">
            Schreiben Sie uns -{" "}
            <a 
              href="mailto:office@beachosteopathy.com" 
              className="hover:underline"
            >
              office@beachosteopathy.com
            </a>
          </p>
        </div>
        
        {/* Copyright - Responsive text */}
        <div className="text-center">
          <p className="text-xs md:text-sm lg:text-base font-medium text-[#EFE7D3]">
            Copyright Dr. Charlene Hudson 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
