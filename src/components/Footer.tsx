import React from 'react';
import { Waves, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold">BlueChoice Pool</span>
            </div>
            <p className="text-slate-400 mb-4">
              Professional pool services for Central Florida. Expert maintenance, repair, and remodeling for both chlorine and salt water pools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Pool Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Pool Maintenance</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Drain & Clean</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Filter Service</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Equipment Repair</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Leak Detection</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#comparison" className="text-slate-400 hover:text-white transition-colors">Pool Comparison</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-slate-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-teal-400" />
                <span className="text-slate-400">(407) 453-2777</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-teal-400" />
                <span className="text-slate-400">bluechoicepool@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span className="text-slate-400">Central Florida Area</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-teal-400" />
                <span className="text-slate-400">8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2024 BlueChoice Pool. All rights reserved. Licensed, Bonded & Insured.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}