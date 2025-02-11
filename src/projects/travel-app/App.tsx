import React, { useState } from 'react';
import { Map, Search, Calendar, Heart, Share2, Star, Navigation, Menu, User, Settings } from 'lucide-react';

export default function TravelApp() {
  const [selectedPlace, setSelectedPlace] = useState({
    name: "Ilha de Santorini",
    rating: 4.9,
    reviews: 2847,
    price: "R$ 1.200",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800"
  });

  const places = [
    {
      name: "Ilha de Santorini",
      country: "Grécia",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400"
    },
    {
      name: "Machu Picchu",
      country: "Peru",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400"
    },
    {
      name: "Kyoto",
      country: "Japão",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400"
    }
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col md:flex-row">
      {/* Header - Mobile Only */}
      <div className="md:hidden w-full bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white">
          W
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-xl">
            <Menu className="w-5 h-5 text-gray-500" />
          </button>
          <button className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Sidebar - Desktop Only */}
      <div className="hidden md:flex w-20 bg-white border-r border-gray-200 flex-col items-center py-8">
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-8">
          W
        </div>
        <nav className="flex-1 flex flex-col items-center gap-4">
          <button className="p-3 bg-blue-50 text-blue-500 rounded-xl">
            <Map className="w-6 h-6" />
          </button>
          <button className="p-3 text-gray-400 hover:bg-gray-100 rounded-xl">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-3 text-gray-400 hover:bg-gray-100 rounded-xl">
            <Calendar className="w-6 h-6" />
          </button>
        </nav>
        <button className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Search Bar */}
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="relative max-w-lg mx-auto">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Para onde você quer ir?"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {/* Popular Destinations */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Destinos Populares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {places.map((place) => (
                <div
                  key={place.name}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedPlace({ ...place, reviews: 2847, price: "R$ 1.200" })}
                >
                  <div className="aspect-video rounded-t-xl overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">{place.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{place.country}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">{place.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Categorias</h2>
            <div className="flex flex-wrap gap-2">
              {["Praias", "Montanhas", "Cidades", "Histórico", "Aventura", "Cultura"].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-gray-100 rounded-xl text-sm hover:bg-gray-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}