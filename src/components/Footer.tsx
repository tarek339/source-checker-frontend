import { useTranslations } from "../hooks";
import { useNavigate } from "react-router-dom";
import Link from "./fonts/Link";
import Span from "./fonts/Span";
import { Dot } from "./icons";

const Footer = () => {
  const { t } = useTranslations();
  const navigate = useNavigate();

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
        <Link
          url={"https://portal.hoou.de/impressum/"}
          title={t("footer.imprint")}
          fontWeight={0}
          fontSize={14}
          color="#2835c3"
        />
        <Dot />
        <Link url={""} title={""} fontWeight={0} fontSize={14} />
        <Span
          onClick={() => navigate(`/privacy-policy`)}
          color="#2835c3"
          title={t("footer.datapolice")}
          fontSize={14}
          fontWeight={500}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        />
        <Dot />
        <Span
          onClick={() => navigate(`/licence-notes`)}
          color="#2835c3"
          title={t("footer.license")}
          fontSize={14}
          fontWeight={500}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        />
      </section>
    </div>
  );
};

export default Footer;
