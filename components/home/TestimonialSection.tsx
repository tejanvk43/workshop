'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Wellington',
    role: 'Business Executive',
    rating: 5,
    comment: 'An absolutely extraordinary experience. The attention to detail and level of service exceeded all expectations. RoyalStay truly lives up to its reputation.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    rating: 5,
    comment: 'The perfect blend of luxury and technology. Every aspect of my stay was seamless, from check-in to the personalized service. Simply outstanding.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Emma Thompson',
    role: 'Celebrity Chef',
    rating: 5,
    comment: 'As someone who appreciates fine dining, I was blown away by the culinary experience. The restaurants here rival the best in the world.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

export function TestimonialSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-green-400/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl font-bold text-white mb-6">
            Guest <span className="text-yellow-400">Testimonials</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover what our distinguished guests have to say about their 
            unforgettable experiences at RoyalStay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-card h-full hover:gold-glow transition-all duration-500 relative">
                <CardContent className="p-8">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-6 right-6 text-yellow-400/30"
                  >
                    <Quote className="w-8 h-8" />
                  </motion.div>
                  
                  <div className="flex items-center mb-6">
                    <Avatar className="w-16 h-16 border-2 border-yellow-400/50">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-yellow-400 text-black font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="ml-4">
                      <h4 className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                      
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-white/80 leading-relaxed italic">
                    "{testimonial.comment}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}