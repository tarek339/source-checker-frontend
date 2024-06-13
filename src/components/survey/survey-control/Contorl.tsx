import { useBreakPoints, useTranslations } from "../../../hooks";
import CancelButton from "../../buttons/CancelButton";
import ContButton from "../../buttons/ContButton";
import SubHeader from "../../parents/SubHeader";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";

const Contorl = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();

  return (
    <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <Flex direction={"column"} gap={"15px"}>
        <SubHeader title={t("common.surveyControl")} />
        <ContButton onClick={undefined} title={t("common.start")} />
        <CancelButton onClick={undefined} title={t("common.finish")} />
      </Flex>
    </SubCard>
  );
};

export default Contorl;
