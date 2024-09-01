import AboutUs from "@/components/about-us";
import Teams from "@/components/teams";
import Hero from "@/components/hero";
import { SiteHeader } from "@/components/layout/site-header";
import Image from "next/image";
import Link from "next/link";
import FrequentlyAskedQuestions from "@/components/faq";

import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Teams />
      <FrequentlyAskedQuestions />
      <Testimonials />
    </>
  );
}
