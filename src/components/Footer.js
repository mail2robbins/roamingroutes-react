import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        <Link to="/privacy" className="btn btn-hero">
          Privacy
        </Link>
      </p>
      <p className="copyright">
        copyright &copy; roaming-routes travel & tours company
        <span id="date">{new Date().getFullYear()}</span>. all rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
