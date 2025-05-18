
export interface Blog {
  id: string;
  title: string;
  content: string;
  tags: string[];
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export type BlogFormData = Omit<Blog, 'id' | 'createdAt' | 'updatedAt' | 'status'>;
