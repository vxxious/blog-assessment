import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/data/posts";

const PostCard = ({ post }: { post: BlogPost }) => (
  <article className="blog-card group">
    <Link to="/post/$postId" params={{ postId: post.id }} className="block">
      <p className="blog-meta mb-3">
        {post.author} · {post.date} · {post.readTime}
      </p>
      <h2 className="blog-card-title mb-3">{post.title}</h2>
      <p className="blog-excerpt">{post.excerpt}</p>
    </Link>
  </article>
);

export default PostCard;
