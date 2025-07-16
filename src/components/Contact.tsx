import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    poolType: '',
    message: '',
    preferredDate: '',
    urgency: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // EmailJS 初期化（Public Keyをセット）
  useEffect(() => {
    emailjs.init('4_33B27GtCfMiLLlz'); // ← あなたのPublic Keyに変更してください
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs.sendForm('service_rlt1kq8', 'template_9dt7uvs', form) // テンプレートIDを修正
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          poolType: '',
          message: '',
          preferredDate: '',
          urgency: ''
        });
      })
      .catch((error) => {
        alert('Failed to send email: ' + error.text || error.message || error);
      });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-12 border border-teal-100">
              <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Thank You!</h2>
              <p className="text-xl text-slate-600 mb-6">
                We've received your service request and will contact you within 2 hours to schedule your appointment.
              </p>
              <p className="text-slate-500">
                For immediate assistance, call us at <strong>(407) 453-2777</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to experience professional pool service? Contact BlueChoice Pool for expert maintenance, repair, and remodeling services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Schedule Your Service</h3>

            <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="maintenance">Pool Maintenance</option>
                    <option value="drain-clean">Drain & Clean</option>
                    <option value="one-time-clean">One Time Clean</option>
                    <option value="cartridge-filter">Cartridge Filter</option>
                    <option value="de-filter">DE Filter</option>
                    <option value="pool-startup">Pool Start-ups</option>
                    <option value="spa-startup">Spa Start-ups</option>
                    <option value="pool-school">Pool School</option>
                    <option value="equipment-repair">Equipment Repair</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Pool Type
                  </label>
                  <select
                    name="poolType"
                    value={formData.poolType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select pool type</option>
                    <option value="chlorine">Chlorine Pool</option>
                    <option value="salt-water">Salt Water Pool</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select urgency</option>
                    <option value="routine">Routine Service</option>
                    <option value="within-week">Within This Week</option>
                    <option value="urgent">Urgent (2-3 days)</option>
                    <option value="emergency">Emergency (Same Day)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Preferred Service Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Describe your pool service needs, any specific issues, or questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get My Free Quote
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-teal-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone</h4>
                    <p className="text-slate-600">(407) 453-2777 - Andrew</p>
                    <p className="text-slate-600">(386) 795-4226 - Jacob</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <p className="text-slate-600">bluechoicepool@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Service Area</h4>
                    <p className="text-slate-600">
                      Mount Dora, Eustis, Lake Mary, Sanford, Winter Park, Clermont, Winter Springs, Deltona, Sorrento, and DeBary
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Business Hours</h4>
                    <p className="text-slate-600">Mon-Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
              <MessageSquare className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Why Choose BlueChoice Pool?</h3>
              <ul className="space-y-3 text-teal-100">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Licensed & insured professionals</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>20+ years of experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Professional service team</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Satisfaction guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Competitive pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
