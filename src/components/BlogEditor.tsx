
import { useState, useCallback, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAutoSave } from '@/hooks/useAutoSave';
import { blogService } from '@/services/BlogService';
import { Blog, BlogFormData } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Save } from 'lucide-react';

interface BlogEditorProps {
  blog?: Blog;
  onSave?: (blog: Blog) => void;
}

export function BlogEditor({ blog, onSave }: BlogEditorProps) {
  const [formData, setFormData] = useState<BlogFormData>({
    title: blog?.title || '',
    content: blog?.content || '',
    tags: blog?.tags || [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const { toast } = useToast();

  // Update form if blog prop changes
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        content: blog.content,
        tags: blog.tags,
      });
    }
  }, [blog]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: name === 'tags' ? value.split(',').map(tag => tag.trim()) : value
    }));
  };

  const saveDraft = useCallback(async () => {
    try {
      setIsSaving(true);
      const savedBlog = await blogService.saveDraft(formData);
      if (onSave) onSave(savedBlog);
      return savedBlog;
    } catch (error) {
      console.error('Failed to save draft:', error);
      toast({
        title: "Failed to save draft",
        description: "There was an error saving your draft. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  }, [formData, onSave, toast]);

  const publishBlog = async () => {
    try {
      setIsLoading(true);
      const publishedBlog = await blogService.publish(formData);
      if (onSave) onSave(publishedBlog);
      
      toast({
        title: "Blog published",
        description: "Your blog has been published successfully!",
      });
      
      return publishedBlog;
    } catch (error) {
      console.error('Failed to publish blog:', error);
      toast({
        title: "Failed to publish",
        description: "There was an error publishing your blog. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-save implementation
  useAutoSave<BlogFormData>(
    formData, 
    async (data) => {
      if (data.title && data.content) {
        await saveDraft();
      }
    },
    5000 // 5 seconds delay
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter your blog title"
          className="text-lg"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your blog content..."
          className="min-h-[300px] resize-y"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="tags">Tags (comma-separated)</Label>
        <Input
          id="tags"
          name="tags"
          value={formData.tags.join(', ')}
          onChange={handleChange}
          placeholder="technology, programming, react"
        />
      </div>
      
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={saveDraft} 
          disabled={isSaving || isLoading}
        >
          {isSaving ? (
            <>
              <Loader2 className="animate-spin mr-2" /> 
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2" /> 
              Save Draft
            </>
          )}
        </Button>
        
        <Button 
          onClick={publishBlog} 
          disabled={isSaving || isLoading || !formData.title || !formData.content}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" /> 
              Publishing...
            </>
          ) : (
            'Publish'
          )}
        </Button>
      </div>
    </div>
  );
}
