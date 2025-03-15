import { Layout } from "../../components/Layout";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const recipesList = [
  {
    id: 1,
    name: "Vegetable Stir Fry",
    time: "30 mins",
    difficulty: "Easy",
    image: "public/image-8.png"
  },
  {
    id: 2,
    name: "Chicken Pasta",
    time: "45 mins",
    difficulty: "Medium",
    image: "public/image-9.png"
  },
  {
    id: 3,
    name: "Fresh Salad",
    time: "15 mins",
    difficulty: "Easy",
    image: "public/image-10.png"
  }
];

export const Recipes = () => {
  return (
    <Layout>
      <div className="px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Recipes</h1>
          <Button variant="outline" className="text-white">
            Add New
          </Button>
        </div>
        <div className="grid gap-4">
          {recipesList.map((recipe) => (
            <Card key={recipe.id} className="bg-gray-800 border-0">
              <CardContent className="p-4">
                <div className="flex items-center">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-white text-lg">{recipe.name}</h3>
                    <p className="text-gray-400">{recipe.time}</p>
                    <p className="text-gray-400">{recipe.difficulty}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};