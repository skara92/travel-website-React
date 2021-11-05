import { Link } from "react-router-dom";
const ShowFooterLinks = ({ links }) => {
  return links.map((links) => (
    <ul className="footer__ul" key={links.id}>
      <li className="footer__ul__li">
        <Link to={links.route}>{links.name}</Link>
      </li>
    </ul>
  ));
};
export default ShowFooterLinks;
