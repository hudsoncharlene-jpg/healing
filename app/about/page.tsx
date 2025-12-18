"use client";

import React from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/landing/Button";

export default function AboutPage() {
  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header - Fixed at top */}
      <Header className="absolute top-0 left-0 right-0 bg-white h-[120px] md:h-[175px] z-50 overflow-hidden" />
      
      {/* Main content container - 1280px wide desktop layout */}
      <div className="relative w-full lg:max-w-[1280px] mx-auto">
        
        {/* Hero Section - Cream background */}
        <section className="relative bg-[#EFE7D3] min-h-[600px] md:min-h-[700px] lg:h-[864px] overflow-hidden">
          {/* Decorative pink bar - rotated 270deg - hidden on mobile */}
          <div 
            className="hidden lg:block absolute left-[160.35px] top-[1559.35px] h-[120px] w-[1120.971px] flex items-center justify-center"
            style={{ 
              transform: 'translateY(-1559.35px)',
            }}
          >
            <div className="rotate-[270deg]">
              <div className="bg-[#E4ACB5] h-[1120.971px] w-[120px] rounded-tl-[10px] rounded-tr-[10px]" />
            </div>
          </div>

          {/* Main hero content */}
          <div className="relative z-10 pt-[120px] md:pt-[175px]">
            <div className="px-4 md:px-12 lg:pl-[96px] pt-[60px] md:pt-[150px] lg:pt-[260px]">
              <h1 className="font-black text-4xl md:text-5xl lg:text-[64px] text-black leading-normal mb-6 md:mb-12 lg:mb-[65px]">
                Charlene Hudson
              </h1>
              <p className="font-medium text-xl md:text-2xl lg:text-[30px] text-black leading-[1.3] mb-8 md:mb-12 lg:mb-[73px]">
                Finding your inner strength is my goal
              </p>
              <Button variant="Outline" className="h-[55px] w-full sm:w-[192px]">
                Termin buchen
              </Button>
            </div>
          </div>

          {/* Profile image placeholder - right side - adjusted for responsive */}
          <div className="absolute right-4 md:right-12 lg:right-[106px] top-[400px] md:top-[450px] lg:top-[529px] w-[250px] md:w-[300px] lg:w-[344px] h-[293px] md:h-[351px] lg:h-[402px] bg-gray-300 rounded-[30px] lg:rounded-[50px] flex items-center justify-center z-10">
            <div className="text-gray-500 text-center">
              <p className="font-medium mb-2 text-sm">Profile Image</p>
              <p className="text-xs">344x402px</p>
            </div>
          </div>
        </section>

        {/* Die Geschichte Section - White background */}
        <section className="relative bg-white py-12 md:py-16 lg:py-24 px-4 md:px-12 lg:px-[96px] min-h-[400px] md:min-h-[500px]">
          <h2 className="font-medium text-2xl md:text-3xl lg:text-[40px] text-black leading-[1.3] mb-8 md:mb-12">
            Die Geschichte
          </h2>
          
          <div className="space-y-6 md:space-y-8 max-w-full md:max-w-[693px]">
            <div className="font-medium text-lg md:text-xl lg:text-[24px] text-black leading-normal">
              <p className="mb-0">Unsere Gründerin, Charlene Hudson</p>
              <p className="mb-0">verfügt über mehr als 20 Jahre Erfahrung</p>
              <p className="mb-0">als Osteopathie-Praktikerin in den USA.</p>
              <p>&nbsp;</p>
            </div>
            
            <div className="font-medium text-lg md:text-xl lg:text-[24px] text-black leading-normal">
              <p>
                Mit tiefen familiären Wurzeln in Niederösterreich verspürte Charlene den 
                Wunsch, zu ihrer Herkunft zurückzukehren, und übersiedelte 2024 nach 
                Österreich, um ihre Arbeit in einer Umgebung fortzuführen, die ihrem 
                persönlichen und familiären Hintergrund entspricht.
              </p>
            </div>
          </div>
        </section>

        {/* Decorative bars between sections - hidden on mobile */}
        <div className="relative h-0 hidden lg:block">
          {/* Pink decorative bar - rotated 270deg */}
          <div 
            className="absolute left-[160.35px] h-[120px] w-[1120.971px] flex items-center justify-center"
            style={{ 
              top: '-140px',
            }}
          >
            <div className="rotate-[270deg]">
              <div className="bg-[#E4ACB5] h-[1120.971px] w-[120px] rounded-tl-[10px] rounded-tr-[10px]" />
            </div>
          </div>

          {/* Coral decorative bar - rotated 270deg */}
          <div 
            className="absolute left-[676px] h-[110px] w-[603.534px] flex items-center justify-center"
            style={{ 
              top: '-140px',
            }}
          >
            <div className="rotate-[270deg]">
              <div className="bg-[#F17C6A] h-[603.534px] w-[110px] rounded-tl-[10px] rounded-tr-[10px]" />
            </div>
          </div>
        </div>

        {/* Experience Section - Cream background */}
        <section className="relative bg-[#EFE7D3] py-12 md:py-16 lg:py-24 px-4 md:px-12 lg:px-[96px] min-h-[500px] md:min-h-[700px] lg:min-h-[880px]">
          {/* Singing bowls image placeholder - left side */}
          <div className="relative lg:absolute lg:left-[89px] lg:top-[60px] w-full max-w-[400px] md:max-w-[500px] lg:w-[574px] h-[284px] md:h-[356px] lg:h-[409px] bg-gray-300 rounded-[20px] lg:rounded-[25px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center z-10 mb-8 lg:mb-0 mx-auto lg:mx-0">
            <div className="text-gray-500 text-center">
              <p className="font-medium mb-2 text-sm">Singing Bowls</p>
              <p className="text-xs">574x409px</p>
            </div>
          </div>

          {/* Text content - right side */}
          <div className="lg:ml-auto max-w-full lg:max-w-[575px] lg:pt-[80px]">
            <div className="font-medium text-lg md:text-xl lg:text-[24px] text-black leading-[1.3] space-y-4 md:space-y-6">
              <p>
                Charlene hat intensiv mit anerkannten Schamanen aus Peru, den USA und 
                Österreich zusammengearbeitet und ihre Praxis dadurch mit wertvollen 
                traditionellen und modernen Heilmethoden bereichert.
              </p>
              
              <p className="hidden lg:block">&nbsp;</p>
              <p className="hidden lg:block">&nbsp;</p>
              
              <p>
                Sie ist außerdem in therapeutischer Klangarbeit ausgebildet und setzt 
                sowohl Klangschalen als auch Stimmgabeln gekonnt ein, um energetische 
                Balance und tiefe Entspannung zu unterstützen.
              </p>
            </div>
          </div>

          {/* Green decorative bar - rotated - hidden on mobile */}
          <div 
            className="hidden lg:block absolute left-[-118px] h-[111.802px] w-[301.915px] flex items-center justify-center"
            style={{ 
              top: '430px',
            }}
          >
            <div className="rotate-[89.657deg]">
              <div className="bg-[#B7CF4F] h-[301.261px] w-[110px]" />
            </div>
          </div>
        </section>

        {/* Family Section - Cream background */}
        <section className="relative bg-[#EFE7D3] py-12 md:py-16 lg:py-24 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          {/* Family photo placeholder - left side on desktop, centered on mobile */}
          <div className="relative lg:absolute lg:left-[66px] lg:top-[60px] w-[280px] md:w-[350px] lg:w-[417px] h-[280px] md:h-[350px] lg:h-[417px] bg-gray-300 flex items-center justify-center z-10 mb-8 lg:mb-0 mx-auto lg:mx-0">
            <div className="text-gray-500 text-center">
              <p className="font-medium mb-2 text-sm">Family Photo</p>
              <p className="text-xs">417x417px</p>
            </div>
          </div>

          {/* Quote text - centered */}
          <div className="relative lg:absolute lg:left-1/2 lg:top-[240px] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-full max-w-[340px] md:max-w-[600px] lg:w-[995px] text-center px-4 mx-auto">
            <p className="font-medium text-lg md:text-xl lg:text-[24px] text-black leading-normal">
              Ihre vier Kinder sind für sie zugleich ihre größte Inspiration und ihre 
              wichtigsten Lehrer.
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer className="relative h-[372px] w-full" />
      </div>
    </div>
  );
}
