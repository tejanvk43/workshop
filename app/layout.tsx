import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: "RoyalStay - Luxury Hotel Booking",
  description: "Experience luxury and elegance at RoyalStay. Book your perfect getaway with our premium accommodations and world-class service.",
  keywords: 'luxury hotel, premium accommodation, fine dining, spa, wedding venue',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-white font-sans antialiased">
        <div className="relative vintage-texture">
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}