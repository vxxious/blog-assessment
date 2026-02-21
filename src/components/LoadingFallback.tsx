const LoadingFallback = () => (
  <div className="blog-container">
    <div className="space-y-10">
      {[1, 2, 3].map((i) => (
        <div key={i} className="py-8 space-y-4">
          <div className="skeleton-pulse h-4 w-32" />
          <div className="skeleton-pulse h-8 w-3/4" />
          <div className="skeleton-pulse h-5 w-full" />
          <div className="skeleton-pulse h-5 w-5/6" />
        </div>
      ))}
    </div>
  </div>
);

export default LoadingFallback;
