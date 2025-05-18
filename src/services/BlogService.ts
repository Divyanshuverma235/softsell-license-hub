
import { Blog, BlogFormData } from '../types/blog';

// This is a mock implementation. In a real application, these would make actual API calls.
class BlogService {
  private blogs: Blog[] = [];
  private nextId = 1;

  async saveDraft(blogData: BlogFormData): Promise<Blog> {
    const now = new Date().toISOString();
    let blog: Blog;
    
    // Check if this is an update to existing draft
    const existingDraft = this.blogs.find(b => b.title === blogData.title && b.status === 'draft');
    
    if (existingDraft) {
      existingDraft.content = blogData.content;
      existingDraft.tags = blogData.tags;
      existingDraft.updatedAt = now;
      blog = existingDraft;
    } else {
      // Create new draft
      blog = {
        id: `blog-${this.nextId++}`,
        ...blogData,
        status: 'draft',
        createdAt: now,
        updatedAt: now
      };
      this.blogs.push(blog);
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return blog;
  }

  async publish(blogData: BlogFormData): Promise<Blog> {
    const now = new Date().toISOString();
    
    // Check if this is an update to an existing blog
    const existingBlog = this.blogs.find(b => b.title === blogData.title);
    
    let blog: Blog;
    
    if (existingBlog) {
      existingBlog.content = blogData.content;
      existingBlog.tags = blogData.tags;
      existingBlog.status = 'published';
      existingBlog.updatedAt = now;
      blog = existingBlog;
    } else {
      // Create new published blog
      blog = {
        id: `blog-${this.nextId++}`,
        ...blogData,
        status: 'published',
        createdAt: now,
        updatedAt: now
      };
      this.blogs.push(blog);
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return blog;
  }

  async getAll(): Promise<{ drafts: Blog[], published: Blog[] }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      drafts: this.blogs.filter(blog => blog.status === 'draft'),
      published: this.blogs.filter(blog => blog.status === 'published')
    };
  }

  async getById(id: string): Promise<Blog | undefined> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return this.blogs.find(blog => blog.id === id);
  }
}

export const blogService = new BlogService();
