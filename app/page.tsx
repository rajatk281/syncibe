"use client";
import Hero from "./Components/Hero";
import { useRef } from "react";
import Features from "./Components/Features";
import Platforms from "./Components/Platforms";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
        <Hero />
        <Features/>
        <Platforms/>
    </div>
  );
}