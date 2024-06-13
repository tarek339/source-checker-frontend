import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { useBreakPoints, useSelectors, useTranslations } from "../../../hooks";
import ContButton from "../../buttons/ContButton";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";
import SubHeader from "../../parents/SubHeader";
import { useState } from "react";
import SpanBold from "../../parents/SpanBold";

const PageControl = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { surveyPages } = useSelectors();
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    surveyPages.map((_p, i) => {
      return setCurrentPage(i + 1);
    });
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <Flex direction={"column"} gap={"5px"}>
        <SubHeader title={t("common.pageControl")} />
        <span style={{ fontWeight: 600 }}></span>
        <SpanBold
          title={`${`${t("common.page")} ${currentPage} ${t("common.of")} ${
            surveyPages.length
          }`}`}
        />
        <Flex direction={"row"} gap={"5px"} justify="center" width="100%">
          <ContButton
            onClick={handlePrev}
            title={
              <>
                <IoArrowBackSharp fontSize={"24px"} />
                <span>{t("common.back")}</span>
              </>
            }
            width={"50%"}
          />
          <ContButton
            width={"50%"}
            onClick={handleNext}
            title={
              <>
                <span>{t("common.next")}</span>
                <IoArrowForwardSharp fontSize={"24px"} />
              </>
            }
          />
        </Flex>
      </Flex>
    </SubCard>
  );
};

export default PageControl;
