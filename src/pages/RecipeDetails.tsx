
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipeById, likeRecipe } from '@/lib/recipe-data';
import { Recipe } from '@/types/recipe';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Heart, ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useToast } from '@/hooks/use-toast';

export default function RecipeDetails() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const recipeData = getRecipeById(id);
      if (recipeData) {
        setRecipe(recipeData);
      }
      setLoading(false);
    }
  }, [id]);

  const handleLike = () => {
    if (id && recipe) {
      const updatedRecipe = likeRecipe(id);
      if (updatedRecipe) {
        setRecipe(updatedRecipe);
        toast({
          title: "Recipe liked!",
          description: `You liked ${updatedRecipe.title}`,
        });
      }
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-96">Loading...</div>;
  }

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="text-2xl font-bold mb-4">Recipe not found</h2>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" className="mb-4" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="grid grid-cols-1 gap-8">
        <div>
          <div className="w-full">
            <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-4xl font-bold tracking-tight">{recipe.title}</h1>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={handleLike}
              >
                <Heart className="h-5 w-5" /> {recipe.likes} Likes
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 items-center mt-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> {recipe.cookTime} minutes
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Serves {recipe.servings}
              </div>
              <div>By {recipe.authorName}</div>
            </div>
            <p className="mt-4 text-lg">{recipe.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="rounded-full bg-primary w-1.5 h-1.5 mt-2.5"></div>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Instructions</h3>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 rounded-full bg-primary/10 text-primary w-8 h-8 flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        <div>
          <Separator className="my-6" />
          <div className="flex flex-wrap gap-3">
            {recipe.tags.map(tag => (
              <span key={tag} className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
