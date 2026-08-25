import React from "react";
import Hero from "@/components/Hero";
import SpaceSection from "@/components/SpaceSection";
import TeaMenu from "@/components/TeaMenu";
import OrderMenu from "@/components/OrderMenu";

export default function Home() {
  return (
    <>
      <Hero />
      <SpaceSection />
      <TeaMenu />
      <OrderMenu />
    </>
  );
}