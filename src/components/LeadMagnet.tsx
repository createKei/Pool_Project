import React from 'react';
import { X, Sparkles, Star } from 'lucide-react';

interface LeadMagnetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadMagnet({ isOpen, onClose }: LeadMagnetProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-amber-200 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div className="flex items-center mb-4">
            <Sparkles className="h-8 w-8 mr-3" />
            <h2 className="text-3xl font-bold">Luxury Upgrade Package</h2>
          </div>
          <div className="text-2xl font-bold mb-2">Starting at $2,499</div>
          <div className="space-y-2 text-amber-100">
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2" />
              <span>Salt cell and automation upgrade with name brand Hayward equipment</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2" />
              <span>Must have a 6 month contract for full cleaning and maintenance service</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2" />
              <span>Includes salt supply up to 25,000 gallons</span>
            </div>
            <div className="text-sm italic">*Restrictions apply</div>
          </div>
        </div>
      </div>
    </div>
  );
}
