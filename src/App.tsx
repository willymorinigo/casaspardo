import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CabanasOverview from './components/CabanasOverview';
import ServicesGrid from './components/ServicesGrid';
import BookingCalculatorForm from './components/BookingCalculatorForm';
import Gallery from './components/Gallery';
import ReviewsSection from './components/ReviewsSection';
import LocationAndContact from './components/LocationAndContact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#eae8de] font-sans text-stone-900 selection:bg-[#517e12]/30 selection:text-stone-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Hero Banner */}
      <Hero />

      {/* Cabañas Overview & Inclusions */}
      <CabanasOverview />

      {/* Services & Equipment Grid */}
      <ServicesGrid />

      {/* Interactive Booking & Availability Form */}
      <BookingCalculatorForm />

      {/* Photo Gallery */}
      <Gallery />

      {/* Visitor Reviews */}
      <ReviewsSection />

      {/* Location & Contact */}
      <LocationAndContact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Launcher */}
      <FloatingWhatsApp />
    </div>
  );
}
