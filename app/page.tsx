"use client";
import Footer from '@/components/Footer'
import About from '@/components/About'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Form from '@/components/Form';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Timeline />
      <Form />
      <Footer />
    </div>
  )
}
