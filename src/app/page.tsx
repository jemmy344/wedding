"use client"
import Image from 'next/image'
import LandingPage from '../pages/LandingPage'
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});


export default function Home() {
  return (
    <>
    <AnimatedCursor/>
    <LandingPage />
    </>
  )
}
