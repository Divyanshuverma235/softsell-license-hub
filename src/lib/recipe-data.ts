
import { Recipe } from "@/types/recipe";

// Mock data for recipes
const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Creamy Garlic Pasta",
    description: "A quick and delicious pasta dish with a creamy garlic sauce.",
    ingredients: [
      "8 oz pasta",
      "4 cloves garlic, minced",
      "2 tbsp butter",
      "1 cup heavy cream",
      "1/2 cup grated parmesan",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "In a large skillet, melt butter over medium heat.",
      "Add minced garlic and sauté for 1 minute until fragrant.",
      "Pour in heavy cream and bring to a simmer.",
      "Add parmesan cheese and stir until melted and sauce thickens.",
      "Season with salt and pepper.",
      "Drain pasta and add to the sauce, tossing to coat.",
      "Garnish with fresh parsley before serving."
    ],
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    cookTime: 20,
    servings: 4,
    authorId: "user1",
    authorName: "Chef Maria",
    createdAt: new Date(2023, 5, 15).toISOString(),
    tags: ["pasta", "italian", "quick"],
    likes: 42
  },
  {
    id: "2",
    title: "Avocado Toast with Poached Eggs",
    description: "The perfect breakfast or brunch option that's both healthy and satisfying.",
    ingredients: [
      "2 slices of sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tsp white vinegar",
      "Red pepper flakes",
      "Salt and black pepper to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Toast bread until golden and crispy.",
      "Mash avocado in a bowl and season with salt and pepper.",
      "Spread mashed avocado on toast.",
      "Bring water to a simmer in a pot, add vinegar.",
      "Crack eggs into the water and poach for 3-4 minutes.",
      "Remove eggs with a slotted spoon and place on avocado toast.",
      "Sprinkle with red pepper flakes and garnish with cilantro."
    ],
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    cookTime: 15,
    servings: 2,
    authorId: "user2",
    authorName: "Alex Health",
    createdAt: new Date(2023, 6, 20).toISOString(),
    tags: ["breakfast", "healthy", "vegetarian"],
    likes: 36
  },
  {
    id: "3",
    title: "Spicy Thai Basil Chicken",
    description: "A flavorful and aromatic Thai dish that's ready in minutes.",
    ingredients: [
      "1 lb ground chicken",
      "4 cloves garlic, minced",
      "3 Thai chilies, sliced",
      "1 small onion, sliced",
      "2 tbsp oil",
      "2 tbsp fish sauce",
      "1 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tsp sugar",
      "1 cup Thai basil leaves"
    ],
    instructions: [
      "Heat oil in a wok or large skillet over high heat.",
      "Add garlic and chilies, stir-fry for 30 seconds.",
      "Add ground chicken and onion, breaking up the meat as it cooks.",
      "When chicken is nearly cooked through, add fish sauce, soy sauce, oyster sauce, and sugar.",
      "Stir-fry for another 2-3 minutes until chicken is fully cooked.",
      "Turn off heat and stir in Thai basil leaves until wilted.",
      "Serve hot over rice."
    ],
    imageUrl: "https://images.unsplash.com/photo-1527603312-89e027292267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    cookTime: 15,
    servings: 4,
    authorId: "user3",
    authorName: "Thai Food Master",
    createdAt: new Date(2023, 7, 5).toISOString(),
    tags: ["thai", "spicy", "chicken"],
    likes: 65
  }
];

// Get all recipes
export const getAllRecipes = (): Recipe[] => {
  return mockRecipes;
};

// Get recipe by ID
export const getRecipeById = (id: string): Recipe | undefined => {
  return mockRecipes.find(recipe => recipe.id === id);
};

// Add a new recipe
export const addRecipe = (recipe: Omit<Recipe, "id" | "createdAt" | "likes">): Recipe => {
  const newRecipe: Recipe = {
    ...recipe,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    likes: 0
  };
  
  mockRecipes.push(newRecipe);
  return newRecipe;
};

// Like a recipe
export const likeRecipe = (id: string): Recipe | undefined => {
  const recipe = mockRecipes.find(r => r.id === id);
  if (recipe) {
    recipe.likes += 1;
  }
  return recipe;
};
