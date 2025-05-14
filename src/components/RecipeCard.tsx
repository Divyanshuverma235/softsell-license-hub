
import { Recipe } from "@/types/recipe";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RecipeCardProps {
  recipe: Recipe;
  onLike?: (id: string) => void;
}

export default function RecipeCard({ recipe, onLike }: RecipeCardProps) {
  const navigate = useNavigate();
  
  const handleViewRecipe = () => {
    navigate(`/recipe/${recipe.id}`);
  };
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onLike) {
      onLike(recipe.id);
    }
  };
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer h-full flex flex-col" onClick={handleViewRecipe}>
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{recipe.title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" /> {recipe.cookTime} mins
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" /> {recipe.servings}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">{recipe.description}</p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {recipe.tags.map(tag => (
            <span key={tag} className="bg-secondary/20 text-secondary px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="text-xs text-muted-foreground">By {recipe.authorName}</div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 hover:text-destructive"
          onClick={handleLike}
        >
          <Heart className="h-4 w-4" /> {recipe.likes}
        </Button>
      </CardFooter>
    </Card>
  );
}
