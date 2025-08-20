'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', loginData);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', signupData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 bg-black border-2 border-yellow-400/50 gold-glow">
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 z-10 text-white/60 hover:text-white"
          >
            <X className="w-4 h-4" />
          </Button>

          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl font-bold text-white mb-2">
                Welcome to <span className="text-yellow-400">RoyalStay</span>
              </h2>
              <p className="text-white/70">Your luxury experience awaits</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-black/40 border border-yellow-400/20">
                <TabsTrigger 
                  value="login" 
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger 
                  value="signup"
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-yellow-400 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      className="bg-black/40 border-yellow-400/30 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-yellow-400 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="bg-black/40 border-yellow-400/30 text-white pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:from-yellow-300 hover:to-green-300 font-semibold"
                  >
                    Sign In
                  </Button>

                  <div className="text-center">
                    <Button variant="link" className="text-yellow-400 hover:text-yellow-300">
                      Forgot your password?
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="mt-6">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-yellow-400 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={signupData.name}
                      onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                      className="bg-black/40 border-yellow-400/30 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-yellow-400 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      value={signupData.email}
                      onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                      className="bg-black/40 border-yellow-400/30 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-yellow-400 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Password
                    </Label>
                    <Input
                      id="signup-password"
                      type="password"
                      value={signupData.password}
                      onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                      className="bg-black/40 border-yellow-400/30 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-yellow-400 flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Confirm Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                      className="bg-black/40 border-yellow-400/30 text-white"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:from-yellow-300 hover:to-green-300 font-semibold"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}