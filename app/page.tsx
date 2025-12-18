"use client";

import React from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/landing/Button";

export default function LandingPage() {
  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header - Fixed at top */}
      <Header className="fixed top-0 left-0 right-0 bg-white h-[120px] md:h-[150px] lg:h-[175px] z-50 shadow-sm" />
      
      {/* Main content with padding for fixed header */}
      <div className="pt-[120px] md:pt-[150px] lg:pt-[175px]">
        
        {/* Hero Section */}
        <section className="bg-[#EFE7D3] relative py-12 sm:py-16 md:py-20 lg:py-32 px-6 md:px-8 lg:px-12 overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
          {/* Decorative pink bar */}
          <div className="absolute left-0 top-1/2 w-20 md:w-28 lg:w-32 h-[400px] md:h-[500px] lg:h-[600px] bg-[#E4ACB5] opacity-70 md:opacity-80 rotate-90 -translate-x-1/2 hidden md:block" />
          
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 leading-tight text-gray-900">
              Energitisiert durch den Tag
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8 md:mb-10 lg:mb-12 text-gray-700 max-w-3xl">
              Natürliche Heilung für Körper und Seele
            </p>
            <Button variant="Outline" className="h-[50px] md:h-[55px] w-full sm:w-auto sm:min-w-[250px] px-8" />
          </div>
          
          {/* Small green decorative bar */}
          <div className="absolute right-0 bottom-0 w-16 md:w-20 lg:w-24 h-[200px] md:h-[250px] lg:h-[300px] bg-[#B7CF4F] opacity-70 md:opacity-80 rotate-90 translate-x-1/2 hidden md:block" />
        </section>

        {/* About Section */}
        <section className="bg-white relative py-12 sm:py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
          {/* Decorative rose bar */}
          <div className="absolute left-0 top-1/3 w-20 md:w-28 lg:w-32 h-[600px] md:h-[700px] lg:h-[800px] bg-[#E4ACB5] opacity-50 md:opacity-60 rotate-90 -translate-x-1/2 hidden lg:block" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 lg:mb-12 leading-tight text-gray-900">
              Ihr Weg zu besserer Gesundheit beginnt hier.
            </h2>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed space-y-4 md:space-y-6 text-gray-700">
              <p>
                Wir setzen auf die Aktivierung der natürlichen Selbstheilungskräfte 
                Ihres Körpers mit einem entspannten, ganzheitlichen Ansatz. Dr. Hudson 
                legt Wert auf individuelle Betreuung und nimmt sich Zeit, Ihre Bedürfnisse 
                zu verstehen und Sie auf Ihrem Weg zu optimalem Wohlbefinden zu begleiten.
              </p>
              <p>
                Dank ihrer langjährigen Erfahrung in Schulmedizin, Naturheilkunde, 
                Osteopathie, ganzheitlichen Methoden und Energiearbeit bietet sie Ihnen 
                eine neue Perspektive auf Ihr Wohlbefinden. In ihrer rein telemedizinischen 
                Praxis konzentriert sie sich auf Achtsamkeit, Ernährung, Bewegung und das 
                Lösen alter, festgefahrener Muster, um Ihnen zu helfen, Ihr Gleichgewicht 
                und Ihre Homöostase wiederzuerlangen.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Post Section */}
        <section className="bg-[#EFE7D3] relative py-12 sm:py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 overflow-hidden min-h-[300px] md:min-h-[400px] flex items-center">
          {/* Navy decorative bar */}
          <div className="absolute left-1/4 top-1/2 w-16 md:w-20 lg:w-24 h-[200px] md:h-[250px] bg-[#1A0089] opacity-70 md:opacity-80 rotate-90 hidden sm:block" />
          
          {/* Cloud decoration placeholder */}
          <div className="absolute right-1/4 top-1/2 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[150px] sm:h-[200px] md:h-[280px] lg:h-[339px] -translate-y-1/2 hidden lg:block">
            <div className="w-full h-full bg-[#608AD9] opacity-20 rounded-full blur-xl" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              Neuer BLOG post!
            </h2>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-[#EFE7D3] relative py-12 sm:py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 md:mb-12 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 text-gray-900">
                Video:
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700">
                Erdung für Weihnachtsstress
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 relative">
              {/* Video Player Placeholder */}
              <div className="w-full max-w-[335px] h-[500px] md:h-[596px] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-xl relative z-10 border border-gray-300">
                <div className="text-gray-600 text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-lg mb-2">Video Placeholder</p>
                  <p className="text-sm text-gray-500">335 × 596px</p>
                </div>
              </div>
              
              {/* Branch decoration - hidden on mobile */}
              <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[400px] opacity-25 pointer-events-none">
                <svg viewBox="0 0 507 563" className="rotate-[48deg]" preserveAspectRatio="xMidYMid meet">
                  <path d="M50,100 Q150,50 250,100 T450,100" stroke="#B7CF4F" strokeWidth="10" fill="none" opacity="0.6" strokeLinecap="round" />
                  <path d="M100,200 Q200,150 300,200 T500,200" stroke="#B7CF4F" strokeWidth="8" fill="none" opacity="0.5" strokeLinecap="round" />
                  <path d="M80,300 Q180,250 280,300 T480,300" stroke="#B7CF4F" strokeWidth="6" fill="none" opacity="0.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#EFE7D3] relative py-12 sm:py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 overflow-hidden">
          {/* Green decorative bar */}
          <div className="absolute left-0 bottom-1/3 w-20 md:w-28 lg:w-32 h-[700px] md:h-[900px] lg:h-[1000px] bg-[#B7CF4F] opacity-50 md:opacity-60 rotate-90 -translate-x-1/2 hidden lg:block" />
          
          {/* Coral decorative bar */}
          <div className="absolute right-0 top-1/3 w-20 md:w-28 lg:w-32 h-[600px] md:h-[800px] lg:h-[900px] bg-[#F17C6A] opacity-50 md:opacity-60 rotate-90 translate-x-1/2 hidden lg:block" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8 md:mb-10 lg:mb-12 px-4 text-gray-900">
              Werden Sie aktiv für Ihre Gesundheit!
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-8 md:mb-10 lg:mb-12 text-gray-800">
              Vereinbaren Sie jetzt Ihren persönlichen Termin.
            </p>
            <div className="flex justify-center">
              <Button className="h-[60px] md:h-[75px] lg:h-[93px] w-full sm:w-auto sm:min-w-[280px] md:min-w-[322px] px-8 md:px-12" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer className="relative min-h-[300px] md:min-h-[372px] w-full" />
      </div>
    </div>
  );
}
