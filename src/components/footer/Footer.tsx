import Link from "../fonts/Link";
import { useTranslations } from "../../hooks";
import { Dot } from "../icons";

const Footer = () => {
  const { t } = useTranslations();

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
          url={`${import.meta.env.VITE_CLIENT_URL}/imprint`}
          title={t("footer.imprint")}
          fontSize={14}
          fontWeight={0}
        />
        <Dot />
        <Link
          title={t("footer.datapolice")}
          fontSize={14}
          fontWeight={0}
          url={`${import.meta.env.VITE_CLIENT_URL}/privacy-policy`}
        />
        <Dot />
        <Link
          title={t("footer.license")}
          url={`${import.meta.env.VITE_CLIENT_URL}/licence-notes`}
          fontWeight={0}
          fontSize={14}
        />
        <Dot />
        <Link
          url={"https://git.hoou.de/quellenchecker/source-checker-frontend"}
          title={"UI-Architektur"}
          fontWeight={0}
          fontSize={14}
        />
        <Dot />
        <Link
          url={"https://git.hoou.de/quellenchecker/source-checker-backend"}
          title={"API-Architektur"}
          fontWeight={0}
          fontSize={14}
        />
      </section>
    </div>
  );
};

export default Footer;
