import { useParams, Link, useRouter } from "@tanstack/react-router";
import { getPostById } from "@/data/posts";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";

const PostDetail = () => {
  const params = useParams({ strict: false }) as { postId?: string };
  const router = useRouter();
  const post = params.postId ? getPostById(params.postId) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="blog-container text-center py-24">
          <h1 className="blog-title text-3xl mb-4">Post not found</h1>
          <p className="blog-excerpt mb-6">
            The post you're looking for doesn't exist.
          </p>
          <Link to="/" className="blog-link text-lg">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <article className="blog-container">
        <button
          onClick={() => router.history.back()}
          className="blog-back-link mb-10"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <p className="blog-meta mb-4">
          {post.author} · {post.date} · {post.readTime}
        </p>

        <h1 className="blog-title mb-8">{post.title}</h1>

        <div className="blog-divider" />

        <div className="blog-body">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
