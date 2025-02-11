import React, { useState } from 'react';
import { Move, Square, Circle, Type, Image, Layers, Share2, Play, ChevronDown, Plus, Search, Settings } from 'lucide-react';

export default function FigmaClone() {
  const [code, setCode] = useState(`function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}`);

  const [activeTab, setActiveTab] = useState('App.tsx');
  const [terminal, setTerminal] = useState('> npm install\nInstalling dependencies...\nDone!\n> npm start\nStarting development server...');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 100, height: 100 });
  const [fillColor, setFillColor] = useState('#60A5FA');

  return (
    <div className="h-screen bg-[#1E1E1E] text-white flex flex-col">
      {/* Header */}
      <header className="bg-[#2D2D2D] p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">F</div>
          <div className="flex items-center gap-2">
            <span>Untitled</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="h-4 border-r border-gray-600" />
          <nav className="flex items-center gap-2 text-sm">
            <button className="px-3 py-1 hover:bg-[#3D3D3D] rounded">File</button>
            <button className="px-3 py-1 hover:bg-[#3D3D3D] rounded">Edit</button>
            <button className="px-3 py-1 hover:bg-[#3D3D3D] rounded">View</button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-1 bg-blue-500 hover:bg-blue-600 rounded-md flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </button>
          <button className="p-2 hover:bg-[#3D3D3D] rounded">
            <Play className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Toolbar */}
      <div className="bg-[#1E1E1E] border-t border-[#3D3D3D] p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded bg-[#3D3D3D]">
            <Move className="w-4 h-4" />
          </button>
          <button className="p-2 rounded hover:bg-[#3D3D3D]">
            <Square className="w-4 h-4" />
          </button>
          <button className="p-2 rounded hover:bg-[#3D3D3D]">
            <Circle className="w-4 h-4" />
          </button>
          <button className="p-2 rounded hover:bg-[#3D3D3D]">
            <Type className="w-4 h-4" />
          </button>
          <button className="p-2 rounded hover:bg-[#3D3D3D]">
            <Image className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Sidebar - Layers */}
        <div className="w-64 bg-[#1E1E1E] border-r border-[#3D3D3D] flex flex-col">
          <div className="p-2 border-b border-[#3D3D3D] flex items-center justify-between">
            <span className="text-sm">Layers</span>
            <button className="p-1 hover:bg-[#3D3D3D] rounded">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-auto">
            <div className="flex items-center gap-2 p-2 bg-[#3D3D3D] cursor-pointer">
              <Square className="w-4 h-4" />
              <span className="text-sm">Rectangle 1</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-[#3D3D3D] cursor-pointer">
              <Type className="w-4 h-4" />
              <span className="text-sm">Text Layer</span>
            </div>
            <div className="flex items-center gap-2 p-2 hover:bg-[#3D3D3D] cursor-pointer">
              <Circle className="w-4 h-4" />
              <span className="text-sm">Circle 1</span>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-[#2C2C2C] overflow-auto">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-[800px] h-[600px] bg-white rounded-lg shadow-lg relative">
              <div className="absolute top-10 left-10 w-32 h-32 rounded bg-gray-200" />
              <div className="absolute top-20 left-60 w-32 h-32 rounded-full bg-blue-400" />
              <div className="absolute top-40 left-40 text-black text-2xl font-medium">
                Hello Figma
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-64 bg-[#1E1E1E] border-l border-[#3D3D3D]">
          <div className="p-2 border-b border-[#3D3D3D]">
            <span className="text-sm">Design</span>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 block mb-2">Position</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-xs text-gray-400">X</span>
                    <input
                      type="number"
                      className="w-full bg-[#3D3D3D] rounded px-2 py-1 text-sm"
                      value={position.x}
                      onChange={(e) => setPosition({ ...position, x: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">Y</span>
                    <input
                      type="number"
                      className="w-full bg-[#3D3D3D] rounded px-2 py-1 text-sm"
                      value={position.y}
                      onChange={(e) => setPosition({ ...position, y: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-2">Size</label>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-xs text-gray-400">W</span>
                    <input
                      type="number"
                      className="w-full bg-[#3D3D3D] rounded px-2 py-1 text-sm"
                      value={size.width}
                      onChange={(e) => setSize({ ...size, width: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">H</span>
                    <input
                      type="number"
                      className="w-full bg-[#3D3D3D] rounded px-2 py-1 text-sm"
                      value={size.height}
                      onChange={(e) => setSize({ ...size, height: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-2">Fill</label>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-6 h-6 rounded cursor-pointer"
                    style={{ backgroundColor: fillColor }}
                  />
                  <input
                    type="text"
                    className="flex-1 bg-[#3D3D3D] rounded px-2 py-1 text-sm"
                    value={fillColor}
                    onChange={(e) => setFillColor(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}