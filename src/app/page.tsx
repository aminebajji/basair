import AboutUs from "@/components/about-us";
import Hero from "@/components/hero";
import { SiteHeader } from "@/components/layout/site-header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
    </>
  );
}
