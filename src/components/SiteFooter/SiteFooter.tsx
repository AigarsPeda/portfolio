import { FiArrowUpRight } from "react-icons/fi";

export default function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <div className="page-width">
        <div className="contact-heading">
          <h2>
            Have a project
            <br />
            in mind?
          </h2>
          <a
            className="contact-circle fill-button"
            href="mailto:aigarspeda@gmail.com"
            aria-label="Let's talk, email Aigars about a project"
          >
            <FiArrowUpRight aria-hidden="true" />
            <span>Let&apos;s talk</span>
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
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
