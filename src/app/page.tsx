import Carousel from "@/components/carousel";
import { SiteHeader } from "@/components/layout/site-header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Carousel />
    </>
  );
}
