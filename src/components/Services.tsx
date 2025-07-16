import React from 'react';
import { Calendar, Droplets, Sparkles, Filter, Wrench, GraduationCap, Waves, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      name: "Pool Maintenance",
      icon: <Calendar className="h-8 w-8" />,
      description: "Weekly pool cleaning and maintenance service to keep your pool crystal clear"
    },
    {
      name: "Drain & Clean",
      icon: <Droplets className="h-8 w-8" />,
      description: "Complete pool draining and deep cleaning for heavily stained or neglected pools"
    },
    {
      name: "One Time Clean",
      icon: <Sparkles className="h-8 w-8" />,
      description: "Single comprehensive pool cleaning service for special occasions or one-time needs"
    },
    {
      name: "Cartridge Filter",
      icon: <Filter className="h-8 w-8" />,
      description: "Professional cartridge filter cleaning and maintenance service"
    },
    {
      name: "DE Filter",
      icon: <Filter className="h-8 w-8" />,
      description: "Diatomaceous earth filter service and maintenance"
    },
    {
      name: "Pool Start-ups",
      icon: <Waves className="h-8 w-8" />,
      description: "Professional pool opening and startup service for new or seasonal pools"
    },
    {
      name: "Spa Start-ups",
      icon: <Waves className="h-8 w-8" />,
      description: "Expert spa and hot tub startup service with proper chemical balancing"
    },
    {
      name: "Pool School",
      icon: <GraduationCap className="h-8 w-8" />,
      description: "Educational service teaching proper pool maintenance and chemical handling"
    },
    {
      name: "Equipment Repair",
      icon: <Wrench className="h-8 w-8" />,
      description: "Professional diagnosis and repair of all pool equipment and systems"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Professional Pool Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive pool maintenance, repair, and educational services to keep your pool in perfect condition year-round
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-teal-100"
            >
              <div className="bg-teal-600 text-white p-4 rounded-full w-fit mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.name}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-6">Why Choose BlueChoice Pool?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-6 w-6 text-teal-200" />
              <span className="font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-6 w-6 text-teal-200" />
              <span className="font-medium">20+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-6 w-6 text-teal-200" />
              <span className="font-medium">Expert Training</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-6 w-6 text-teal-200" />
              <span className="font-medium">Satisfaction Guarantee</span>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}