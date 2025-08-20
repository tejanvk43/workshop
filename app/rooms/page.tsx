'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Users, Wifi, Car, Coffee, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const rooms = [
  {
    id: 1,
    name: 'Deluxe King Room',
    type: 'Deluxe',
    price: 299,
    rating: 4.8,
    size: '450 sq ft',
    beds: '1 King Bed',
    capacity: '2 Guests',
    amenities: ['City View', 'Marble Bathroom', 'Work Desk', '24/7 Room Service'],
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [Wifi, Car, Coffee, Bath]
  },
  {
    id: 2,
    name: 'Executive Suite',
    type: 'Suite',
    price: 599,
    rating: 4.9,
    size: '750 sq ft',
    beds: '1 King Bed',
    capacity: '3 Guests',
    amenities: ['Ocean View', 'Living Area', 'Kitchenette', 'Premium Amenities'],
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [Wifi, Car, Coffee, Bath]
  },
  {
    id: 3,
    name: 'Royal Suite',
    type: 'Suite',
    price: 899,
    rating: 5.0,
    size: '1200 sq ft',
    beds: '1 King Bed + Sofa Bed',
    capacity: '4 Guests',
    amenities: ['Panoramic View', 'Dining Area', 'Butler Service', 'Private Terrace'],
    image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [Wifi, Car, Coffee, Bath]
  },
  {
    id: 4,
    name: 'Presidential Villa',
    type: 'Villa',
    price: 1299,
    rating: 5.0,
    size: '2000 sq ft',
    beds: '2 King Beds',
    capacity: '6 Guests',
    amenities: ['Private Pool', 'Garden View', 'Full Kitchen', 'Concierge Service'],
    image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [Wifi, Car, Coffee, Bath]
  },
  {
    id: 5,
    name: 'Garden View Room',
    type: 'Standard',
    price: 199,
    rating: 4.6,
    size: '350 sq ft',
    beds: '2 Queen Beds',
    capacity: '4 Guests',
    amenities: ['Garden View', 'Twin Beds Available', 'Mini Fridge', 'Cable TV'],
    image: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [Wifi, Car, Coffee]
  },
  {
    id: 6,
    name: 'Penthouse Suite',
    type: 'Suite',
    price: 1899,
    rating: 5.0,
    size: '3000 sq ft',
    beds: '3 King Beds',
    capacity: '8 Guests',
    amenities: ['Rooftop Access', 'Private Chef', 'Helicopter Pad', 'Wine Cellar'],
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [Wifi, Car, Coffee, Bath]
  }
];

const roomTypes = ['All', 'Standard', 'Deluxe', 'Suite', 'Villa'];
const sortOptions = ['Price: Low to High', 'Price: High to Low', 'Rating', 'Size'];

export default function RoomsPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('Price: Low to High');
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  const handleFilter = (type: string) => {
    setSelectedType(type);
    let filtered = type === 'All' ? rooms : rooms.filter(room => room.type === type);
    
    // Apply sorting
    filtered = sortRooms(filtered, sortBy);
    setFilteredRooms(filtered);
  };

  const handleSort = (sort: string) => {
    setSortBy(sort);
    const sorted = sortRooms(filteredRooms, sort);
    setFilteredRooms(sorted);
  };

  const sortRooms = (roomsToSort: any[], sortOption: string) => {
    return [...roomsToSort].sort((a, b) => {
      switch (sortOption) {
        case 'Price: Low to High':
          return a.price - b.price;
        case 'Price: High to Low':
          return b.price - a.price;
        case 'Rating':
          return b.rating - a.rating;
        case 'Size':
          return parseInt(b.size) - parseInt(a.size);
        default:
          return 0;
      }
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-6xl font-bold text-white mb-6">
            Luxury <span className="text-yellow-400">Accommodations</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our collection of exquisitely appointed rooms and suites, 
            each designed to provide an unparalleled level of comfort and elegance.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 glass-card p-6 rounded-xl"
        >
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            {roomTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => handleFilter(type)}
                className={`${
                  selectedType === type
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                    : 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                } transition-all duration-300`}
              >
                {type}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-yellow-400" />
            <Select value={sortBy} onValueChange={handleSort}>
              <SelectTrigger className="w-48 bg-black/40 border-yellow-400/30 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-black border-yellow-400/30">
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option} className="text-white hover:bg-yellow-400/20">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="glass-card overflow-hidden hover:gold-glow transition-all duration-500 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-400 text-black font-semibold">
                      {room.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center bg-black/50 rounded-full px-2 py-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-white font-medium">{room.rating}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 rounded-lg px-3 py-1">
                    <span className="text-white font-semibold">{room.size}</span>
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

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-yellow-400" />
                      {room.beds}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-yellow-400" />
                      {room.capacity}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {room.amenities.slice(0, 2).map((amenity) => (
                      <Badge 
                        key={amenity}
                        variant="secondary"
                        className="bg-white/10 text-white/80 text-xs"
                      >
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 2 && (
                      <Badge variant="secondary" className="bg-white/10 text-white/80 text-xs">
                        +{room.amenities.length - 2} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-3 text-white/60">
                      {room.features.map((Icon, idx) => (
                        <Icon key={idx} className="w-5 h-5" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      className="flex-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                    >
                      View Details
                    </Button>
                    <Button 
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:from-yellow-300 hover:to-green-300"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}