"use client";
import dynamic from "next/dynamic";
import LandingPage from "../pages/LandingPage";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <AnimatedCursor />
      <LandingPage />
    </>
  );
}
