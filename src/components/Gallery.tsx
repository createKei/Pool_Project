import React from 'react';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'Pool Maintenance',
      image: 'https://as1.ftcdn.net/v2/jpg/05/30/79/76/1000_F_530797677_qaAvkEMVefS4VtKY5YJ3TBqfnBVyzNH9.jpg'
    },
    {
      id: 2,
      title: 'Drain & Clean',
      image: 'https://as2.ftcdn.net/v2/jpg/04/98/89/87/1000_F_498898705_yy4M0PyTxSCK3mZTxXqLj2KQeHxwPxY1.jpg'
    },
    {
      id: 3,
      title: 'One Time Clean',
      image: 'https://cdn.pixabay.com/photo/2021/11/15/18/29/ladder-6799004_1280.jpg'
    },
    {
      id: 4,
      title: 'Cartridge Filter',
      image: 'https://cdn.pixabay.com/photo/2014/04/07/04/46/pump-318331_1280.jpg'
    },
    {
      id: 5,
      title: 'DE Filter',
      image: 'https://as2.ftcdn.net/v2/jpg/04/78/00/81/1000_F_478008179_gBirsSRydgYHCdAKjxX2FZ02AzCPTmiL.jpg'
    },
    {
      id: 6,
      title: 'Pool Start-ups',
      image: 'https://as1.ftcdn.net/v2/jpg/05/40/94/12/1000_F_540941229_Rz7BACWYC37TTWoAPWMpoG7DKuikKZH1.jpg'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See the quality results from our comprehensive pool services across Central Florida
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready for Professional Pool Service?
          </h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Let us take care of your pool with our expert services. Contact us today for a free consultation and quote.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg"
          >
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}