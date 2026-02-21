const NotFoundPage = () => {
  console.log("NotFoundPage rendered");
  return (
    <>
      <div style={{ backgroundColor: "hsl(40, 33%, 96%)", minHeight: "100vh" }}>
        <h1 style={{ padding: "2rem", textAlign: "center" }}>404 - Page Not Found</h1>
        <p style={{ textAlign: "center", padding: "1rem" }}>The page you're looking for doesn't exist.</p>
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <a href="/" style={{ color: "hsl(14, 65%, 48%)", textDecoration: "none" }}>
            Return to home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
