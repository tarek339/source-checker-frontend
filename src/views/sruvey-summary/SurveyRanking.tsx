import { useEffect, useState } from "react";
import {
  Card,
  ContButton,
  ContentContainer,
  Flex,
  FramerMotion,
  Span,
  SubTitle,
  Title,
} from "../../components";
import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useSelectors,
} from "../../hooks";
import { Arrow, Star } from "../../components/icons";
import { useNavigate } from "react-router-dom";

const SurveyRanking = () => {
  const { surveyPages, survey } = useSelectors();
  const { fetchSurvey } = useRequests();
  const { windowWidth } = useBreakPoints();
  const navigate = useNavigate();
  const {} = useDispatches();

  const [isSort, setIsSort] = useState(true);
  const [deg, setDeg] = useState(270);

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
      <Title title={"Ranking der Seiten"} />
      <Card style={{ paddingTop: "30px" }}>
        <FramerMotion>
          <SubTitle
            title={"Ergebnisse der Seiten"}
            style={{ paddingBottom: "0.5em", textAlign: "center" }}
          />
          <Flex
            direction={"column"}
            gap={"10px"}
            style={{ margin: "0 auto", maxWidth: "430px" }}>
            <Flex direction={"column"} gap={"0px"}>
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
                        padding: "20px 0px 20px 0px",
                      }}>
                      <Flex direction={"row"} gap={"5px"}>
                        <Span
                          fontSize={22}
                          title={`${i + 1}.`}
                          fontWeight={600}
                        />
                        <Span
                          fontSize={22}
                          title={page.title.toUpperCase()}
                          fontWeight={600}
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
            gap={"0px"}
            justify="space-between"
            align="center"
            style={{ marginTop: "2em" }}>
            <ContButton
              onClick={() => navigate(`/survey-summary/${survey?._id}`)}
              title={"Einzelansicht"}
            />
            <Flex
              direction={"row"}
              gap={"10px"}
              justify="center"
              align="center">
              <Span fontSize={22} title={"Sortieren"} fontWeight={600} />
              <Arrow
                fontSize={31}
                onClick={() => setIsSort(!isSort)}
                deg={deg}
              />
            </Flex>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default SurveyRanking;
