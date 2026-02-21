import { Link } from "@tanstack/react-router";

const Header = () => (
  <header className="border-b border-border">
    <div className="blog-container py-6">
      <Link to="/" className="inline-block">
        <h1
          className="text-2xl md:text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          The Quiet Reader
        </h1>
      </Link>
      <p className="blog-meta mt-1">Essays on living, thinking & making</p>
    </div>
  </header>
);

export default Header;
