
import { useState } from 'react';
import { BlogEditor } from '@/components/BlogEditor';
import { BlogList } from '@/components/BlogList';
import { Blog } from '@/types/blog';
import { Button } from '@/components/ui/button';

export default function BlogEditorPage() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | undefined>(undefined);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  const handleEditBlog = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsCreatingNew(false);
  };

  const handleNewBlog = () => {
    setSelectedBlog(undefined);
    setIsCreatingNew(true);
  };

  const handleSaved = () => {
    // Refresh the list when a blog is saved or published
    setIsCreatingNew(false);
  };

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Manager</h1>
        <Button onClick={handleNewBlog}>Create New Blog</Button>
      </div>

      {(selectedBlog || isCreatingNew) ? (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {selectedBlog ? `Editing: ${selectedBlog.title}` : 'New Blog'}
            </h2>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedBlog(undefined);
                setIsCreatingNew(false);
              }}
            >
              Back to List
            </Button>
          </div>
          <BlogEditor blog={selectedBlog} onSave={handleSaved} />
        </div>
      ) : (
        <BlogList onEditBlog={handleEditBlog} />
      )}
    </div>
  );
}
