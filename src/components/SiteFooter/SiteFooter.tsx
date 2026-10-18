import { useCopy } from "~/i18n";
import { FiArrowUpRight } from "react-icons/fi";
import SectionLink from "~/components/SectionLink/SectionLink";

export default function SiteFooter() {
  const copy = useCopy();
  return (
    <footer id="contact" className="site-footer">
      <div className="page-width">
        <div className="contact-heading">
          <h2>
            {copy.footerLine1}
            <br />
            {copy.footerLine2}
          </h2>
          <a
            className="contact-circle fill-button"
            href="mailto:aigarspeda@gmail.com"
            aria-label={copy.emailLabel}
          >
            <FiArrowUpRight aria-hidden="true" />
            <span>{copy.letsTalk}</span>
          </a>
        </div>
        <div className="contact-links">
          <a className="email-link" href="mailto:aigarspeda@gmail.com">
            aigarspeda@gmail.com
          </a>
          <a
            className="text-link"
            href="https://github.com/AigarsPeda"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aigars Peda</p>
          <SectionLink href="#top">{copy.backToTop}</SectionLink>
        </div>
      </div>
    </footer>
  );
}
