import { useEffect, useState } from "react";
import { useRequests, useSelectors } from "../hooks";
import { IPages } from "../types/interfaces/interfaces";
import { Card, FramerMotion, SubTitel, SurveyContent } from "../components";

const SurveySummary = () => {
  const { fetchSurvey } = useRequests();
  const { surveyPages, survey } = useSelectors();
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
      <SubTitel title={"HI"} />
      <Card style={{ paddingTop: "30px" }}>
        <FramerMotion>
          {surveyPages.map((page, index) => {
            const averageRating = sumStars![index] / page.starsArray.length;
            return (
              <div key={index}>
                <p>
                  Title {page.title} has an average rating of {averageRating}
                </p>
                <div>
                  {!survey?.anonymousResults &&
                    page.starsArray.map((obj, i) => {
                      return (
                        <div key={i}>
                          <p>
                            user name:{" "}
                            {survey?.freeUserNames
                              ? obj.userName
                              : obj.userNumber}
                            , stars: {obj.stars}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </FramerMotion>
      </Card>
    </SurveyContent>
  );
};

export default SurveySummary;
