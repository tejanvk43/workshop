'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
            Contact <span className="text-yellow-400">RoyalStay</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We're here to assist you with reservations, special requests, or any questions 
            about your luxury experience with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-white flex items-center gap-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                    <p className="text-white/70">+1 (555) 123-4568 (Reservations)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-white/70">info@royalstay.com</p>
                    <p className="text-white/70">reservations@royalstay.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Address</h3>
                    <p className="text-white/70">123 Luxury Boulevard</p>
                    <p className="text-white/70">Downtown District, NYC 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Hours</h3>
                    <p className="text-white/70">24/7 Front Desk & Concierge</p>
                    <p className="text-white/70">Check-in: 3:00 PM | Check-out: 12:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="glass-card">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-yellow-400/20 to-green-400/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                    <p className="text-lg font-semibold">Interactive Map</p>
                    <p className="text-white/60">Downtown Luxury District</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-white">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-yellow-400">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-black/40 border-yellow-400/30 text-white"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-yellow-400">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-black/40 border-yellow-400/30 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-yellow-400">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-black/40 border-yellow-400/30 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-yellow-400">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-black/40 border-yellow-400/30 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-yellow-400">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-black/40 border-yellow-400/30 text-white resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:from-yellow-300 hover:to-green-300 font-semibold py-3"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Card className="glass-card">
            <CardContent className="p-8 text-center">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                For urgent matters or immediate booking assistance, our dedicated concierge team 
                is available 24/7 to ensure your needs are met with the utmost care and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  Call Now: +1 (555) 123-4567
                </Button>
                <Button 
                  className="bg-gradient-to-r from-green-400 to-blue-400 text-black hover:from-green-300 hover:to-blue-300"
                >
                  Live Chat Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}