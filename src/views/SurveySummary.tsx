import { useEffect, useState } from "react";
import {
  useBreakPoints,
  useRequests,
  useSelectors,
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

  const [sumStars, setSumStars] = useState<number[]>();
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(1);

  const unbelievable = t("studentSurvey.rating.unbelievable");
  const doubtful = t("studentSurvey.rating.doubtful");
  const questionable = t("studentSurvey.rating.questionable");
  const trustworthy = t("studentSurvey.rating.trustworthy");
  const credible = t("studentSurvey.rating.credible");

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
                  <Flex key={index} direction={"column"} gap={"30px"}>
                    <Flex
                      direction={windowWidth >= 470 ? "row" : "column"}
                      gap={"20px"}
                      align={windowWidth >= 470 ? "center" : "flex-start"}
                      height="100%"
                      justify="center">
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

                    <Flex
                      direction={"column"}
                      gap={"15px"}
                      style={{ margin: windowWidth >= 470 ? "0 auto" : "" }}>
                      <SectionHolder
                        page={page}
                        starsArrayLength={page.starsArray.length}
                        credible={credible}
                        trustworthy={trustworthy}
                        questionable={questionable}
                        doubtful={doubtful}
                        unbelievable={unbelievable}
                      />
                    </Flex>
                  </Flex>
                );
              })}
              <Result
                sumStars={sumStars}
                credible={credible}
                trustworthy={trustworthy}
                questionable={questionable}
                doubtful={doubtful}
                unbelievable={unbelievable}
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
