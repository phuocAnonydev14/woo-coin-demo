import { PropsWithChildren, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Post } from '@/types/app.type';
import { adminService } from '@/services/admin.service';
import { toast } from 'sonner';
import { PostType } from '@/const/post.enum';

interface PostActionDropdownProps extends PropsWithChildren {
  post: Post;
  reloadAction: (id: string) => void;
  selectedType: PostType;
}

export const PostActionDropdown = (props: PostActionDropdownProps) => {
  const { children, reloadAction, post, selectedType } = props;
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    try {
      setLoading(true);
      const res = await adminService.publishPost(post.id, post.updated_at);
      reloadAction(post.id);
      toast('Published successfully');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateExpertTag = async () => {
    try {
      const isAddTag = !post.tags.find((tag) => tag.name === PostType.EXPERT);
      setLoading(true);
      const res = await adminService.updateExpertTag(
        post.id,
        post.updated_at,
        post.tags[0].name,
        isAddTag,
      );
      if (!isAddTag) reloadAction(post.id);
      console.log(res);
      toast('Expert tag updated successfully');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          {selectedType === PostType.DRAFT ? (
            <DropdownMenuItem disabled={loading} onClick={handlePublish}>
              Publish
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem disabled={loading} onClick={handleUpdateExpertTag}>
              {selectedType === PostType.EXPERT ? 'Remove from ' : 'Add to '} Expert
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600 hover:!text-red-800" disabled={loading}>
            Remove
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
