import { useBreakPoints, useSelectors, useTranslations } from "../../../hooks";
import { IPages } from "../../../types/interfaces/interfaces";
import SpanBold from "../../parents/SpanBold";
import SubTitle from "../../parents/SubTitle";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";

const CurrentPage = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { surveyPages, currentPage } = useSelectors();

  return (
    <SubCard width={windowWidth < 768 ? "" : "60%"}>
      <Flex direction={"column"} gap={"20px"}>
        <SubTitle title={t("surveyControl.currentPage")} />
        <Flex direction={"row"} gap={"70px"}>
          <>
            {surveyPages
              .slice(currentPage - 1, currentPage)
              .map((page: IPages, i: number) => {
                return (
                  <Flex key={i} direction={"column"} gap={"5px"}>
                    <SpanBold title={`${t("common.title")}: ${page.title}`} />
                    <SpanBold
                      title={`Ansicht: ${
                        page.isMobileView
                          ? "Mobile Screenshot"
                          : page.isMobileView === false
                          ? "Desktop Screenshot"
                          : t("surveyControl.ogData")
                      }`}
                    />
                    <a href={page.url} style={{ textDecoration: "underline" }}>
                      <SpanBold title={t("surveyControl.sourceURL")} />
                    </a>
                    <SpanBold
                      title={`${t("surveyControl.note")}: ${page.note}`}
                    />
                  </Flex>
                );
              })}
          </>
          <>
            {surveyPages
              .slice(currentPage - 1, currentPage)
              .map((page: IPages, i) => {
                return (
                  <img
                    key={i}
                    src={
                      page.isMobileView
                        ? page.mobileScreenshot
                        : page.isMobileView === false
                        ? page.desktopScreenshot
                        : page.isMobileView === null && page.isOpenGraphView
                        ? page.openGraph.ogImage.map(
                            (img: { url: string }) => img.url
                          )
                        : null
                    }
                    style={{ width: "25%", height: "auto" }}
                    alt=""
                  />
                );
              })}
          </>
        </Flex>
      </Flex>
    </SubCard>
  );
};

export default CurrentPage;
