import { MutableRefObject, useEffect, useState } from "react";
import {
  Button,
  Card,
  ContentContainer,
  Flex,
  FramerMotion,
  Span,
  SubTitle,
  Thumbnail,
} from "../../components";
import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useScreenshot,
  useSelectors,
  useTranslations,
} from "../../hooks";
import { Arrow, Back, Star } from "../../components/icons";
import { useNavigate, useParams } from "react-router-dom";
import withSurveyAuthPages from "../../hoc/withSurveyAuthPages";

const PagesRanking = () => {
  const { isSort, surveyPages, survey } = useSelectors();
  const { fetchSurvey } = useRequests();
  const { windowWidth } = useBreakPoints();
  const { setFirst, setLast, setIsSort } = useDispatches();
  const { t } = useTranslations();
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
      <ContentContainer style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <Flex
          direction={"row"}
          align="center"
          style={{ marginBottom: "1em", marginLeft: "1em" }}>
          <Back
            style={{ paddingTop: "7px" }}
            onClick={() => navigate(`/survey-control/${survey?._id}`)}
          />
          <SubTitle style={{ fontSize: "31px" }} title={`Ranking`} />
        </Flex>
        <Card>
          <div ref={screenshotRef as MutableRefObject<never>}>
            <SubTitle
              title={t("surveySummaray.ranking")}
              style={{ paddingBottom: "0.5em", textAlign: "center" }}
            />
            <Flex
              direction={"column"}
              gap={"10px"}
              style={{ margin: "0 auto", maxWidth: "430px" }}>
              <Flex direction={"column"} style={{}}>
                {surveyPages
                  ?.slice()
                  .sort((a, b) =>
                    isSort
                      ? b.starsArray.reduce((acc, crr) => acc + crr.stars, 0) -
                        a.starsArray.reduce((acc, crr) => acc + crr.stars, 0)
                      : 0
                  )
                  .map((page, i) => {
                    return (
                      <Flex
                        key={i}
                        direction={windowWidth >= 570 ? "row" : "column"}
                        align="center"
                        justify={"space-between"}
                        style={{
                          borderBottom: "2px solid #2835c3",
                          padding: "20px 4px 20px 10px",
                          cursor: "pointer",
                          backgroundColor: hovered === i ? "#2835c320" : "",
                          transition: "background-color 0.3s",
                        }}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {
                          setLast(i + 1);
                          setFirst(i);
                          navigate(`/survey-summary/${id}`);
                        }}>
                        <Flex
                          direction={"row"}
                          width="80%"
                          justify="space-between"
                          align="center">
                          <Flex direction={"row"} gap={"5px"}>
                            <Span
                              fontSize={22}
                              title={`${i + 1}.`}
                              fontWeight={600}
                            />
                            <Span
                              fontSize={22}
                              title={page.title}
                              fontWeight={600}
                            />
                          </Flex>
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
                        </Flex>

                        <Flex
                          direction={"row"}
                          align="center"
                          style={{ paddingLeft: "5px" }}>
                          <Span
                            fontSize={22}
                            fontWeight={600}
                            title={page.starsArray
                              .reduce((acc, crr) => {
                                return acc + crr.stars / page.starsArray.length;
                              }, 0)
                              .toFixed(2)}
                          />
                          <Star />
                        </Flex>
                      </Flex>
                    );
                  })}
              </Flex>
            </Flex>
          </div>
          <Flex
            flexWrap="wrap"
            justify="center"
            gap="20px"
            align="center"
            style={{ marginTop: "2em" }}>
            <Button
              onClick={handleScreenshot}
              title={windowWidth >= 540 ? "Ergebnisse speichern" : "speichern"}
            />

            {surveyPages.length > 1 ? (
              <Flex direction={"row"} gap={"10px"}>
                <Span fontSize={22} title={"Sortieren"} fontWeight={600} />
                <Arrow
                  fontSize={31}
                  onClick={() => setIsSort(!isSort)}
                  deg={degree}
                />
              </Flex>
            ) : (
              <></>
            )}
          </Flex>
        </Card>
      </ContentContainer>
    </FramerMotion>
  );
};

export default withSurveyAuthPages(PagesRanking);
