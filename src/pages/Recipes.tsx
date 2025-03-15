import { useState } from 'react';
import { ClockIcon, UserIcon, FireIcon } from '@heroicons/react/24/outline';

interface Recipe {
  id: number;
  title: string;
  image: string;
  prepTime: string;
  servings: number;
  calories: number;
  ingredients: string[];
  instructions: string[];
  matchingIngredients: number;
}

const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: 'Vegetable Stir Fry',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    prepTime: '30 mins',
    servings: 4,
    calories: 300,
    ingredients: [
      '2 cups mixed vegetables',
      '1 tbsp oil',
      '2 cloves garlic',
      'Soy sauce to taste',
    ],
    instructions: [
      'Heat oil in a large pan',
      'Add garlic and stir-fry until fragrant',
      'Add vegetables and cook until tender-crisp',
      'Season with soy sauce',
    ],
    matchingIngredients: 3,
  },
  {
    id: 2,
    title: 'Fruit Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    prepTime: '15 mins',
    servings: 2,
    calories: 250,
    ingredients: [
      '2 bananas',
      '1 cup mixed berries',
      '1 cup yogurt',
      'Honey to taste',
    ],
    instructions: [
      'Blend fruits until smooth',
      'Add yogurt and blend again',
      'Pour into bowls',
      'Top with additional fruits and honey',
    ],
    matchingIngredients: 2,
  },
];

export default function Recipes() {
  const [recipes] = useState<Recipe[]>(mockRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Recipe Suggestions</h1>
        <p className="mt-1 text-sm text-gray-500">
          Discover recipes based on your available ingredients
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{recipe.title}</h3>
              
              <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {recipe.prepTime}
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-1" />
                  {recipe.servings} servings
                </div>
                <div className="flex items-center">
                  <FireIcon className="h-4 w-4 mr-1" />
                  {recipe.calories} cal
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-700">
                  {recipe.matchingIngredients} ingredients available
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {ingredient}
                    </span>
                  ))}
                  {recipe.ingredients.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                      +{recipe.ingredients.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recipe Details Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setSelectedRecipe(null)}
            />

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {selectedRecipe.title}
                    </h3>
                    <div className="mt-4">
                      <img
                        src={selectedRecipe.image}
                        alt={selectedRecipe.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900">Ingredients</h4>
                      <ul className="mt-2 list-disc list-inside text-gray-600">
                        {selectedRecipe.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900">Instructions</h4>
                      <ol className="mt-2 list-decimal list-inside text-gray-600">
                        {selectedRecipe.instructions.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setSelectedRecipe(null)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}