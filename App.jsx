import React, { useState } from "react";
import { FiMoon, FiSun, FiShoppingCart, FiUser, FiHeart, FiSearch, FiX } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Added: Cart interface type and initial state
const initialCartState = {
  isOpen: false,
  items: [],
  contactInfo: {
    phone: "",
    address: "",
    quantity: 1
  }
};

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: "$999",
      image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb"
    },
    {
      id: 2,
      name: "MacBook Pro M2",
      price: "$1299",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: "$249",
      image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434"
    }
  ];

  const categories = [
    { id: 1, name: "Smartphones", icon: "📱" },
    { id: 2, name: "Laptops", icon: "💻" },
    { id: 3, name: "Tablets", icon: "📱" },
    { id: 4, name: "Accessories", icon: "🎧" },
    { id: 5, name: "Audio Devices", icon: "🔊" },
    { id: 6, name: "Smart Home", icon: "🏠" }
  ];

  // Added: Cart state and handlers
  const [cart, setCart] = useState(initialCartState);

  const handleAddToCart = (product) => {
    setCart(prev => ({
      ...prev,
      isOpen: true,
      items: [...prev.items, { ...product, quantity: 1 }]
    }));
  };

  const handleRemoveFromCart = (productId) => {
    setCart(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== productId)
    }));
  };

  const updateContactInfo = (field, value) => {
    setCart(prev => ({
      ...prev,
      contactInfo: { ...prev.contactInfo, [field]: value }
    }));
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark bg-gray-900" : "bg-background"}`}>
      <header className="bg-primary shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary-foreground">ElectronicPro</h1>
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {language === "en" ? "عربي" : "English"}
            </button>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-primary-foreground"
            >
              {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
            <FiSearch size={24} className="text-primary-foreground cursor-pointer" />
            <FiHeart size={24} className="text-primary-foreground cursor-pointer" />
            <FiShoppingCart size={24} className="text-primary-foreground cursor-pointer" />
            <FiUser size={24} className="text-primary-foreground cursor-pointer" />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            className="rounded-lg overflow-hidden"
          >
            {featuredProducts.map((product) => (
              <div key={product.id} className="relative h-[500px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-xl">{product.price}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        <section className="mb-12">
          <h2 className="text-heading font-heading mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center"
              >
                <span className="text-4xl mb-2">{category.icon}</span>
                <h3 className="text-card-foreground text-center">{category.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-heading font-heading mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-card-foreground">{product.name}</h3>
                  <p className="text-accent-foreground font-bold mt-2">{product.price}</p>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition-opacity"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Added: Shopping Cart Modal */}
      {cart.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <button 
                onClick={() => setCart(prev => ({ ...prev, isOpen: false }))} 
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>

            {cart.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="space-y-4 mt-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded"
                value={cart.contactInfo.phone}
                onChange={(e) => updateContactInfo("phone", e.target.value)}
              />
              <textarea
                placeholder="Delivery Address"
                className="w-full p-2 border rounded"
                value={cart.contactInfo.address}
                onChange={(e) => updateContactInfo("address", e.target.value)}
              />
              <input
                type="number"
                min="1"
                placeholder="Quantity"
                className="w-full p-2 border rounded"
                value={cart.contactInfo.quantity}
                onChange={(e) => updateContactInfo("quantity", e.target.value)}
              />
              <button 
                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:opacity-90 transition-opacity"
                onClick={() => {
                  // Here you would typically handle the order submission
                  alert("Order submitted successfully!");
                  setCart(initialCartState);
                }}
              >
                Submit Order
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-primary mt-auto">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-primary-foreground">
            © 2024 ElectronicPro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;