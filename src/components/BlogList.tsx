
import { useState, useEffect } from 'react';
import { blogService } from '@/services/BlogService';
import { Blog } from '@/types/blog';
import { Button } from '@/components/ui/button';
import { Loader2, FileText, Draft, Edit } from 'lucide-react';

interface BlogListProps {
  onEditBlog: (blog: Blog) => void;
}

export function BlogList({ onEditBlog }: BlogListProps) {
  const [blogs, setBlogs] = useState<{ drafts: Blog[], published: Blog[] }>({ drafts: [], published: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const result = await blogService.getAll();
        setBlogs(result);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FileText className="mr-2" /> Published Blogs
        </h2>
        {blogs.published.length === 0 ? (
          <p className="text-muted-foreground">No published blogs yet</p>
        ) : (
          <ul className="space-y-4">
            {blogs.published.map(blog => (
              <li key={blog.id} className="p-4 border rounded-md bg-card">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{blog.title}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm mt-1">{blog.content}</p>
                    {blog.tags.length > 0 && (
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {blog.tags.map(tag => (
                          <span key={tag} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      Last updated: {new Date(blog.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => onEditBlog(blog)}
                  >
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Draft className="mr-2" /> Drafts
        </h2>
        {blogs.drafts.length === 0 ? (
          <p className="text-muted-foreground">No drafts available</p>
        ) : (
          <ul className="space-y-4">
            {blogs.drafts.map(blog => (
              <li key={blog.id} className="p-4 border rounded-md bg-muted">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{blog.title || 'Untitled Draft'}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm mt-1">{blog.content}</p>
                    {blog.tags.length > 0 && (
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {blog.tags.map(tag => (
                          <span key={tag} className="bg-background text-muted-foreground text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      Last saved: {new Date(blog.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => onEditBlog(blog)}
                  >
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
