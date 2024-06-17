import { useEffect, useState } from "react";
import { useRequests, useSelectors } from "../hooks";
import { IPages } from "../types/interfaces/interfaces";

const SurveySummary = () => {
  const { fetchSurvey } = useRequests();
  const { surveyPages } = useSelectors();
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
    <div>
      <div>
        {surveyPages.map((page, index) => {
          const averageRating = sumStars![index] / page.starsArray.length;
          return (
            <div key={index}>
              <p>
                Title {page.title} has an average rating of {averageRating}
              </p>
              <div>
                {page.starsArray.map((obj, i) => {
                  return (
                    <div key={i}>
                      <p>
                        user name: {obj.userName}, stars: {obj.stars}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SurveySummary;
