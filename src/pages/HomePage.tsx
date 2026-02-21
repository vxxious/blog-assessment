import { posts } from "@/data/posts";
import PostCard from "@/components/PostCard";
import Header from "@/components/Header";

const HomePage = () => (
  <div className="min-h-screen">
    <Header />
    <main className="blog-container">
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  </div>
);

export default HomePage;
