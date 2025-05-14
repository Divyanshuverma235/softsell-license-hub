
import { useEffect, useState } from 'react';
import { getAllRecipes } from '@/lib/recipe-data';
import { Recipe } from '@/types/recipe';
import RecipeCard from '@/components/RecipeCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

export default function Profile() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  
  // In a real app, these would be filtered by user ID from auth
  const myRecipes = recipes.slice(0, 2);
  const savedRecipes = recipes.slice(1, 3);
  
  useEffect(() => {
    const fetchRecipes = () => {
      const allRecipes = getAllRecipes();
      setRecipes(allRecipes);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground mt-2">Manage your recipes and favorites</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-8">
        <Card className="w-full sm:w-64 h-fit">
          <CardHeader>
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle className="text-center mt-2">Jane Cooper</CardTitle>
            <CardDescription className="text-center">Food Enthusiast</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Recipes:</span>
                  <span className="font-medium">{myRecipes.length}</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-muted-foreground">Saved:</span>
                  <span className="font-medium">{savedRecipes.length}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex-1">
          <Tabs defaultValue="my-recipes" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="my-recipes">My Recipes</TabsTrigger>
              <TabsTrigger value="saved">Saved Recipes</TabsTrigger>
            </TabsList>
            <TabsContent value="my-recipes" className="mt-6">
              {myRecipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {myRecipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium">No recipes yet</h3>
                  <p className="text-muted-foreground mt-2">Start sharing your favorite recipes!</p>
                  <Button className="mt-4">Create Recipe</Button>
                </div>
              )}
            </TabsContent>
            <TabsContent value="saved" className="mt-6">
              {savedRecipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {savedRecipes.map(recipe => (
                    <RecipeCard key={`saved-${recipe.id}`} recipe={recipe} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium">No saved recipes</h3>
                  <p className="text-muted-foreground mt-2">Start saving recipes you love!</p>
                  <Button className="mt-4">Browse Recipes</Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
