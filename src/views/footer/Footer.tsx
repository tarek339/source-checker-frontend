import { Divider, Grid, Link, Text } from "../../components";
import { useTranslations } from "../../hooks";
import { Dot } from "../../components/icons";

const Footer = () => {
  const { t } = useTranslations();

  return (
    <div style={{ marginTop: "2em" }}>
      <Divider borderWidth={3} />
      <Grid column padding>
        <Grid column spacing={1}>
          <Text
            text={
              <>
                {t("footer.header")}{" "}
                <Link
                  href="https://www.usethenews.de/de"
                  title="#UseTheNews"
                  small
                />{" "}
                /{" "}
                <Link
                  href="https://www.haw-hamburg.de/"
                  title="HAW Hamburg"
                  small
                />{" "}
                und der{" "}
                <Link
                  href="https://portal.hoou.de/"
                  title="Hamburg Open Online University"
                  small
                />{" "}
                (HOOU@HAW).
              </>
            }
            center
            small
          />
          <Text text={t("footer.public")} center small />
        </Grid>

        <Grid spacing={1} alignCenter center>
          <Link
            href={`${import.meta.env.VITE_CLIENT_URL}/imprint`}
            title={t("footer.imprint")}
            small
          />
          <Dot />
          <Link
            href={`${import.meta.env.VITE_CLIENT_URL}/privacy-policy`}
            title={t("footer.datapolice")}
            small
          />
          <Dot />
          <Link
            href={`${import.meta.env.VITE_CLIENT_URL}/licence-notes`}
            title={t("footer.license")}
            small
          />
          <Dot />
          <Link
            href={"https://git.hoou.de/quellenchecker/source-checker-frontend"}
            title={"UI-Architektur"}
            small
          />
          <Dot />
          <Link
            href={"https://git.hoou.de/quellenchecker/source-checker-backend"}
            title={"API-Architektur"}
            small
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
