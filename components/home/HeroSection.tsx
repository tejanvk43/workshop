'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export function HeroSection() {
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
          </div>
          
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
            RoyalStay
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto">
            Experience the Pinnacle of Luxury Hospitality
          </p>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
            Where timeless elegance meets modern sophistication. Since 1895, we have been setting the standard for luxury accommodation and exceptional service.
          </p>
        </motion.div>

        {/* Booking Search Form */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="glass-card max-w-6xl mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-yellow-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Destination
                </label>
                <Input
                  placeholder="Where are you going?"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  className="bg-black/40 border-yellow-400/30 text-white placeholder-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-yellow-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Check-in
                </label>
                <Input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                  className="bg-black/40 border-yellow-400/30 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-yellow-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Check-out
                </label>
                <Input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                  className="bg-black/40 border-yellow-400/30 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-yellow-400 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Guests
                </label>
                <select
                  value={searchData.guests}
                  onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                  className="w-full px-3 py-2 bg-black/40 border border-yellow-400/30 rounded-md text-white"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
            </div>
            
            <Button 
              className="w-full mt-8 bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:from-yellow-300 hover:to-green-300 font-semibold py-4 text-lg gold-glow"
              size="lg"
            >
              <Search className="w-5 h-5 mr-2" />
              Search Luxury Stays
            </Button>
          </Card>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}