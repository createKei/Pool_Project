import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import LeadMagnet from './LeadMagnet';

export default function LeadMagnetTrigger() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds if not shown before
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsPopupOpen(true);
        setHasShown(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasShown]);

  // Show popup when user scrolls to 50% of page
  useEffect(() => {
    const handleScroll = () => {
      if (hasShown) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 50) {
        setIsPopupOpen(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-40 animate-pulse"
      >
        <Sparkles size={24} />
      </button>

      {/* Popup */}
      <LeadMagnet 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
}