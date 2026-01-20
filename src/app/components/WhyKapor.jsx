import React from "react";

const WhyKapor = () => {
  const features = [
    {
      icon: "✨",
      title: "Premium Quality",
      description:
        "Every piece is crafted with the finest materials and attention to detail, ensuring durability and comfort that lasts.",
    },
    {
      icon: "🎨",
      title: "Timeless Design",
      description:
        "Our designs blend contemporary trends with classic aesthetics, creating pieces that remain stylish season after season.",
    },
    {
      icon: "🌱",
      title: "Sustainable Fashion",
      description:
        "We're committed to ethical production practices and sustainable materials, caring for both you and the planet.",
    },
    {
      icon: "👥",
      title: "Perfect Fit",
      description:
        "Designed for the modern lifestyle, our clothing offers the perfect balance of style, comfort, and functionality.",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping across Bangladesh, with easy returns and exchanges for your peace of mind.",
    },
    {
      icon: "💎",
      title: "Exclusive Collections",
      description:
        "Limited edition pieces and exclusive designs that help you stand out with your unique personal style.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Kapor?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another clothing brand. We're your partner in
            expressing your unique style while maintaining the highest standards
            of quality and sustainability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-900 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                10K+
              </div>
              <p className="text-gray-300 uppercase tracking-wide text-sm">
                Happy Customers
              </p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                500+
              </div>
              <p className="text-gray-300 uppercase tracking-wide text-sm">
                Premium Products
              </p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                99%
              </div>
              <p className="text-gray-300 uppercase tracking-wide text-sm">
                Satisfaction Rate
              </p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                24/7
              </div>
              <p className="text-gray-300 uppercase tracking-wide text-sm">
                Customer Support
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="text-6xl text-gray-300 mb-4">"</div>
            <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              Kapor has completely transformed my wardrobe. The quality is
              exceptional, the designs are timeless, and I always feel confident
              wearing their pieces. It's not just clothing – it's an investment
              in my personal style.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xl">👤</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Sarah Ahmed</p>
                <p className="text-sm text-gray-500">
                  Fashion Enthusiast, Dhaka
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the Kapor Difference?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made Kapor their
            go-to choice for premium fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block"
            >
              Shop Now
            </a>
            <a
              href="/about"
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200 inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKapor;
