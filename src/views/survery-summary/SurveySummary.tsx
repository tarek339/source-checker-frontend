import { useEffect, useState } from "react";
import { useRequests, useSelectors, useTranslations } from "../../hooks";
import { IPages } from "../../types/interfaces/interfaces";
import {
  Card,
  Flex,
  FramerMotion,
  SubTitle,
  Title,
  ContentContainer,
} from "../../components";
import { Average, Star } from "../../components/icons";
import Result from "./Result";
import SectionHolder from "./SectionHolder";

const SurveySummary = () => {
  const { fetchSurvey } = useRequests();
  const { surveyPages } = useSelectors();
  const { t } = useTranslations();
  const [sumStars, setSumStars] = useState<number[]>();

  const unbelievable = t("studentSurvey.rating.unbelievable");
  const doubtful = t("studentSurvey.rating.doubtful");
  const questionable = t("studentSurvey.rating.questionable");
  const trustworthy = t("studentSurvey.rating.trustworthy");
  const credible = t("studentSurvey.rating.credible");

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    const sum = surveyPages.map((page: IPages) => {
      return page.starsArray.reduce((acc, crr) => {
        return acc + crr.stars;
      }, 0);
    });
    setSumStars(sum);
  }, [surveyPages]);

  return (
    <ContentContainer>
      <Title title={t("surveySummaray.title")} />
      <Card style={{ paddingTop: "30px" }}>
        <FramerMotion>
          <Flex direction={"column"} gap={"30px"}>
            <>
              {surveyPages.map((page, index) => {
                const averageRating = sumStars![index] / page.starsArray.length;
                return (
                  <Flex key={index} direction={"column"} gap={"30px"}>
                    <Flex
                      direction={"row"}
                      gap={"20px"}
                      align="center"
                      height="100%"
                      justify="center">
                      <SubTitle title={`${t("common.title")} ${page.title}`} />
                      <Flex direction={"row"} gap={"10px"} align="center">
                        <Average />
                        <Flex direction={"row"} gap={"0px"}>
                          <SubTitle
                            title={averageRating.toFixed(2).toString()}
                          />
                          <Star />
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex
                      direction={"column"}
                      gap={"15px"}
                      style={{ margin: "0 auto" }}>
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
                onNext={undefined}
                onPrev={undefined}
              />
            </>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default SurveySummary;
