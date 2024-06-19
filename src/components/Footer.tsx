import { LuDot } from "react-icons/lu";
import { useTranslations } from "../hooks";

const Footer = () => {
  const { t } = useTranslations();

  return (
    <div className="footer">
      <div className="divider"></div>
      <section className="footer-section">
        <p>
          {t("footer.header")}&nbsp;
          <span>
            <a href="https://www.usethenews.de/de" target="_blank">
              #UseTheNews
            </a>
          </span>
          &nbsp;/&nbsp;
          <span>
            <a href="https://www.haw-hamburg.de/" target="_blank">
              HAW Hamburg
            </a>
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
