import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import { PagesProps } from "../../../types/interfaces/interfaces";
import { Button, Card, Grid, Link, SubTitle, Text, Thumbnail } from "../..";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import axios from "axios";
import { useParams } from "react-router-dom";
import { colors } from "../../../assets/theme/colors";

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
  const { survey } = useSelectors();

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
    <Card>
      <Grid column>
        <Grid spacing={1} width={"100%"} flexStart alignCenter>
          <SubTitle title={t("surveyControl.currentPage")} />
          <SubTitle title={`${`${currentPage}/${surveyPages.length}`}`} />
        </Grid>

        <Grid
          direction={windowWidth > 800 ? "row" : "column-reverse"}
          width={"100%"}
          between
          nowrap>
          <Grid column width={"100%"}>
            <>
              {surveyPages
                .slice(currentPage - 1, currentPage)
                .map((page: PagesProps, i: number) => {
                  return (
                    <Grid key={i} column spacing={1}>
                      <Text text={`${t("common.title")}: ${page.title}`} bold />
                      <Text
                        text={`Ansicht: ${
                          page.isMobileView
                            ? "Mobile Screenshot"
                            : page.isMobileView === false
                            ? "Desktop Screenshot"
                            : t("surveyControl.ogData")
                        }`}
                        bold
                      />
                      <Link
                        href={page.url}
                        title={t("surveyControl.sourceURL")}
                        bold
                      />
                      <Text
                        style={{
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                        text={`${t("surveyControl.note")}: ${page.note}`}
                        bold
                      />
                    </Grid>
                  );
                })}
            </>

            <Grid
              spacing={1}
              direction={
                windowWidth > 800
                  ? "column"
                  : windowWidth > 500 && windowWidth <= 800
                  ? "row"
                  : "column"
              }
              width={windowWidth > 800 ? "50%" : "100%"}
              noMargin
              between
              nowrap>
              <Button
                title={t("button.next")}
                endIcon={<IoArrowForwardSharp fontSize={"22px"} />}
                onClick={nextPage}
                fullWidth
                disabled={currentPage === surveyPages.length}
                style={{
                  backgroundColor:
                    currentPage === surveyPages.length
                      ? colors.button.disabled
                      : colors.primary.main,
                  boxShadow:
                    currentPage === surveyPages.length
                      ? "none"
                      : colors.shadow.main,
                  color:
                    survey?.isStarted && currentPage !== surveyPages.length
                      ? colors.secondary.main
                      : colors.typography.white,
                }}
              />
              <Button
                title={t("button.back")}
                startIcon={<IoArrowBackSharp fontSize={"22px"} />}
                onClick={prevPage}
                fullWidth
                disabled={currentPage === 1}
                style={{
                  backgroundColor:
                    currentPage === 1
                      ? colors.button.disabled
                      : colors.primary.main,
                  boxShadow: currentPage === 1 ? "none" : colors.shadow.main,
                  color:
                    survey?.isStarted && currentPage !== 1
                      ? colors.secondary.main
                      : colors.typography.white,
                }}
              />
            </Grid>
          </Grid>

          <div
            style={{
              width: "100%",
              paddingTop: windowWidth < 800 ? "15px" : "0px",
            }}>
            {surveyPages.slice(currentPage - 1, currentPage).map((page, i) => {
              return (
                <Thumbnail
                  key={i}
                  width="100%"
                  height={windowWidth >= 768 ? "270px" : "300px"}
                  overflowY={
                    page.isMobileView && !page.isOpenGraphView
                      ? "scroll"
                      : !page.isMobileView && !page.isOpenGraphView
                      ? "scroll"
                      : "hidden"
                  }
                  url={
                    page.isMobileView
                      ? page.mobileScreenshot
                      : page.isMobileView === false
                      ? page.desktopScreenshot
                      : page.isMobileView === null && page.isOpenGraphView
                      ? page.openGraph.ogImage
                          ?.map((img: { url: string }) => img.url)
                          .toString()
                      : null
                  }
                />
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CurrentPage;
