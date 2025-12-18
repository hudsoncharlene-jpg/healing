"use client";

import React from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/landing/Button";

export default function LandingPage() {
  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header - Fixed at top */}
      <Header className="fixed top-0 left-0 right-0 bg-white h-[175px] z-50 shadow-sm" />
      
      {/* Main content with padding for fixed header */}
      <div className="pt-[175px]">
        
        {/* Hero Section */}
        <section className="bg-[#EFE7D3] relative py-16 md:py-24 lg:py-32 px-4 md:px-8 overflow-hidden">
          {/* Decorative pink bar */}
          <div className="absolute left-0 top-1/2 w-32 h-[600px] bg-[#E4ACB5] opacity-80 rotate-90 -translate-x-1/2 hidden lg:block" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
              Energitisiert durch den Tag
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 md:mb-12 text-gray-800">
              Natürliche Heilung für Körper und Seele
            </p>
            <Button variant="Outline" className="h-[55px] w-full sm:w-[250px]" />
          </div>
          
          {/* Small green decorative bar */}
          <div className="absolute right-0 bottom-0 w-24 h-[300px] bg-[#B7CF4F] opacity-80 rotate-90 translate-x-1/2 hidden lg:block" />
        </section>

        {/* About Section */}
        <section className="bg-white relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
          {/* Decorative rose bar */}
          <div className="absolute left-0 top-1/3 w-32 h-[800px] bg-[#E4ACB5] opacity-60 rotate-90 -translate-x-1/2 hidden lg:block" />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 md:mb-12 leading-tight">
              Ihr Weg zu besserer Gesundheit beginnt hier.
            </h2>
            <div className="text-lg md:text-xl lg:text-2xl font-medium leading-normal space-y-4 text-gray-800">
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
        <section className="bg-[#EFE7D3] relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
          {/* Navy decorative bar */}
          <div className="absolute left-1/4 top-1/2 w-24 h-[250px] bg-[#1A0089] opacity-80 rotate-90 hidden md:block" />
          
          {/* Cloud decoration placeholder */}
          <div className="absolute right-1/4 top-1/2 w-[300px] md:w-[500px] h-[200px] md:h-[339px] -translate-y-1/2 hidden lg:block">
            {/* TODO: Replace with union-cloud.svg */}
            <div className="w-full h-full bg-[#608AD9] opacity-20 rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8">
              Neuer BLOG post!
            </h2>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-[#EFE7D3] relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 md:mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                Video:
              </h2>
              <p className="text-2xl md:text-3xl font-medium text-gray-800">
                Erdung für Weihnachtsstress
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
              {/* Video Player Placeholder */}
              <div className="w-full max-w-[335px] h-[500px] md:h-[596px] rounded-[10px] bg-gray-200 flex items-center justify-center shadow-lg relative z-10">
                {/* TODO: Replace with actual video source */}
                <div className="text-gray-500 text-center p-4">
                  <p className="font-medium mb-2">Video Placeholder</p>
                  <p className="text-sm">335x596px</p>
                  <p className="text-xs mt-2">Add video file to /public/videos/</p>
                </div>
              </div>
              
              {/* Branch decoration - hidden on mobile */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[450px] opacity-30 pointer-events-none">
                {/* TODO: Replace with branch-v1.svg */}
                <svg viewBox="0 0 507 563" className="rotate-[48deg]">
                  <path d="M50,100 Q150,50 250,100 T450,100" stroke="#B7CF4F" strokeWidth="8" fill="none" opacity="0.5" />
                  <path d="M100,200 Q200,150 300,200 T500,200" stroke="#B7CF4F" strokeWidth="6" fill="none" opacity="0.4" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#EFE7D3] relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
          {/* Green decorative bar */}
          <div className="absolute left-0 bottom-1/3 w-32 h-[1000px] bg-[#B7CF4F] opacity-60 rotate-90 -translate-x-1/2 hidden lg:block" />
          
          {/* Coral decorative bar */}
          <div className="absolute right-0 top-1/3 w-32 h-[900px] bg-[#F17C6A] opacity-60 rotate-90 translate-x-1/2 hidden lg:block" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8 md:mb-12 px-4">
              Werden Sie aktiv für Ihre Gesundheit!
              <br />
              <br />
              Vereinbaren Sie jetzt Ihren persönlichen Termin.
            </h2>
            <div className="flex justify-center">
              <Button className="h-[70px] md:h-[93px] w-full sm:w-[280px] md:w-[322px]" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer className="relative min-h-[372px] w-full" />
      </div>
    </div>
  );
}
