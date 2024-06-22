import { useEffect, useState } from "react";
import {
  useBreakPoints,
  useRequests,
  useSelectors,
  useStars,
  useTranslations,
} from "../hooks";
import { IPages } from "../types/interfaces/interfaces";
import {
  Card,
  Flex,
  FramerMotion,
  SubTitle,
  Title,
  ContentContainer,
  SectionHolder,
  Result,
} from "../components";
import { Average, Star } from "../components/icons";

const SurveySummary = () => {
  const { fetchSurvey } = useRequests();
  const { surveyPages } = useSelectors();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { fiveStars, fourStars, oneStar, threeStars, twoStars } = useStars();

  const [sumStars, setSumStars] = useState<number[]>();
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(1);

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    const sum = surveyPages.slice(first, last).map((page: IPages) => {
      return page.starsArray.reduce((acc, crr) => {
        return acc + crr.stars;
      }, 0);
    });
    setSumStars(sum);
  }, [surveyPages, first, last]);

  return (
    <ContentContainer>
      <Title title={t("surveySummaray.title")} />
      <Card style={{ paddingTop: "30px" }}>
        <FramerMotion>
          <Flex direction={"column"} gap={"30px"}>
            <>
              {surveyPages.slice(first, last).map((page, index) => {
                const averageRating = sumStars![index] / page.starsArray.length;
                return (
                  <Flex
                    key={index}
                    direction={"column"}
                    gap={"0px"}
                    style={{
                      margin: "0 auto",
                    }}>
                    <Flex
                      direction={windowWidth >= 470 ? "row" : "column"}
                      gap={"20px"}
                      align={windowWidth >= 470 ? "center" : "flex-start"}
                      height="100%"
                      justify="center"
                      style={{
                        marginBottom: "1em",
                      }}>
                      <SubTitle title={`${page.title}`} />
                      <Flex direction={"row"} gap={"10px"} align="center">
                        <Average />
                        <Flex direction={"row"} gap={"0px"}>
                          <SubTitle
                            title={averageRating?.toFixed(2).toString()!}
                          />
                          <Star />
                        </Flex>
                      </Flex>
                    </Flex>

                    <SectionHolder
                      page={page}
                      starsArrayLength={page.starsArray.length}
                      credible={fiveStars}
                      trustworthy={fourStars}
                      questionable={threeStars}
                      doubtful={twoStars}
                      unbelievable={oneStar}
                    />
                  </Flex>
                );
              })}
              <Result
                sumStars={sumStars}
                credible={fiveStars}
                trustworthy={fourStars}
                questionable={threeStars}
                doubtful={twoStars}
                unbelievable={oneStar}
                first={first}
                last={last}
                setFirst={setFirst}
                setLast={setLast}
                property={surveyPages}
              />
            </>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default SurveySummary;
