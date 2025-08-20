'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Crown, Star, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const milestones = [
  { year: 1895, title: 'Foundation', description: 'RoyalStay was established by the prestigious Blackwood family' },
  { year: 1920, title: 'Expansion', description: 'Added the iconic East Wing with 50 luxury suites' },
  { year: 1955, title: 'Royal Recognition', description: 'Received the first Royal Warrant for exceptional hospitality' },
  { year: 1978, title: 'Michelin Stars', description: 'Our restaurants earned their first Michelin stars' },
  { year: 1995, title: 'Centennial', description: 'Celebrated 100 years of luxury hospitality excellence' },
  { year: 2010, title: 'Sustainability', description: 'Launched our comprehensive green initiative program' },
  { year: 2024, title: 'Digital Era', description: 'Introduced cutting-edge technology while preserving classic elegance' }
];

const achievements = [
  { icon: Award, title: 'World\'s Leading Hotel', value: '2023', color: 'from-yellow-400 to-yellow-600' },
  { icon: Star, title: 'Forbes Five-Star', value: '15 Years', color: 'from-green-400 to-green-600' },
  { icon: Users, title: 'Happy Guests', value: '500K+', color: 'from-blue-400 to-blue-600' },
  { icon: Crown, title: 'Royal Warrants', value: '3', color: 'from-purple-400 to-purple-600' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-playfair text-6xl font-bold text-white mb-6">
            Our <span className="text-yellow-400">Legacy</span>
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            For over a century, RoyalStay has stood as a beacon of luxury hospitality, 
            where timeless elegance meets modern sophistication. Our story is one of 
            unwavering commitment to excellence, innovation, and the art of hospitality.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="RoyalStay Historic Building"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-80">Est. 1895</p>
                <p className="text-lg font-semibold">The Historic RoyalStay</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-playfair text-4xl font-bold text-white">
              A Heritage of <span className="text-green-400">Excellence</span>
            </h2>
            
            <p className="text-white/80 leading-relaxed">
              Founded in 1895 by the visionary entrepreneur Lord Edmund Blackwood, 
              RoyalStay began as a grand mansion designed to host the world's most 
              distinguished guests. What started as an intimate gathering place for 
              royalty and dignitaries has evolved into one of the world's most 
              celebrated luxury hotels.
            </p>
            
            <p className="text-white/80 leading-relaxed">
              Throughout our storied history, we have maintained our founding 
              principles: exceptional service, attention to detail, and an 
              unwavering commitment to creating unforgettable experiences. 
              Each guest who walks through our doors becomes part of our 
              continuing legacy.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-yellow-400">{achievement.value}</div>
                  <div className="text-white/70 text-sm">{achievement.title}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="font-playfair text-4xl font-bold text-white text-center mb-16">
            Our <span className="text-yellow-400">Journey</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-green-400 rounded-full" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="glass-card hover:gold-glow transition-all duration-500">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-playfair text-xl font-semibold text-white">
                            {milestone.title}
                          </h3>
                          <span className="text-yellow-400 font-bold text-lg">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-white/70">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-black shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-playfair text-4xl font-bold text-white mb-16">
            Our <span className="text-green-400">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Crown,
                title: 'Excellence',
                description: 'We strive for perfection in every detail, ensuring each guest experience surpasses expectations.'
              },
              {
                icon: Shield,
                title: 'Integrity',
                description: 'Our commitment to honesty, transparency, and ethical practices guides everything we do.'
              },
              {
                icon: Star,
                title: 'Innovation',
                description: 'We embrace new technologies and ideas while preserving the timeless elegance that defines us.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="glass-card h-full hover:green-glow transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center">
                      <value.icon className="w-10 h-10 text-black" />
                    </div>
                    
                    <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                      {value.title}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}