import { MutableRefObject, useEffect, useState } from "react";
import {
  Button,
  Card,
  FramerMotion,
  Grid,
  SubTitle,
  SummaryTable,
  Text,
  Thumbnail,
  Title,
} from "../../components";
import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useScreenshot,
  useSelectors,
} from "../../hooks";
import { Arrow, Back } from "../../components/icons";
import { useNavigate, useParams } from "react-router-dom";
import withSurveyAuthPages from "../../hoc/withSurveyAuthPages";
import { Rating, TableBody, TableCell, TableRow } from "@mui/material";
import { colors } from "../../assets/theme/colors";

const sx: React.CSSProperties = {
  fontSize: "22px",
  fontWeight: 600,
  textTransform: "none",
  cursor: "pointer",
  border: "none",
};

const PagesRanking = () => {
  const { isSort, surveyPages, survey } = useSelectors();
  const { fetchSurvey } = useRequests();
  const { windowWidth } = useBreakPoints();
  const { setFirst, setLast, setIsSort, fetchPageId } = useDispatches();
  const { handleScreenshot, screenshotRef } = useScreenshot();
  const { id } = useParams();
  const navigate = useNavigate();

  const [degree, setDegree] = useState(270);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (row: number) => {
    setHovered(row);
  };
  const handleMouseLeave = () => {
    setHovered(null);
  };

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    if (isSort) {
      setDegree(270);
    } else setDegree(90);
  }, [isSort, degree]);

  return (
    <FramerMotion>
      <Grid column gutters>
        <Grid flexStart alignCenter width={"100%"} spacing={1}>
          <Back
            size={40}
            onClick={() => navigate(`/survey-control/${survey?._id}`)}
          />
          <Title title={`Ranking`} />
        </Grid>

        <Card>
          <div
            ref={screenshotRef as MutableRefObject<never>}
            style={{
              marginBottom: "32px",
            }}>
            <SubTitle
              title={"Bewertung der Seiten"}
              marginBottom="32px"
              center
            />

            <SummaryTable header={[`Titel`, `Thumbnail`, `Durchschnitt`]} right>
              <TableBody>
                {surveyPages
                  .slice()
                  .sort((a, b) =>
                    isSort
                      ? b.starsArray?.reduce((acc, crr) => acc + crr.stars, 0) -
                        a.starsArray?.reduce((acc, crr) => acc + crr.stars, 0)
                      : 0
                  )
                  .map((page, i) => {
                    return (
                      <TableRow
                        key={i}
                        sx={{
                          borderBottom: `2px solid ${colors.primary.main}`,
                          backgroundColor:
                            hovered === i ? colors.table.tableRow.hover : "",
                          transition: "background-color 0.3s",
                        }}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {
                          setLast(i + 1);
                          setFirst(i);
                          fetchPageId(page._id);
                          navigate(`/survey-summary/${id}/${page._id}`);
                        }}>
                        <TableCell sx={sx}>
                          {i + 1}. {page.title}
                        </TableCell>
                        <TableCell sx={sx}>
                          <Thumbnail
                            url={
                              page.isMobileView
                                ? page.mobileScreenshot
                                : page.isMobileView === false
                                ? page.mobileScreenshot
                                : page.isMobileView === null &&
                                  page.isOpenGraphView
                                ? page.openGraph.ogImage?.map(
                                    (img: { url: string }) => img.url
                                  )
                                : null
                            }
                          />
                        </TableCell>
                        <TableCell sx={sx}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-end",
                              gap: "5px",
                            }}>
                            {page.starsArray
                              .reduce((acc, crr) => {
                                return acc + crr.stars / page.starsArray.length;
                              }, 0)
                              .toFixed(2)}
                            <Rating
                              value={
                                +page.starsArray
                                  .reduce((acc, crr) => {
                                    return (
                                      acc + crr.stars / page.starsArray.length
                                    );
                                  }, 0)
                                  .toFixed(2)
                              }
                              max={1}
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
          </div>

          <Grid
            direction={windowWidth <= 415 ? "column" : "row"}
            alignEnd
            between
            width={"100%"}
            noMargin>
            <Button
              fullWidth={windowWidth <= 415 ? true : false}
              onClick={handleScreenshot}
              title={windowWidth >= 545 ? "Ergebnisse speichern" : "speichern"}
            />

            {surveyPages.length > 1 ? (
              <Grid spacing={1} alignCenter noMargin>
                <Text text={"Sortieren"} bold />
                <Arrow
                  fontSize={31}
                  onClick={() => setIsSort(!isSort)}
                  deg={degree}
                />
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </Card>
      </Grid>
    </FramerMotion>
  );
};

export default withSurveyAuthPages(PagesRanking);
