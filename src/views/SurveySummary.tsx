import { useEffect, useState } from "react";
import { useRequests, useSelectors, useTranslations } from "../hooks";
import { IPages } from "../types/interfaces/interfaces";
import {
  Card,
  Flex,
  FramerMotion,
  SubTitle,
  Title,
  SurveyContent,
} from "../components";
import { Average, Star } from "../components/icons";

const SurveySummary = () => {
  const { fetchSurvey } = useRequests();
  const { surveyPages, survey } = useSelectors();
  const { t } = useTranslations();
  const [sumStars, setSumStars] = useState<number[]>();

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
    <SurveyContent>
      <Title title={t("surveySummaray.title")} />
      <Card style={{ paddingTop: "30px" }}>
        <FramerMotion>
          <Flex direction={"column"} gap={"30px"}>
            {surveyPages.map((page, index) => {
              const averageRating = sumStars![index] / page.starsArray.length;
              return (
                <Flex
                  key={index}
                  direction={"column"}
                  gap={"10px"}
                  justify="center">
                  <>
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
                          <SubTitle title={averageRating.toString()} />
                          <Star />
                        </Flex>
                      </Flex>
                    </Flex>

                    {!survey?.anonymousResults &&
                      page.starsArray.map((obj, i) => {
                        return (
                          <Flex
                            key={i}
                            direction={"column"}
                            gap={"0px"}
                            align="center">
                            <span>
                              user name:{" "}
                              {survey?.freeUserNames
                                ? obj.userName
                                : obj.userNumber}
                              , stars: {obj.stars}
                            </span>
                          </Flex>
                        );
                      })}
                  </>
                </Flex>
              );
            })}
          </Flex>
        </FramerMotion>
      </Card>
    </SurveyContent>
  );
};

export default SurveySummary;
