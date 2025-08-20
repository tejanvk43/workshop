'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-black via-yellow-400/5 to-green-400/5 relative">
      <div className="absolute inset-0 vintage-texture opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-yellow-400 to-green-400 flex items-center justify-center"
              >
                <Mail className="w-10 h-10 text-black" />
              </motion.div>
              
              <h2 className="font-playfair text-4xl font-bold text-white mb-6">
                Stay Updated with <span className="text-yellow-400">RoyalStay</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Subscribe to our exclusive newsletter and be the first to know about 
                special offers, luxury packages, and upcoming events.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-black/40 border-yellow-400/30 text-white placeholder-white/50"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:from-yellow-300 hover:to-green-300 px-8"
                    size="lg"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-white/60 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}