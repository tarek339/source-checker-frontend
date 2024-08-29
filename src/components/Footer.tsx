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
          <span>{t("footer.header")} </span>
          <span>
            <a href="https://www.usethenews.de/de">#UseTheNews</a>
          </span>
          <span> / </span>
          <span>
            <a href="https://www.haw-hamburg.de/">HAW Hamburg</a>
          </span>
          <span> und der </span>
          <span>
            <a href="https://portal.hoou.de/">Hamburg Open Online University</a>
          </span>
          <span> (HOOU@HAW).</span>
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
