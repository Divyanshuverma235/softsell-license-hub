
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '@/lib/recipe-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Minus, Plus, ArrowLeft } from 'lucide-react';

export default function AddRecipe() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [cookTime, setCookTime] = useState(30);
  const [servings, setServings] = useState(4);
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [instructions, setInstructions] = useState<string[]>(['']);
  const [tags, setTags] = useState<string[]>(['']);

  const handleIngredientChange = (index: number, value: string) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleRemoveIngredient = (index: number) => {
    if (ingredients.length > 1) {
      const updatedIngredients = [...ingredients];
      updatedIngredients.splice(index, 1);
      setIngredients(updatedIngredients);
    }
  };

  const handleInstructionChange = (index: number, value: string) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index] = value;
    setInstructions(updatedInstructions);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const handleRemoveInstruction = (index: number) => {
    if (instructions.length > 1) {
      const updatedInstructions = [...instructions];
      updatedInstructions.splice(index, 1);
      setInstructions(updatedInstructions);
    }
  };

  const handleTagChange = (index: number, value: string) => {
    const updatedTags = [...tags];
    updatedTags[index] = value;
    setTags(updatedTags);
  };

  const handleAddTag = () => {
    setTags([...tags, '']);
  };

  const handleRemoveTag = (index: number) => {
    if (tags.length > 1) {
      const updatedTags = [...tags];
      updatedTags.splice(index, 1);
      setTags(updatedTags);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!title || !description || !imageUrl) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Filter out empty entries
    const filteredIngredients = ingredients.filter(item => item.trim() !== '');
    const filteredInstructions = instructions.filter(item => item.trim() !== '');
    const filteredTags = tags.filter(item => item.trim() !== '');

    if (filteredIngredients.length === 0 || filteredInstructions.length === 0) {
      toast({
        title: "Missing information",
        description: "Please add at least one ingredient and one instruction step",
        variant: "destructive"
      });
      return;
    }

    // Create new recipe
    const newRecipe = addRecipe({
      title,
      description,
      ingredients: filteredIngredients,
      instructions: filteredInstructions,
      imageUrl,
      cookTime,
      servings,
      authorId: "user123", // In a real app, this would come from auth
      authorName: "Recipe Lover", // In a real app, this would come from auth
      tags: filteredTags
    });

    toast({
      title: "Recipe created!",
      description: "Your recipe has been added successfully"
    });

    // Navigate to the new recipe
    navigate(`/recipe/${newRecipe.id}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Button variant="ghost" className="mb-4" onClick={handleBack}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Add New Recipe</CardTitle>
          <CardDescription>
            Share your favorite recipe with the community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Recipe Title *</Label>
                <Input
                  id="title"
                  placeholder="Give your recipe a name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Briefly describe your recipe"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="image">Image URL *</Label>
                <Input
                  id="image"
                  placeholder="Paste an image URL"
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cookTime">Cooking Time (minutes)</Label>
                  <Input
                    id="cookTime"
                    type="number"
                    min={1}
                    value={cookTime}
                    onChange={(e) => setCookTime(parseInt(e.target.value) || 1)}
                  />
                </div>
                <div>
                  <Label htmlFor="servings">Servings</Label>
                  <Input
                    id="servings"
                    type="number"
                    min={1}
                    value={servings}
                    onChange={(e) => setServings(parseInt(e.target.value) || 1)}
                  />
                </div>
              </div>
            </div>

            <div>
              <Label>Ingredients *</Label>
              <div className="space-y-3 mt-2">
                {ingredients.map((ingredient, index) => (
                  <div key={`ingredient-${index}`} className="flex gap-2">
                    <Input
                      placeholder={`Ingredient ${index + 1}`}
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(index, e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleRemoveIngredient(index)}
                      disabled={ingredients.length === 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddIngredient}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Ingredient
                </Button>
              </div>
            </div>

            <div>
              <Label>Instructions *</Label>
              <div className="space-y-3 mt-2">
                {instructions.map((instruction, index) => (
                  <div key={`instruction-${index}`} className="flex gap-2">
                    <Textarea
                      placeholder={`Step ${index + 1}`}
                      value={instruction}
                      onChange={(e) => handleInstructionChange(index, e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleRemoveInstruction(index)}
                      disabled={instructions.length === 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddInstruction}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Step
                </Button>
              </div>
            </div>

            <div>
              <Label>Tags</Label>
              <div className="space-y-3 mt-2">
                {tags.map((tag, index) => (
                  <div key={`tag-${index}`} className="flex gap-2">
                    <Input
                      placeholder={`Tag ${index + 1} (e.g., vegan, dessert)`}
                      value={tag}
                      onChange={(e) => handleTagChange(index, e.target.value)}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleRemoveTag(index)}
                      disabled={tags.length === 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleAddTag}
                  className="mt-2"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Tag
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button type="submit" className="w-full">
                Create Recipe
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
