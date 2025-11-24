import { sanityFetch } from "@/sanity/lib/live";
import { HEADER_QUERY } from "@/sanity/lib/queries";
import React from "react";
import AccessorySection from "./sections/AccessorySection";
import ColorSection from "./sections/ColorSection";
import EfficiencySection from "./sections/EfficiencySection";
import GallerySection from "./sections/GallerySection";
import HeroSection from "./sections/HeroSection";
import NewsletterSection from "./sections/NewsletterSection";
import ProductInfoSection from "./sections/ProductInfoSection";
import TestimonialSection from "./sections/TestimonialSection";
import Header from "../../common/header/Header";

export default async function LandingPage() {
  const { data: posts } = await sanityFetch({ query: HEADER_QUERY });
  console.log(posts?.logo);
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <ProductInfoSection />
      <EfficiencySection />
      <AccessorySection />
      <GallerySection />
      <ColorSection />
      <TestimonialSection />
      <NewsletterSection />
    </React.Fragment>
  );
}
