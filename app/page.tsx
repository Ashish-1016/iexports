"use client";

import { HeroSection } from "@/components/HeroSection";
import { MidPointContainer } from "@/components/MidPointContainer";
import { Header } from "@/components/Header";

export default function Home() {

  return (
    <main className="flex flex-col w-[100%] p-[1em] h-svh items-center">
      <Header />
      <div className="w-full h-[92vh] items-center flex max-md:flex-col justify-between overflow-auto">
        <HeroSection/>
        <MidPointContainer/>
      </div>
    </main>
  );
}
