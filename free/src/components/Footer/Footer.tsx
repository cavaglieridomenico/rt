import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${style.footer} footer-global`}>
      <p className={style.footerText}>...frequent use cases</p>
    </div>
  );
};

export default Footer;
