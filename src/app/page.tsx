import AboutUs from "@/components/about-us";
import Teams from "@/components/teams";
import Hero from "@/components/hero";
import { SiteHeader } from "@/components/layouts/site-header";
import Image from "next/image";
import Link from "next/link";
import FrequentlyAskedQuestions from "@/components/faq";

import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <section id="hero-section">
        <Hero />
      </section>
      <section id="about-section">
        <AboutUs />
      </section>
      <section id="teams-section">
        <Teams />
      </section>
      <section id="faq-section">
        <FrequentlyAskedQuestions />
      </section>
      <section id="testimonials-section">
        <Testimonials />
      </section>
    </>
  );
}
