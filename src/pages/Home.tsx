
import { useState, useEffect } from 'react';
import { getAllRecipes, likeRecipe } from '@/lib/recipe-data';
import { Recipe } from '@/types/recipe';
import RecipeCard from '@/components/RecipeCard';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchRecipes = () => {
      const allRecipes = getAllRecipes();
      setRecipes(allRecipes);
    };

    fetchRecipes();
  }, []);

  const handleLike = (id: string) => {
    const updatedRecipe = likeRecipe(id);
    if (updatedRecipe) {
      setRecipes(recipes.map(recipe => 
        recipe.id === id ? { ...recipe, likes: updatedRecipe.likes } : recipe
      ));
      toast({
        title: "Recipe liked!",
        description: `You liked ${updatedRecipe.title}`,
      });
    }
  };

  const handleAddRecipe = () => {
    navigate('/add-recipe');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Recipes</h1>
          <p className="text-muted-foreground mt-2">
            Discover and share delicious recipes from our community
          </p>
        </div>
        <Button onClick={handleAddRecipe} className="ml-auto">
          <Plus className="mr-2 h-4 w-4" /> Add Recipe
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onLike={handleLike}
          />
        ))}
      </div>

      {recipes.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-2xl font-medium">No recipes found</h3>
          <p className="text-muted-foreground mt-2">Be the first to add a recipe!</p>
          <Button onClick={handleAddRecipe} className="mt-4">
            <Plus className="mr-2 h-4 w-4" /> Add Recipe
          </Button>
        </div>
      )}
    </div>
  );
}
