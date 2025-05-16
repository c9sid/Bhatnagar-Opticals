import Brands from "@/components/Brands";
import Customers from "@/components/Customers";
import FindUs from "@/components/FindUs";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <About />
      <WhatWeOffer />
      <Brands />
      <Customers />
      <FindUs />
      <Form />
    </>
  );
}
