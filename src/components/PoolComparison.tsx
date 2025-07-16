import React, { useState } from 'react';
import { Droplets, Zap, Check, X } from 'lucide-react';

export default function PoolComparison() {
  const comparisonData = {
    overview: [
      { feature: 'Stable Chlorine Level', chlorine: false, salt: true },
      { feature: 'Light Chlorine Smell', chlorine: false, salt: true },
      { feature: 'Gentle on Skin & Eyes', chlorine: false, salt: true },
      { feature: 'Easy Maintenance', chlorine: false, salt: true },
      { feature: 'Low Equipment Corrosion', chlorine: false, salt: true }
    ]
  };

  return (
    <section id="comparison" className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Chlorine vs Salt Water Pools
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Understanding the differences between chlorine and salt water pool systems to help you make the best choice for your pool
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-teal-100">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-teal-100">
              <div className="p-8 bg-gradient-to-br from-cyan-50 to-teal-50">
                <div className="flex items-center mb-6">
                  <Zap className="h-8 w-8 text-cyan-600 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-800">Salt Water Pools</h3>
                </div>
                <p className="text-slate-600 mb-6">Salt chlorine generator system</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50">
                <div className="flex items-center mb-6">
                  <Droplets className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-800">Chlorine Pools</h3>
                </div>
                <p className="text-slate-600 mb-6">Traditional chlorine sanitization system</p>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-slate-800">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-cyan-700">Salt Water Pool</th>
                    <th className="text-center py-4 px-6 font-semibold text-emerald-700">Chlorine Pool</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.overview.map((item, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/50">
                      <td className="py-4 px-6 font-medium text-slate-800">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {item.salt ? (
                          <Check className="h-6 w-6 text-cyan-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {item.chlorine ? (
                          <Check className="h-6 w-6 text-emerald-600 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Our pool experts can help you determine which system is best for your specific needs, budget, and preferences.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg"
            >
              Get Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}