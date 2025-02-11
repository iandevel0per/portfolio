import React, { useState } from 'react';
import { Grid, Layers, Wallet, Activity, Heart, Share2, MoreHorizontal, Play, Pause, User, Search } from 'lucide-react';

export default function ArtGallery() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedArt, setSelectedArt] = useState({
    title: "Nebula Dreams",
    artist: "Maria Santos",
    price: "2.5 ETH",
    likes: 1289,
    views: 4500,
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800"
  });

  const artworks = [
    {
      title: "Nebula Dreams",
      artist: "Maria Santos",
      price: "2.5 ETH",
      image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=400"
    },
    {
      title: "Digital Waves",
      artist: "Alex Chen",
      price: "1.8 ETH",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400"
    },
    {
      title: "Cyber Punk City",
      artist: "Nina Williams",
      price: "3.2 ETH",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400"
    }
  ];

  return (
    <div className="w-full h-full bg-black text-white flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden w-full bg-zinc-900 border-b border-zinc-800 p-4 flex items-center justify-between">
        <div className="w-10 h-10 bg-purple-500 rounded-2xl flex items-center justify-center">
          A
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-zinc-800 rounded-xl">
            <Search className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden md:flex w-20 border-r border-zinc-800 flex-col items-center py-8">
        <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-8">
          A
        </div>
        <nav className="flex flex-col items-center gap-4 flex-1">
          <button className="p-3 bg-zinc-800 text-purple-400 rounded-xl">
            <Grid className="w-6 h-6" />
          </button>
          <button className="p-3 text-zinc-500 hover:bg-zinc-800 rounded-xl">
            <Layers className="w-6 h-6" />
          </button>
          <button className="p-3 text-zinc-500 hover:bg-zinc-800 rounded-xl">
            <Wallet className="w-6 h-6" />
          </button>
        </nav>
        <button className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Desktop Header */}
        <header className="hidden md:flex h-16 border-b border-zinc-800 px-8 items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-96 relative">
              <Search className="w-5 h-5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar obras de arte..."
                className="w-full pl-12 pr-4 py-2 bg-zinc-900 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <button className="px-4 py-2 bg-purple-500 rounded-xl flex items-center gap-2 hover:bg-purple-600 transition-colors">
            Conectar Carteira
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 p-4 md:p-8 overflow-auto">
          {/* Featured Artwork */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Em Destaque</h2>
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden">
              <img
                src={selectedArt.image}
                alt={selectedArt.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold mb-2">{selectedArt.title}</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40"
                      alt={selectedArt.artist}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-zinc-300">{selectedArt.artist}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-purple-400" />
                    <span className="text-zinc-300">{selectedArt.likes}</span>
                  </div>
                  <span className="text-purple-400 font-semibold">{selectedArt.price}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button className="p-2 bg-black/20 backdrop-blur-sm rounded-xl hover:bg-black/40 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 bg-black/20 backdrop-blur-sm rounded-xl hover:bg-black/40 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {artworks.map((art) => (
              <div
                key={art.title}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedArt({ ...art, likes: 1289, views: 4500 })}
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-medium text-lg mb-1">{art.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300">{art.artist}</span>
                      <span className="text-purple-400 font-medium">{art.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Categorias</h2>
            <div className="flex flex-wrap gap-2">
              {["3D Art", "Abstrato", "Pixel Art", "Fotografia", "Animação", "Ilustração"].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-zinc-800 rounded-xl text-sm hover:bg-zinc-700 transition-colors"
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