'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Wifi, Car, Coffee, Bath } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const featuredRooms = [
  {
    id: 1,
    name: 'Royal Suite',
    price: 899,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
    amenities: ['King Bed', 'City View', 'Balcony', 'Butler Service'],
    features: [Wifi, Car, Coffee, Bath]
  },
  {
    id: 2,
    name: 'Executive Villa',
    price: 1299,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
    amenities: ['Private Pool', 'Garden View', 'Kitchenette', 'Concierge'],
    features: [Wifi, Car, Coffee, Bath]
  },
  {
    id: 3,
    name: 'Presidential Suite',
    price: 1899,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600',
    amenities: ['Penthouse', 'Panoramic View', 'Private Chef', 'Helicopter Pad'],
    features: [Wifi, Car, Coffee, Bath]
  }
];

export function FeaturedRooms() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl font-bold text-white mb-6">
            Featured <span className="text-yellow-400">Accommodations</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our most prestigious rooms and suites, each designed to provide 
            an unforgettable experience of luxury and comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-card overflow-hidden hover:gold-glow transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-400 text-black font-semibold">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{room.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-playfair text-2xl font-semibold text-white">
                      {room.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-400">
                        ${room.price}
                      </div>
                      <div className="text-sm text-white/60">per night</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.map((amenity) => (
                      <Badge 
                        key={amenity}
                        variant="secondary"
                        className="bg-white/10 text-white/80 hover:bg-yellow-400/20"
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-4 text-white/60">
                      {room.features.map((Icon, idx) => (
                        <Icon key={idx} className="w-5 h-5" />
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                    size="lg"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}