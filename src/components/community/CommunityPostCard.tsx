import { Heart, Bookmark } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { UserPost } from "@/types";

const CommunityPostCard = ({ post }: { post: UserPost }) => {
  const { toggleLikePost, isAuthenticated } = useApp();

  const handleLike = () => {
    if (!isAuthenticated) return;
    toggleLikePost(post.id);
  };

  return (
    <div className="bg-card rounded-xl border overflow-hidden">
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.plantName}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="font-semibold">{post.plantName}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {post.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <button onClick={handleLike} className="flex items-center gap-1">
            <Heart
              className={`w-5 h-5 ${
                post.isLiked ? "fill-red-500 text-red-500" : ""
              }`}
            />
            <span className="text-sm">{post.likes}</span>
          </button>

          <Bookmark className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default CommunityPostCard;
