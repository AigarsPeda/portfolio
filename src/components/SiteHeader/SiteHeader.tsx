import Link from "next/link";
import ThemeToggle from "~/components/ThemeToggle/ThemeToggle";

export default function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header page-width">
        <Link href="/" className="wordmark" aria-label="ap, Aigars Peda home">
          <span className="wordmark-symbol" aria-hidden="true">
            ap
          </span>
          <span>Aigars Peda</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/#projects">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <ThemeToggle />
      </header>
    </>
  );
}
