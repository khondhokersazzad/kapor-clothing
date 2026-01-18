import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Kapor</h1>
          <p className="text-xl text-gray-600">
            The Art of Dressing, Redefined
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Kapor was born from a passion for exceptional fashion and the
              belief that everyone deserves to feel confident in what they wear.
              We curate premium pieces that blend timeless elegance with
              contemporary style.
            </p>
            <p className="text-gray-700">
              From casual comfort to elegant sophistication, our collection is
              designed to elevate your wardrobe and express your unique
              personality.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To provide high-quality, stylish clothing that empowers
              individuals to express their authentic selves while maintaining
              the highest standards of craftsmanship and sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
