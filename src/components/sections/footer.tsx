export const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abhishek Financial Solutions
        </div>
      </div>
    </footer>
  );
};