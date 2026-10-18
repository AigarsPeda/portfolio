import Link from "next/link";
import LanguageSwitch from "~/components/LanguageSwitch/LanguageSwitch";
import { useCopy } from "~/i18n";
import ThemeToggle from "~/components/ThemeToggle/ThemeToggle";

export default function SiteHeader() {
  const copy = useCopy();
  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.skip}
      </a>
      <header className="site-header page-width">
        <Link href="/" className="wordmark" aria-label={copy.home}>
          <span className="wordmark-symbol" aria-hidden="true">
            ap
          </span>
          <span>Aigars Peda</span>
        </Link>
        <nav className="site-nav" aria-label={copy.navigation}>
          <Link href="/#projects">{copy.work}</Link>
          <Link href="/#about">{copy.about}</Link>
          <Link href="/#contact">{copy.contact}</Link>
        </nav>
        <div className="header-controls">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
