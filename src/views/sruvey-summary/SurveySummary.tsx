import { useEffect, useState } from "react";
import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../hooks";
import { PagesProps, StudentProps } from "../../types/interfaces/interfaces";
import {
  Card,
  FramerMotion,
  Title,
  Grid,
  SummaryTable,
  Thumbnail,
  SectionHolder,
  Result,
  Link,
  SubTitle,
} from "../../components";
import { Average, Back } from "../../components/icons";
import withSurveyAuthPages from "../../hoc/withSurveyAuthPages";
import { useNavigate, useParams } from "react-router-dom";
import { Rating, TableBody, TableCell, TableRow } from "@mui/material";
import { colors } from "../../assets/theme/colors";

const sx: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: 600,
  textTransform: "none",
  border: "none",
};

const SurveySummary = () => {
  const { fetchSurvey } = useRequests();
  const { first, last, surveyPages, survey, pageId, isSort } = useSelectors();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { pageID } = useParams();
  const { setFirst, setLast, fetchPageId } = useDispatches();
  const navigate = useNavigate();

  const [sumStars, setSumStars] = useState<number[]>([0]);
  const [page, setPage] = useState<PagesProps>();
  const [nextId, setNextId] = useState("");
  const [prevId, setprevId] = useState("");
  const [filteredZeroStars, setFilteredZeroStars] = useState<StudentProps[]>(
    []
  );
  const [calculatedAverage, setCalculatedAverage] = useState(0);

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    fetchPageId(pageID ?? "");
  }, [pageId]);

  useEffect(() => {
    const sum = surveyPages
      .filter((page) => page._id === pageId)
      .map((page: PagesProps) => {
        setPage(page);
        return page.starsArray.reduce((acc, crr) => {
          return acc + crr.stars;
        }, 0);
      });
    setSumStars(sum);
  }, [surveyPages, pageId]);

  useEffect(() => {
    const filteredIDs = surveyPages
      .slice()
      .sort((a, b) =>
        isSort
          ? b.starsArray?.reduce((acc, crr) => acc + crr.stars, 0) -
            a.starsArray?.reduce((acc, crr) => acc + crr.stars, 0)
          : 0
      )
      .map((page: PagesProps) => page._id);
    const currentIndex = filteredIDs.indexOf(pageId);
    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;

    if (nextIndex < filteredIDs.length) {
      setNextId(filteredIDs[nextIndex]);
    }
    if (prevIndex < filteredIDs.length) {
      setprevId(filteredIDs[prevIndex]);
    }
  }, [surveyPages, pageId, isSort]);

  useEffect(() => {
    const filterStudents = surveyPages
      .filter((page) => page._id === pageId)
      .flatMap((page) => {
        return page.starsArray
          .filter((star) => star.stars !== 0)
          .map((star) => ({
            ...star,
            _id: "",
            freeUserName: "",
            isNameRegistered: false,
            participated: false,
          }));
      });
    setFilteredZeroStars(filterStudents);
  }, [pageId, surveyPages]);

  useEffect(() => {
    const calculateAverage =
      sumStars.reduce((acc, star) => acc + star, 0) / filteredZeroStars.length;
    setCalculatedAverage(calculateAverage);
  }, [sumStars, filteredZeroStars]);

  return (
    <FramerMotion>
      <Grid column gutters>
        <Grid flexStart alignCenter width={"100%"} spacing={1}>
          <Back
            size={40}
            onClick={() => navigate(`/survey-ranking/${survey?._id}`)}
          />
          <Title title={t("surveySummaray.title")} />
        </Grid>

        <Card>
          <Grid spacing={4} column>
            <Grid
              direction={windowWidth > 690 ? "row" : "column"}
              spacing={windowWidth > 690 ? 2 : 4}
              alignStart
              between
              nowrap
              noMargin>
              <>
                {surveyPages
                  .filter((page) => page._id === pageId)
                  .map((page) => {
                    return (
                      <Thumbnail
                        width={"50%"}
                        height={windowWidth < 691 ? "250px" : "500px"}
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
                            ? page.mobileScreenshot
                            : page.isMobileView === null && page.isOpenGraphView
                            ? page.openGraph.ogImage?.map(
                                (img: { url: string }) => img.url
                              )
                            : null
                        }
                      />
                    );
                  })}
              </>
              <Grid column noMargin width={"100%"}>
                {windowWidth > 600 ? (
                  <>
                    <SummaryTable header={null}>
                      <TableBody>
                        {surveyPages
                          .filter((page) => page._id === pageId)
                          .map((page) => {
                            return (
                              <TableRow>
                                <TableCell sx={sx}>{page.title}</TableCell>
                                <TableCell sx={sx}>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "5px",
                                    }}>
                                    <Average />
                                    {calculatedAverage.toFixed(2)}
                                    <Rating
                                      value={+calculatedAverage.toFixed(2)}
                                      precision={0.5}
                                      readOnly
                                      size="large"
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </SummaryTable>

                    <SectionHolder page={page!} />
                  </>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}>
                    {surveyPages
                      .filter((page) => page._id === pageId)
                      .map((page) => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "5px",
                            }}>
                            <SubTitle title={page.title} />
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: "5px",
                              }}>
                              <Average />
                              <SubTitle title={calculatedAverage.toFixed(2)} />
                              <Rating
                                value={+calculatedAverage.toFixed(2)}
                                precision={0.5}
                                readOnly
                                size="large"
                              />
                            </div>
                          </div>
                        );
                      })}

                    {surveyPages.flatMap((page) => {
                      return page.starsArray
                        ?.slice()
                        .sort((a, b) => b.stars - a.stars)
                        .map((obj, i) => (
                          <div key={i}>
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottom: `2px solid ${colors.primary.main}`,
                                paddingBottom: "10px",
                                paddingTop: "10px",
                              }}>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "5px",
                                }}>
                                <SubTitle title={`${i + 1}.`} />
                                <SubTitle
                                  title={
                                    survey?.freeUserNames &&
                                    !survey?.anonymousResults
                                      ? obj.userName
                                      : obj.userNumber
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  gap: "5px",
                                  alignItems: "center",
                                }}>
                                <Average />
                                <Rating
                                  value={obj.stars}
                                  readOnly
                                  size="large"
                                />
                              </div>
                            </div>
                          </div>
                        ));
                    })}
                  </div>
                )}
              </Grid>
            </Grid>

            <div
              style={{
                display: "flex",
                justifyContent:
                  windowWidth < 435 ? "flex-end" : "space-between",
                width: "100%",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}>
              <div>
                {surveyPages
                  .filter((page) => page._id === pageId)
                  .map((page) => {
                    return (
                      <Link
                        href={page.url}
                        title={t("surveyControl.sourceURL")}
                        bold
                      />
                    );
                  })}
              </div>

              <Result
                first={first}
                last={last}
                setFirst={setFirst}
                setLast={setLast}
                property={surveyPages}
                nextId={nextId}
                prevId={prevId}
              />
            </div>
          </Grid>
        </Card>
      </Grid>
    </FramerMotion>
  );
};

export default withSurveyAuthPages(SurveySummary);
