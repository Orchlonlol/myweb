import Link from "next/link";


// Navbar component with links to Home and Animals pages
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">Animal World</Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/">Animals</Link>
        </div>
      </div>
      
    </nav>
  );
}
