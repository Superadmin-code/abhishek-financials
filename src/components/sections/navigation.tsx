import Link from "next/link";

export const Navigation = () => {
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="font-display text-xl font-semibold text-primary">
          Abhishek Financial
        </div>
        
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link 
                href="#products" 
                className="text-muted-foreground hover:text-primary transition-refined"
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                href="#rates" 
                className="text-muted-foreground hover:text-primary transition-refined"
              >
                Rates
              </Link>
            </li>
            <li>
              <Link 
                href="#process" 
                className="text-muted-foreground hover:text-primary transition-refined"
              >
                Process
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-refined"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};