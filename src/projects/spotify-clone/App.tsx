import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Repeat, Shuffle, Laptop2, LayoutList, Mic2 } from 'lucide-react';

export default function SpotifyClone() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const playlists = [
    { name: "Daily Mix 1", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300" },
    { name: "Liked Songs", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" },
    { name: "Your Top Songs 2023", cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300" }
  ];

  return (
    <div className="h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-black p-6">
        <div className="mb-8">
          <svg viewBox="0 0 1134 340" className="h-10 text-white">
            <path fill="currentColor" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"/>
          </svg>
        </div>

        <nav className="mb-8">
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-gray-300 hover:text-white">
              <Laptop2 className="w-6 h-6" />
              Home
            </li>
            <li className="flex items-center gap-4 text-gray-300 hover:text-white">
              <LayoutList className="w-6 h-6" />
              Your Library
            </li>
            <li className="flex items-center gap-4 text-gray-300 hover:text-white">
              <Heart className="w-6 h-6" />
              Liked Songs
            </li>
          </ul>
        </nav>

        <div className="border-t border-gray-800 pt-6">
          <h3 className="text-gray-300 mb-4">PLAYLISTS</h3>
          <ul className="space-y-4">
            {playlists.map((playlist, index) => (
              <li key={index} className="flex items-center gap-3 cursor-pointer hover:text-white">
                <img src={playlist.cover} alt={playlist.name} className="w-12 h-12 rounded" />
                <span className="text-sm">{playlist.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-b from-blue-900 to-black overflow-auto">
        <div className="p-8">
          <header className="flex items-center gap-6 mb-8">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300"
              alt="Playlist cover"
              className="w-60 h-60 shadow-2xl"
            />
            <div>
              <span className="text-xs text-gray-300">PLAYLIST</span>
              <h1 className="text-5xl font-bold mb-6">Daily Mix 1</h1>
              <p className="text-gray-300 text-sm">
                Your daily mix of music based on your listening history.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <button
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </button>
                <button className="p-2 hover:text-white">
                  <Heart className="w-8 h-8" />
                </button>
              </div>
            </div>
          </header>

          {/* Tracks */}
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-2 rounded hover:bg-white/10 group"
              >
                <span className="w-6 text-center text-gray-400 group-hover:text-white">
                  {index + 1}
                </span>
                <img
                  src={`https://images.unsplash.com/photo-${1470225620780 + index}-dba8ba36b745?w=50`}
                  alt="Track"
                  className="w-12 h-12"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Track Name {index + 1}</h3>
                  <p className="text-sm text-gray-400">Artist Name</p>
                </div>
                <span className="text-gray-400">3:30</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 w-1/3">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50"
              alt="Now playing"
              className="w-14 h-14"
            />
            <div>
              <h4 className="text-sm">Current Track</h4>
              <p className="text-xs text-gray-400">Artist Name</p>
            </div>
            <button className="p-2 hover:text-white">
              <Heart className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col items-center w-1/3">
            <div className="flex items-center gap-6 mb-2">
              <button className="p-2 hover:text-white">
                <Shuffle className="w-4 h-4" />
              </button>
              <button className="p-2 hover:text-white">
                <SkipBack className="w-4 h-4" />
              </button>
              <button
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-black" />
                ) : (
                  <Play className="w-4 h-4 text-black" />
                )}
              </button>
              <button className="p-2 hover:text-white">
                <SkipForward className="w-4 h-4" />
              </button>
              <button className="p-2 hover:text-white">
                <Repeat className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full flex items-center gap-2">
              <span className="text-xs text-gray-400">1:30</span>
              <div className="flex-1 h-1 bg-gray-800 rounded-full">
                <div
                  className="h-1 bg-white rounded-full"
                  style={{ width: `${(currentTime / 210) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-400">3:30</span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 w-1/3">
            <button className="p-2 hover:text-white">
              <Mic2 className="w-4 h-4" />
            </button>
            <button className="p-2 hover:text-white">
              <LayoutList className="w-4 h-4" />
            </button>
            <button className="p-2 hover:text-white">
              <Laptop2 className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4" />
              <div className="w-24 h-1 bg-gray-800 rounded-full">
                <div className="w-3/4 h-1 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}