
export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  cookTime: number; // in minutes
  servings: number;
  authorId: string;
  authorName: string;
  createdAt: string;
  tags: string[];
  likes: number;
}
