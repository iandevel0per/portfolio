import React, { useState } from 'react';
import { Terminal, Play, Save, Download, Settings, Share2, GitBranch } from 'lucide-react';

export default function StackBlitzClone() {
  const [code, setCode] = useState(`function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}`);

  const [activeTab, setActiveTab] = useState('App.tsx');
  const [terminal, setTerminal] = useState('> npm install\nInstalling dependencies...\nDone!\n> npm start\nStarting development server...');

  return (
    <div className="h-screen bg-[#1E1E1E] text-white flex flex-col">
      {/* Header */}
      <header className="bg-[#2D2D2D] p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Terminal className="w-6 h-6 text-blue-400" />
          <h1 className="text-xl font-semibold">StackBlitz Clone</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center gap-2">
            <Play className="w-4 h-4" />
            Run
          </button>
          <button className="p-2 hover:bg-[#3D3D3D] rounded-lg">
            <Save className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-[#3D3D3D] rounded-lg">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-[#3D3D3D]">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-400">FILES</span>
              <button className="p-1 hover:bg-[#3D3D3D] rounded">
                <Settings className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 px-2 py-1 bg-[#37373D] rounded cursor-pointer">
                <span className="text-blue-400">📄</span>
                App.tsx
              </div>
              <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#37373D] rounded cursor-pointer">
                <span className="text-yellow-400">📄</span>
                index.html
              </div>
              <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#37373D] rounded cursor-pointer">
                <span className="text-purple-400">📄</span>
                styles.css
              </div>
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1 flex flex-col">
          <div className="bg-[#2D2D2D] flex items-center">
            <div className="px-4 py-2 bg-[#1E1E1E] text-white flex items-center gap-2">
              <span className="text-blue-400">📄</span>
              App.tsx
              <button className="ml-2 p-1 hover:bg-[#3D3D3D] rounded">×</button>
            </div>
          </div>
          <div className="flex-1 p-4 font-mono text-sm">
            <pre className="text-green-400">{code}</pre>
          </div>
        </div>

        {/* Preview */}
        <div className="w-1/2 border-l border-[#3D3D3D] flex flex-col">
          <div className="bg-[#2D2D2D] p-2 flex items-center justify-between">
            <span className="text-sm">Preview</span>
            <button className="p-1 hover:bg-[#3D3D3D] rounded">
              <Download className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 bg-white">
            <div className="p-4">
              <h1 className="text-black text-2xl">Hello World</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className="h-48 bg-[#1E1E1E] border-t border-[#3D3D3D]">
        <div className="bg-[#2D2D2D] p-2 flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          <span className="text-sm">Terminal</span>
        </div>
        <div className="p-4 font-mono text-sm text-green-400">
          {terminal}
        </div>
      </div>
    </div>
  );
}