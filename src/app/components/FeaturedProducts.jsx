import React from "react";
import Link from "next/link";
import productsData from "../../data/products.json";

const FeaturedProducts = () => {
  // Function to get 6 random products
  const getRandomProducts = (products, count = 6) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const featuredProducts = getRandomProducts(productsData);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium pieces, carefully
            curated for the modern wardrobe.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-4 relative">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {product.category === "T-Shirt" && "👕"}
                      {product.category === "Jeans" && "👖"}
                      {product.category === "Hoodie" && "🧥"}
                      {product.category === "Shirt" && "👔"}
                      {product.category === "Jacket" && "🧥"}
                      {product.category === "Pants" && "👖"}
                      {product.category === "Shacket" && "🧥"}
                      {![
                        "T-Shirt",
                        "Jeans",
                        "Hoodie",
                        "Shirt",
                        "Jacket",
                        "Pants",
                        "Shacket",
                      ].includes(product.category) && "👕"}
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      {product.category}
                    </p>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <div className="mb-2">
                  <span className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-xl font-bold text-gray-900">
                    ৳{product.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
