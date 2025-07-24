import "./Footer.scss";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={logo} className="logo" alt="logo-footer" />
        <p className="credits">© 2020 Kasa. All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
