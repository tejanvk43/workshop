'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoginModal } from '@/components/auth/LoginModal';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Dining', href: '/dining' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-card border-b' : 'bg-transparent'
        }`}
      >
        {/* Top bar */}
        <div className="hidden lg:block border-b border-yellow-400/10 py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6 text-yellow-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>reservations@royalstay.com</span>
                </div>
              </div>
              <div className="text-white/80">
                Premium Luxury • Since 1895
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 text-sm font-medium transition-all duration-300 hover:text-yellow-400 ${
                    pathname === item.href ? 'text-yellow-400' : 'text-white/80'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"
                    />
                  )}
                </Link>
              ))}
              <Button
                onClick={() => setShowLogin(true)}
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
              >
                Book Now
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-yellow-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-card border-t border-yellow-400/20"
            >
              <nav className="container mx-auto px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-lg font-medium transition-colors duration-300 ${
                        pathname === item.href
                          ? 'text-yellow-400'
                          : 'text-white/80 hover:text-yellow-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <Button
                  onClick={() => {
                    setShowLogin(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-300"
                >
                  Book Now
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <LoginModal open={showLogin} onOpenChange={setShowLogin} />
    </>
  );
}