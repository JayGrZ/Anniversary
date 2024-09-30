"use client";
import Card from "@/components/features/Card";
import Header from "@/components/features/Header";
import { LayoutGridDemo } from "@/components/features/layout-demo";
import { Spotify } from "@/components/features/Spotify";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black">
      <div className="h-full rounded-md bg-[#100b22] flex flex-col items-center justify-center relative w-full p-5 z-1">
        <div className="z-20">
          <Header />
          <LayoutGridDemo />
          <Card />
          <Spotify />
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>
    </main>
  );
}
