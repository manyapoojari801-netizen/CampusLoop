
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-logo">
        <span className="logo-icon">C</span>
        <span>CampusLoop</span>
      </Link>

      <div className="nav-links">
        <Link href="/">Dashboard</Link>
        <Link href="/login">Login</Link>
        <Link href="/register" className="nav-register">
          Register
        </Link>
      </div>
    </nav>
  );
}
