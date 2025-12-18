"use client";

import React from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function BlogPage() {
  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header - Fixed at top */}
      <Header className="fixed top-0 left-0 right-0 bg-white h-[120px] md:h-[150px] lg:h-[175px] z-50 shadow-sm" />
      
      {/* Main content with padding for fixed header */}
      <div className="pt-[120px] md:pt-[150px] lg:pt-[175px]">
        
        {/* Hero/Blog Title Section */}
        <section className="bg-[#EFE7D3] relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex items-center">
          {/* Decorative coral bar - left side */}
          <div className="absolute left-0 top-1/2 w-20 md:w-24 lg:w-28 h-[800px] md:h-[1000px] bg-[#F17C6A] opacity-70 rotate-90 -translate-x-1/2 -translate-y-1/2 rounded-bl-[10px] rounded-br-[10px] hidden md:block" />
          
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 md:mb-12 text-black">
              Blog
            </h1>
            
            {/* Union cloud decoration */}
            <div className="absolute left-[15%] sm:left-[20%] md:left-[30%] top-[55%] sm:top-[60%] w-[180px] sm:w-[250px] md:w-[400px] lg:w-[550px] xl:w-[668px] h-[120px] sm:h-[150px] md:h-[200px] lg:h-[280px] xl:h-[329px]">
              <div className="w-full h-full bg-gradient-to-br from-[#608AD9]/30 to-[#608AD9]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </section>

        {/* Main Title Section */}
        <section className="bg-[#EFE7D3] relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black leading-tight px-2">
              The Importance of "grounding"
            </h2>
          </div>
        </section>

        {/* WAS IST ERDUNG Section */}
        <section className="bg-[#EFE7D3] relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          {/* Decorative coral bar */}
          <div className="absolute left-0 top-1/4 w-20 md:w-24 lg:w-28 h-[900px] md:h-[1100px] bg-[#F17C6A] opacity-60 rotate-90 -translate-x-1/2 rounded-bl-[10px] rounded-br-[10px] hidden lg:block" />
          
          {/* Decorative navy bar */}
          <div className="absolute right-0 top-1/3 w-16 md:w-20 lg:w-24 h-[400px] md:h-[500px] bg-[#1A0089] opacity-70 rotate-90 translate-x-1/2 rounded-tl-[10px] rounded-tr-[10px] hidden lg:block" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-black">
              WAS IST ERDUNG?
            </h3>
            
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed space-y-3 sm:space-y-4 md:space-y-6 text-black">
              <p>In der Psychologie:</p>
              <p>
                Ganz einfach gesagt bedeutet es sich der Empfindungen im eigenen Körper bewusst 
                zu werden und im gegenwärtigen Moment zu bleiben ohne die Gedanken abschweifen 
                zu lassen zu all dem was man noch für die Arbeit erledigen muss oder was man heute 
                Abend kochen will.
              </p>
              <p>
                Aber es gibt noch eine andere Sichtweise auf Erdung:<br className="hidden sm:block" />
                aus der Perspektive des menschlichen Energiefeldes:<br className="hidden sm:block" />
                „Geerdet sein" bedeutet, energetisch verbunden zu sein<br className="hidden sm:block" />
                mit dir selbst,<br className="hidden sm:block" />
                mit deinem Körper,<br className="hidden sm:block" />
                mit der Erde<br className="hidden sm:block" />
                und mit Gott/Universum.
              </p>
              <p>
                Wenn Menschen gestresst oder ängstlich sind,<br className="hidden sm:block" />
                haben sie diese Verbindung verloren.
              </p>
            </div>
          </div>
        </section>

        {/* Exercise Title Section */}
        <section className="bg-[#EFE7D3] relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          {/* Decorative navy bar - left */}
          <div className="absolute left-0 top-1/2 w-16 md:w-20 lg:w-24 h-[250px] md:h-[300px] bg-[#1A0089] opacity-70 rotate-90 -translate-x-1/2 -translate-y-1/2 rounded-bl-[10px] rounded-br-[10px] hidden md:block" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center md:text-left px-2">
              WIE KOMMT MAN WIEDER IN DIE ERDUNG? (Übung)
            </h3>
          </div>
        </section>

        {/* Numbered Steps Section */}
        <section className="bg-[#EFE7D3] relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24">
            
            {/* Step 1 - Left side */}
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="relative flex-shrink-0 w-full md:w-auto">
                <div className="bg-[#B7CF4F] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] w-full sm:w-[380px] md:w-[420px] lg:w-[459px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] mx-auto md:mx-0" />
                <div className="absolute -right-[25px] sm:-right-[30px] md:-right-[40px] lg:-right-[45px] top-1/2 -translate-y-1/2 w-[60px] sm:w-[70px] md:w-[80px] lg:w-[91px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[91px] rounded-full bg-[#EFE7D3] flex items-center justify-center border-3 sm:border-4 border-[#B7CF4F]">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">1</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left px-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
                  Zieh deine Schuhe aus und stell dich auf den Boden (Gras oder Erde sind ideal, 
                  aber wenn du nur Beton um dich hast, stell dich einfach darauf).
                </p>
              </div>
            </div>

            {/* Step 2 - Right side */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-8">
              <div className="relative flex-shrink-0 w-full md:w-auto">
                <div className="bg-[#B7CF4F] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] w-full sm:w-[380px] md:w-[420px] lg:w-[459px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] mx-auto md:mx-0" />
                <div className="absolute -left-[25px] sm:-left-[30px] md:-left-[40px] lg:-left-[45px] top-1/2 -translate-y-1/2 w-[60px] sm:w-[70px] md:w-[80px] lg:w-[91px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[91px] rounded-full bg-[#EFE7D3] flex items-center justify-center border-3 sm:border-4 border-[#B7CF4F]">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">2</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-right px-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
                  Atme in dein Herz hinein und werde dir der Empfindungen in deinem Körper bewusst.
                </p>
              </div>
            </div>

            {/* Step 3 - Left side */}
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="relative flex-shrink-0 w-full md:w-auto">
                <div className="bg-[#B7CF4F] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] w-full sm:w-[380px] md:w-[420px] lg:w-[459px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] mx-auto md:mx-0" />
                <div className="absolute -right-[25px] sm:-right-[30px] md:-right-[40px] lg:-right-[45px] top-1/2 -translate-y-1/2 w-[60px] sm:w-[70px] md:w-[80px] lg:w-[91px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[91px] rounded-full bg-[#EFE7D3] flex items-center justify-center border-3 sm:border-4 border-[#B7CF4F]">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">3</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left px-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
                  Stell dir vor, du bist ein BAUM.
                </p>
              </div>
            </div>

            {/* Step 4 - Right side */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-8">
              <div className="relative flex-shrink-0 w-full md:w-auto">
                <div className="bg-[#B7CF4F] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] w-full sm:w-[380px] md:w-[420px] lg:w-[459px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] mx-auto md:mx-0" />
                <div className="absolute -left-[25px] sm:-left-[30px] md:-left-[40px] lg:-left-[45px] top-1/2 -translate-y-1/2 w-[60px] sm:w-[70px] md:w-[80px] lg:w-[91px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[91px] rounded-full bg-[#EFE7D3] flex items-center justify-center border-3 sm:border-4 border-[#B7CF4F]">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">4</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-right px-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
                  Schicke Energie von deinem Herzen durch deine WURZELN hinunter in die Erde.
                </p>
              </div>
            </div>

            {/* Step 5 - Left side */}
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="relative flex-shrink-0 w-full md:w-auto">
                <div className="bg-[#B7CF4F] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] w-full sm:w-[380px] md:w-[420px] lg:w-[459px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] mx-auto md:mx-0" />
                <div className="absolute -right-[25px] sm:-right-[30px] md:-right-[40px] lg:-right-[45px] top-1/2 -translate-y-1/2 w-[60px] sm:w-[70px] md:w-[80px] lg:w-[91px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[91px] rounded-full bg-[#EFE7D3] flex items-center justify-center border-3 sm:border-4 border-[#B7CF4F]">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">5</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left px-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
                  Atme Energie von der ERDE wieder hinauf in dein Herz. Atme erneut in dein Herz.
                </p>
              </div>
            </div>

            {/* Step 6 - Right side */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-8">
              <div className="relative flex-shrink-0 w-full md:w-auto">
                <div className="bg-[#B7CF4F] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] w-full sm:w-[380px] md:w-[420px] lg:w-[459px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] mx-auto md:mx-0" />
                <div className="absolute -left-[25px] sm:-left-[30px] md:-left-[40px] lg:-left-[45px] top-1/2 -translate-y-1/2 w-[60px] sm:w-[70px] md:w-[80px] lg:w-[91px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[91px] rounded-full bg-[#EFE7D3] flex items-center justify-center border-3 sm:border-4 border-[#B7CF4F]">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">6</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-right px-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
                  Schicke Energie von deinem Herzen über deine ÄSTE hinaus ins Universum.
                </p>
              </div>
            </div>

            {/* Step 7 - Left side */}
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
              <div className="relative flex-shrink-0 w-full md:w-auto">
                <div className="bg-[#B7CF4F] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] w-full sm:w-[380px] md:w-[420px] lg:w-[459px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] mx-auto md:mx-0" />
                <div className="absolute -right-[25px] sm:-right-[30px] md:-right-[40px] lg:-right-[45px] top-1/2 -translate-y-1/2 w-[60px] sm:w-[70px] md:w-[80px] lg:w-[91px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[91px] rounded-full bg-[#EFE7D3] flex items-center justify-center border-3 sm:border-4 border-[#B7CF4F]">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">7</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left px-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
                  Atme Energie aus dem Universum wieder in dein Herz zurück.
                </p>
              </div>
            </div>

            {/* Step 8 - Right side */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-4 sm:gap-6 md:gap-8">
              <div className="relative flex-shrink-0 w-full md:w-auto">
                <div className="bg-[#B7CF4F] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] w-full sm:w-[380px] md:w-[420px] lg:w-[459px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px] mx-auto md:mx-0" />
                <div className="absolute -left-[25px] sm:-left-[30px] md:-left-[40px] lg:-left-[45px] top-1/2 -translate-y-1/2 w-[60px] sm:w-[70px] md:w-[80px] lg:w-[91px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[91px] rounded-full bg-[#EFE7D3] flex items-center justify-center border-3 sm:border-4 border-[#B7CF4F]">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black">8</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-right px-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
                  Spüre, wie du vollkommen verbunden bist mit der Erde, mit deinem Herzen und mit dem Universum.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Image Section */}
        <section className="bg-[#EFE7D3] relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          {/* Decorative coral bar behind image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 md:w-24 lg:w-28 h-[900px] md:h-[1100px] bg-[#F17C6A] opacity-50 rotate-90 rounded-bl-[10px] rounded-br-[10px] hidden lg:block" />
          
          <div className="max-w-4xl mx-auto relative z-10 flex justify-center">
            {/* Image placeholder */}
            <div className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[603px] h-[420px] sm:h-[570px] md:h-[720px] lg:h-[905px] rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-900 via-yellow-700 to-green-900 flex items-center justify-center shadow-xl sm:shadow-2xl relative overflow-hidden">
              {/* Gradient overlay to simulate tree/roots imagery */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-transparent to-blue-900/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80 z-10 p-4 sm:p-6 md:p-8">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="font-semibold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">Person as Tree - Grounding Image</p>
                  <p className="text-xs sm:text-sm opacity-75">603 × 905px placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement Section */}
        <section className="bg-[#EFE7D3] relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
          {/* Decorative coral bar */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 md:w-24 lg:w-28 h-[900px] md:h-[1100px] bg-[#F17C6A] opacity-60 rotate-90 hidden lg:block" />
          
          <div className="max-w-4xl mx-auto relative z-10 text-center px-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
              Wenn wir alle geerdet bleiben, wird das LEBEN LEICHT.
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer className="relative min-h-[300px] md:min-h-[372px] w-full" />
      </div>
    </div>
  );
}
