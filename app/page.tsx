"use client";
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Cards from '@/components/Cards'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Timeline from '@/components/Timeline'
import Form from '@/components/Form';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Cards />
      <Form />
      <Footer />
    </div>
  )
}
