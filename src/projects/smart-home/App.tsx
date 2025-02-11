import React, { useState } from 'react';
import { Home, Sun, Moon, Wind, Droplets, Zap, ThermometerSun, Settings, Bell, Menu, User, Plus } from 'lucide-react';

export default function SmartHome() {
  const [temperature, setTemperature] = useState(22);
  const [mode, setMode] = useState('home');

  const rooms = [
    { name: 'Sala', temp: 22, humidity: 45, energy: 0.8 },
    { name: 'Quarto', temp: 21, humidity: 50, energy: 0.5 },
    { name: 'Cozinha', temp: 23, humidity: 48, energy: 1.2 },
    { name: 'Escritório', temp: 22, humidity: 43, energy: 0.9 }
  ];

  const devices = [
    { name: 'Ar Condicionado', active: true, consumption: '1.2 kW/h' },
    { name: 'Iluminação', active: true, consumption: '0.3 kW/h' },
    { name: 'TV', active: false, consumption: '0.1 kW/h' },
    { name: 'Som', active: false, consumption: '0.2 kW/h' }
  ];

  return (
    <div className="w-full h-full bg-gray-50 text-gray-900 flex transform-gpu">
      {/* Sidebar */}
      <div className="w-full md:w-20 bg-white border-b md:border-r border-gray-200 flex md:flex-col items-center justify-between md:justify-start p-4 md:py-8">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white">
          H
        </div>
        <nav className="flex md:flex-col items-center gap-4 md:flex-1 md:mt-8">
          <button className="p-2 md:p-3 bg-indigo-50 text-indigo-500 rounded-xl">
            <Home className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button className="p-2 md:p-3 text-gray-400 hover:bg-gray-100 rounded-xl">
            <ThermometerSun className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button className="p-2 md:p-3 text-gray-400 hover:bg-gray-100 rounded-xl">
            <Zap className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </nav>
        <button className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Bem-vindo de volta, Matheus</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 relative text-gray-500 hover:bg-gray-100 rounded-xl">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-xl">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="col-span-8 space-y-8">
              {/* Mode Selection */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Modos</h2>
                <div className="grid grid-cols-4 gap-4">
                  {['home', 'away', 'sleep', 'vacation'].map((m) => (
                    <button
                      key={m}
                      className={`p-4 rounded-xl flex flex-col items-center gap-2 ${
                        mode === m ? 'bg-indigo-50 text-indigo-500' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                      }`}
                      onClick={() => setMode(m)}
                    >
                      {m === 'home' && <Home className="w-6 h-6" />}
                      {m === 'away' && <Wind className="w-6 h-6" />}
                      {m === 'sleep' && <Moon className="w-6 h-6" />}
                      {m === 'vacation' && <Sun className="w-6 h-6" />}
                      <span className="capitalize">{m}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Rooms Overview */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Cômodos</h2>
                <div className="grid grid-cols-2 gap-4">
                  {rooms.map((room) => (
                    <div key={room.name} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">{room.name}</h3>
                        <button className="p-1 hover:bg-gray-200 rounded-lg">
                          <Settings className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center gap-2">
                          <ThermometerSun className="w-4 h-4 text-orange-500" />
                          <span>{room.temp}°C</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplets className="w-4 h-4 text-blue-500" />
                          <span>{room.humidity}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-yellow-500" />
                          <span>{room.energy}kW</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-4 space-y-8">
              {/* Temperature Control */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-lg font-semibold">Temperatura</h2>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Auto</span>
                    <button className="w-12 h-6 bg-indigo-500 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-semibold">{temperature}°C</span>
                    </div>
                    <svg className="w-full h-full rotate-180" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="8"
                        strokeDasharray={`${(temperature / 30) * 283} 283`}
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
                    onClick={() => setTemperature(Math.max(16, temperature - 1))}
                  >
                    -
                  </button>
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-500">Aquecimento</span>
                  </div>
                  <button
                    className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200"
                    onClick={() => setTemperature(Math.min(30, temperature + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Devices */}
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Dispositivos</h2>
                  <button className="p-2 text-indigo-500 hover:bg-indigo-50 rounded-xl">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  {devices.map((device) => (
                    <div
                      key={device.name}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                    >
                      <div>
                        <h3 className="font-medium">{device.name}</h3>
                        <p className="text-sm text-gray-500">{device.consumption}</p>
                      </div>
                      <button
                        className={`w-12 h-6 rounded-full relative transition-colors ${
                          device.active ? 'bg-indigo-500' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                            device.active ? 'right-1' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}