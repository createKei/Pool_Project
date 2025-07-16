import React from 'react';
import { ArrowRight, Star, Users, Award, Droplets } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/261105/pexels-photo-261105.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-teal-900/60 to-cyan-900/70" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 pt-20 text-center sm:text-left w-full sm:w-auto">
            <Droplets className="hidden sm:block h-12 w-12 text-cyan-300 mb-2 sm:mb-0 sm:mr-4" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight w-full sm:w-auto">
              BlueChoice Pool
            </h1>
          </div>


          <h2 className="text-3xl md:text-4xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
            Professional Pool Services & Maintenance
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-3xl mx-auto font-light">
            Expert pool cleaning, maintenance, and remodeling services. Specializing in both chlorine and salt water pool systems with professional equipment repair and installation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/80 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              Pool Comparison Guide
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-teal-600 p-3 rounded-full">
                <Award size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">Licensed</div>
                <div className="text-slate-300 font-light">& Insured</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-teal-600 p-3 rounded-full">
                <Users size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">Expert</div>
                <div className="text-slate-300 font-light">Service Team</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="bg-teal-600 p-3 rounded-full">
                <Star size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-slate-300 font-light">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}