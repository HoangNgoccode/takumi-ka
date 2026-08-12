import React from "react";
import Hero from "@/components/Hero";
import PastryGallery from "@/components/PastryGallery";
import BeverageMenu from "@/components/BeverageMenu";
import AboutSection from "@/components/AboutSection";
import VisitSection from "@/components/VisitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PastryGallery />
      <BeverageMenu />
      <AboutSection />
      <VisitSection />
    </>
  );
}