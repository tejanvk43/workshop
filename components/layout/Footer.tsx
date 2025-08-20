'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Crown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-400/20 relative">
      <div className="absolute inset-0 vintage-texture opacity-10" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-yellow-400"
              >
                <Crown className="w-8 h-8" />
              </motion.div>
              <span className="font-playfair font-bold text-2xl bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                RoyalStay
              </span>
            </Link>
            
            <p className="text-white/70 leading-relaxed">
              Experience the pinnacle of luxury hospitality since 1895. Where timeless elegance meets modern sophistication.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-yellow-400/10 hover:bg-yellow-400 text-yellow-400 hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Rooms & Suites', href: '/rooms' },
                { name: 'Dining', href: '/dining' },
                { name: 'Amenities', href: '/amenities' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Events', href: '/events' },
                { name: 'About Us', href: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-white mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-white/70">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p>123 Luxury Boulevard</p>
                  <p>Downtown District, NYC 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <p>reservations@royalstay.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-white mb-6">
              Stay Updated
            </h3>
            <p className="text-white/70 mb-4">
              Subscribe for exclusive offers and luxury travel insights.
            </p>
            
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-black/40 border-yellow-400/30 text-white placeholder-white/50"
              />
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:from-yellow-300 hover:to-green-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-400/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 RoyalStay Hotel. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}