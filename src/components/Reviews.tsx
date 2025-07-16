import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Reviews() {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      service: "Salt Cell Conversion",
      location: "Mount Dora, FL",
      rating: 5,
      text: "BlueChoice Pool converted our chlorine pool to salt water and the difference is amazing! The water feels so much softer and our maintenance costs have dropped significantly. Professional service from start to finish.",
      poolImage: "https://images.pexels.com/photos/261105/pexels-photo-261105.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      service: "Pool Remodeling",
      location: "Winter Park, FL",
      rating: 5,
      text: "Complete pool transformation with new tile, LED lighting, and modern jets. The project was completed on time and within budget. Our backyard is now the envy of the neighborhood!",
      poolImage: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      service: "Drain & Clean",
      location: "Sanford, FL",
      rating: 5,
      text: "Our pool was green and stained from neglect. BlueChoice Pool brought it back to life with a complete drain and clean. The results are incredible - crystal clear water!",
      poolImage: "https://images.pexels.com/photos/261105/pexels-photo-261105.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Customer Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See the amazing transformations and read what our customers say about BlueChoice Pool services
          </p>
        </div>

        {/* Featured Review with Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-teal-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Pool Image */}
              <div className="relative">
                <img
                  src={reviews[activeReview].poolImage}
                  alt={`${reviews[activeReview].service} result`}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-teal-600/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {reviews[activeReview].service}
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevReview}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextReview}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Review Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(reviews[activeReview].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                      {reviews[activeReview].service}
                    </span>
                  </div>
                  <p className="text-slate-500 font-medium">{reviews[activeReview].location}</p>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-teal-200" />
                  <p className="text-slate-700 text-lg italic pl-6 leading-relaxed">
                    {reviews[activeReview].text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeReview ? 'bg-teal-600' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready for Your Pool Transformation?
          </h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who have transformed their pools with BlueChoice Pool
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">Licensed</div>
              <div className="text-teal-100">& Insured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Expert</div>
              <div className="text-teal-100">Service Team</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">20+</div>
              <div className="text-teal-100">Years Experience</div>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </div>
    </section>
  );
}