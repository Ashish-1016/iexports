"use client";

import { HeroSection } from "@/components/MidPoint/HeroSection";
import { MidPointContainer } from "@/components/MidPoint/MidPointContainer";
import { Header } from "@/components/MidPoint/Header";

export default function Home() {

  return (
    <main className="flex flex-col w-[100%] p-[1em] h-full items-center">
      <Header />
      <div className="w-full h-full items-center flex max-md:flex-col justify-between overflow-auto">
        <HeroSection/>
        <MidPointContainer/>
      </div>
    </main>
  );
}
