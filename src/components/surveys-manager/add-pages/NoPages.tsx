import { useTranslations } from "../../../hooks";
import SubHeader from "../../parents/SubHeader";
import Flex from "../../parents/containers/Flex";

const NoPages = () => {
  const { t } = useTranslations();

  return (
    <Flex
      direction={"column"}
      gap={"15px"}
      justify="center"
      style={{
        margin: "0 auto",
        textAlign: "center",
        marginTop: "2em",
      }}>
      <SubHeader title={t("addPages.notiHeader")} />
      <p>{t("addPages.notiText")}</p>
    </Flex>
  );
};

export default NoPages;
