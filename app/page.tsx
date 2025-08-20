'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedRooms } from '@/components/home/FeaturedRooms';
import { ServiceHighlights } from '@/components/home/ServiceHighlights';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <HeroSection />
      <FeaturedRooms />
      <ServiceHighlights />
      <TestimonialSection />
      <NewsletterSection />
    </motion.div>
  );
}