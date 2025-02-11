import React, { useState } from 'react';
import { Camera, ChefHat, Utensils, Clock, Scale, Heart, Share2, Search, Settings, Plus } from 'lucide-react';

export default function FitnessFoodAI() {
  const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800");
  const [recipe, setRecipe] = useState({
    title: "Salada Buddha Bowl",
    calories: "420 kcal",
    protein: "22g",
    carbs: "45g",
    fats: "18g",
    prepTime: "15 min",
    ingredients: [
      "Quinoa cozida",
      "Grão de bico assado",
      "Abacate",
      "Rúcula fresca",
      "Tomates cereja",
      "Sementes de chia"
    ],
    instructions: [
      "Cozinhe a quinoa conforme instruções",
      "Asse o grão de bico com temperos",
      "Monte a base com quinoa",
      "Adicione os vegetais em seções",
      "Finalize com abacate e sementes"
    ]
  });

  return (
    <div className="w-full h-full bg-white text-gray-900 flex transform-gpu">
      {/* Left Panel - Image Upload */}
      <div className="w-1/2 border-r border-gray-200 p-8 flex flex-col">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Análise de Alimentos</h2>
          <p className="text-gray-500">
            Envie uma foto do seu prato para receber uma receita fitness personalizada
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="w-full aspect-square rounded-2xl border-2 border-dashed border-blue-500/20 flex flex-col items-center justify-center p-8 relative overflow-hidden group cursor-pointer hover:border-blue-500/40 transition-colors">
            <img
              src={selectedImage}
              alt="Food"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-12 h-12 text-white mb-4" />
              <span className="text-white">Clique para trocar a imagem</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button className="flex-1 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
            <Camera className="w-5 h-5" />
            Tirar Foto
          </button>
          <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" />
            Carregar Imagem
          </button>
        </div>
      </div>

      {/* Right Panel - Recipe */}
      <div className="w-1/2 p-8 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold mb-2">{recipe.title}</h1>
            <div className="flex items-center gap-4 text-gray-500">
              <div className="flex items-center gap-1">
                <Scale className="w-4 h-4" />
                {recipe.calories}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {recipe.prepTime}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-xl">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-xl">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-1">Proteínas</p>
            <p className="font-semibold">{recipe.protein}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-1">Carboidratos</p>
            <p className="font-semibold">{recipe.carbs}</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-1">Gorduras</p>
            <p className="font-semibold">{recipe.fats}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-blue-500" />
            Ingredientes
          </h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <ChefHat className="w-5 h-5 text-blue-500" />
            Modo de Preparo
          </h2>
          <ol className="space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-none w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center font-medium">
                  {index + 1}
                </span>
                <p className="text-gray-700">{instruction}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}