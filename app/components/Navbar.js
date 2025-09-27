import Link from "next/link";

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
