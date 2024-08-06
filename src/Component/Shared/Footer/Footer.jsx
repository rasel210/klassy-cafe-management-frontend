
import logo from "../../../assets/white-logo.png";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer bg-[#fb5849] text-neutral-content p-12 mt-20">
      <nav>
        <div className="grid grid-flow-col gap-4 text-4xl pl-16 pt-4">
          <a>
            <FaFacebook />
          </a>
          <a>
            <AiFillTwitterCircle />
          </a>
          <a>
            <FaLinkedin />
          </a>
          <a>
            <FaInstagramSquare />
          </a>
        </div>
      </nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <footer className="footer footer-center text-sm text-white p-4">
        <aside>
          <p>
           © Copyfight Klassy Cafe Co. <br /> Design: TemplateMo
          </p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
