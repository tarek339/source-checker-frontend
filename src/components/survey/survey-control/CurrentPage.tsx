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
      <Flex direction={"column"} gap={"10px"}>
        <Flex
          direction={"row"}
          gap={"5px"}
          align="center"
          justify="space-between">
          <SubTitle title={t("surveyControl.currentPage")} />
          <SubTitle title={`${`${currentPage}/${surveyPages.length}`}`} />
        </Flex>

        <Flex direction={windowWidth >= 768 ? "row" : "column"} gap={"10px"}>
          <div style={{ width: windowWidth >= 768 ? "50%" : "100%" }}>
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
                    <a
                      href={page.url}
                      style={{ textDecoration: "underline" }}
                      target="_blank">
                      <SpanBold title={t("surveyControl.sourceURL")} />
                    </a>
                    <SpanBold
                      title={`${t("surveyControl.note")}: ${page.note}`}
                    />
                  </Flex>
                );
              })}
          </div>
          <div style={{ width: windowWidth >= 768 ? "50%" : "100%" }}>
            {surveyPages
              .slice(currentPage - 1, currentPage)
              .map((page: IPages, i) => {
                return (
                  <div
                    className="current-page-screenshot"
                    key={i}
                    style={{
                      height: windowWidth >= 768 ? "180px" : "300px",
                      overflow: "scroll",
                    }}>
                    <img
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
                      style={{ width: "100%", height: "auto" }}
                      alt=""
                    />
                  </div>
                );
              })}
          </div>
        </Flex>
      </Flex>
    </SubCard>
  );
};

export default CurrentPage;
