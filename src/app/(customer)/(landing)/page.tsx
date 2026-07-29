"use client";

import Navbar from "@/components/customer/navbar";
import Hero from "@/components/customer/hero";
import Infinite from "@/components/customer/infinite"
import About from "@/components/customer/about";
import WhyChoose from "@/components/customer/whyChoose";
import BestSeller from "@/components/customer/bestSeller";
import Reviews from "@/components/customer/reviews";
import Gallery from "@/components/customer/gallery";
import Footer from "@/components/customer/footer";
import ScrollToLogin from "@/components/customer/Scrolltologin";

const Page = () => {
  return (
    <main className="relative bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Infinite />
      <About />
      <WhyChoose />
      <BestSeller />
      <Reviews />
      <Gallery />
      <Footer />
      <ScrollToLogin />
    </main>
  );
};

export default Page;