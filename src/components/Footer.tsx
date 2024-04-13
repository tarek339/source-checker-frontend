import { LuDot } from "react-icons/lu";
import { Divider } from ".";
import { useTranslations } from "../hooks";

const Footer = () => {
  const { t } = useTranslations();

  return (
    <div className="footer">
      <Divider />
      <section className="footer-section">
        <p>
          {t("footer.header")}&nbsp;
          <span>
            <a href="">#UseTheNews</a>
          </span>
          &nbsp;/&nbsp;
          <span>
            <a href="">HAW Hamburg</a>
          </span>
        </p>
        <p>{t("footer.public")}</p>
      </section>
      <section className="footer-links">
        <a href="">{t("footer.imprint")}</a>
        <LuDot style={{ color: "#2835c3" }} />
        <a href="">{t("footer.datapolice")}</a>
        <LuDot style={{ color: "#2835c3" }} />
        <a href="">{t("footer.license")}</a>
      </section>
    </div>
  );
};

export default Footer;
