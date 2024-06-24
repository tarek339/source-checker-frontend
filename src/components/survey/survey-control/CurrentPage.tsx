import { useBreakPoints, useSelectors, useTranslations } from "../../../hooks";
import { IPages } from "../../../types/interfaces/interfaces";
import SubTitle from "../../fonts/SubTitle";
import Flex from "../../containers/Flex";
import SubCard from "../../containers/SubCard";
import Span from "../../fonts/Span";
import Link from "../../fonts/Link";

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
                    <Span
                      title={`${t("common.title")}: ${page.title}`}
                      fontWeight={600}
                    />
                    <Span
                      title={`Ansicht: ${
                        page.isMobileView
                          ? "Mobile Screenshot"
                          : page.isMobileView === false
                          ? "Desktop Screenshot"
                          : t("surveyControl.ogData")
                      }`}
                      fontWeight={600}
                    />
                    <Link
                      url={page.url}
                      title={t("surveyControl.sourceURL")}
                      fontWeight={600}
                      fontSize={18}
                    />
                    <Span
                      title={`${t("surveyControl.note")}: ${page.note}`}
                      fontWeight={600}
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
                    className="hide-scroll-bar"
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
