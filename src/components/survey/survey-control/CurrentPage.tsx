import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import { IPages } from "../../../types/interfaces/interfaces";
import SubTitle from "../../fonts/SubTitle";
import Flex from "../../containers/Flex";
import SubCard from "../../containers/SubCard";
import Span from "../../fonts/Span";
import Link from "../../fonts/Link";
import { Button } from "../..";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import axios from "axios";
import { useParams } from "react-router-dom";

const CurrentPage = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { surveyPages, currentPage } = useSelectors();
  const {
    setCurrentPage,
    dispatchSurvey,
    setVoted,
    setVotedStars,
    closeModal,
  } = useDispatches();
  const { id } = useParams();

  const handleCurrentPage = async (pageNum: number) => {
    try {
      setVoted(false);
      setVotedStars(0);
      const res = await axios.post(`/survey/set-current-page/${id}`, {
        pageNum,
      });
      dispatchSurvey(res.data.survey);
      setCurrentPage(res.data.survey.pageNum);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    if (currentPage !== surveyPages.length) {
      closeModal();
      handleCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      closeModal();
      handleCurrentPage(currentPage - 1);
    }
  };

  return (
    <SubCard height={windowWidth > 1550 ? "35vh" : "auto"}>
      <Flex
        direction={windowWidth > 800 ? "row" : "column"}
        gap={"20px"}
        justify="space-between">
        <SubTitle title={t("surveyControl.currentPage")} />
        <Flex direction={"row"} gap={"0px"} justify="space-between">
          {windowWidth < 800 ? (
            <SubTitle title={`${`${currentPage}/${surveyPages.length}`}`} />
          ) : (
            <div></div>
          )}
        </Flex>

        <Flex direction={"column"} gap={windowWidth < 800 ? "15px" : "40px"}>
          <Flex
            direction={windowWidth > 800 ? "row" : "column"}
            gap={"20px"}
            justify="space-between">
            <Button
              onClick={prevPage}
              title={
                <>
                  <IoArrowBackSharp fontSize={"22px"} />
                  <span>{t("button.back")}</span>
                </>
              }
            />
            <Button
              onClick={nextPage}
              title={
                <>
                  <span>{t("button.next")}</span>
                  <IoArrowForwardSharp fontSize={"22px"} />
                </>
              }
            />
            {windowWidth > 800 ? (
              <SubTitle title={`${`${currentPage}/${surveyPages.length}`}`} />
            ) : (
              <div></div>
            )}
          </Flex>
          <div>
            {surveyPages
              .slice(currentPage - 1, currentPage)
              .map((page: IPages, i: number) => {
                return (
                  <Flex key={i} direction={"column"} gap={"10px"}>
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
        </Flex>

        <div
          style={{
            width: "100%",
            paddingTop: windowWidth < 800 ? "15px" : "0px",
          }}>
          {surveyPages
            .slice(currentPage - 1, currentPage)
            .map((page: IPages, i) => {
              return (
                <div
                  // className="hide-scroll-bar"
                  key={i}
                  style={{
                    height: windowWidth >= 768 ? "270px" : "300px",
                    overflowY: "scroll",
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
    </SubCard>
  );
};

export default CurrentPage;
