import { useEffect, useState } from "react";
import {
  Card,
  ContentContainer,
  Flex,
  FramerMotion,
  Span,
  SubTitle,
  Thumbnail,
  Title,
} from "../../components";
import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../hooks";
import { Arrow, Star } from "../../components/icons";
import { useNavigate } from "react-router-dom";

const SurveyRanking = () => {
  const { surveyPages, survey, isSort } = useSelectors();
  const { fetchSurvey } = useRequests();
  const { windowWidth } = useBreakPoints();
  const { setFirst, setLast, setIsSort } = useDispatches();
  const { t } = useTranslations();
  const navigate = useNavigate();

  const [deg, setDeg] = useState(270);
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
      setDeg(270);
    } else setDeg(90);
  }, [isSort, deg]);

  return (
    <ContentContainer>
      <Title title={"Ranking"} />
      <Card style={{ paddingTop: "30px" }}>
        <FramerMotion>
          <SubTitle
            title={t("surveySummaray.ranking")}
            style={{ paddingBottom: "0.5em", textAlign: "center" }}
          />
          <Flex
            direction={"column"}
            gap={"10px"}
            style={{ margin: "0 auto", maxWidth: "430px" }}>
            <Flex direction={"column"} gap={"0px"} style={{}}>
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
                      gap="0px"
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
                        navigate(`/survey-summary/${survey?._id}`);
                      }}>
                      <Flex
                        direction={"row"}
                        gap={"0px"}
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
                              ? page.openGraph.ogImage.map(
                                  (img: { url: string }) => img.url
                                )
                              : null
                          }
                        />
                      </Flex>

                      <Flex direction={"row"} gap={"0px"} align="center">
                        <Span
                          fontSize={22}
                          fontWeight={600}
                          title={page.starsArray
                            .reduce((acc, crr) => {
                              return acc + crr.stars;
                            }, 0)
                            .toString()}
                        />
                        <Star />
                      </Flex>
                    </Flex>
                  );
                })}
            </Flex>
          </Flex>

          <Flex
            direction={"row"}
            gap={"10px"}
            justify="flex-end"
            align="center"
            style={{ marginTop: "2em" }}>
            <Span fontSize={22} title={"Sortieren"} fontWeight={600} />
            <Arrow fontSize={31} onClick={() => setIsSort(!isSort)} deg={deg} />
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default SurveyRanking;
