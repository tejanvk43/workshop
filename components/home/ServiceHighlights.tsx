'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Waves, Dumbbell, Car, Calendar, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'World-class cuisine crafted by Michelin-starred chefs',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: Waves,
    title: 'Luxury Spa',
    description: 'Rejuvenating treatments in our award-winning spa facility',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art equipment with personal training available',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Car,
    title: 'Concierge',
    description: '24/7 personalized service for all your luxury needs',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Calendar,
    title: 'Event Venues',
    description: 'Exquisite spaces for weddings and corporate events',
    color: 'from-pink-400 to-pink-600'
  },
  {
    icon: Crown,
    title: 'VIP Services',
    description: 'Exclusive experiences tailored for our distinguished guests',
    color: 'from-yellow-400 to-green-400'
  }
];

export function ServiceHighlights() {
  return (
    <section className="py-24 luxury-gradient relative">
      <div className="absolute inset-0 vintage-texture opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl font-bold text-white mb-6">
            Luxury <span className="text-green-400">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Immerse yourself in our world of premium amenities and personalized services, 
            designed to exceed your every expectation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="glass-card h-full hover:green-glow transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`h-1 mx-auto mt-6 rounded-full bg-gradient-to-r ${service.color}`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}