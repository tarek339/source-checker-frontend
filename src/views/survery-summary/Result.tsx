import { useEffect, useState } from "react";
import { Flex, SubTitle } from "../../components";
import { Next, Prev } from "../../components/icons";
import { useSelectors, useTranslations } from "../../hooks";
import { IResult } from "../../types/interfaces/views";

const Result = ({
  credible,
  questionable,
  doubtful,
  sumStars,
  trustworthy,
  unbelievable,
  onNext,
  onPrev,
}: IResult) => {
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");
  const { surveyPages } = useSelectors();
  const { t } = useTranslations();

  useEffect(() => {
    surveyPages.map((page, index) => {
      const averageRating = sumStars![index] / page.starsArray.length;
      if (averageRating === 5) {
        setResult(credible);
        setColor("#28a745");
      }
      if (averageRating === 4) {
        setResult(trustworthy);
        setColor("#4cd137");
      }
      if (averageRating === 3) {
        setResult(questionable);
        setColor("#f1a545");
      }
      if (averageRating === 3) {
        setResult(doubtful);
        setColor("#ff7f00");
      } else {
        setResult(unbelievable);
        setColor("#ff0000");
      }
    });
  }, [surveyPages, sumStars, result, color]);

  return (
    <Flex
      direction={"row"}
      width="100%"
      gap={"0px"}
      justify="space-between"
      align="center">
      <Flex direction={"row"} gap={"5px"} align="center">
        <SubTitle title={`${t("common.result")}:`} />
        <SubTitle
          style={{
            color: color,
          }}
          title={`${result.toUpperCase()}`}
        />
      </Flex>
      <Flex direction={"row"} gap={"20px"} justify="flex-end" align="center">
        <Prev first={0} onClick={onPrev} fontSize={28} />
        <Next last={0} propertyLength={0} onClick={onNext} fontSize={28} />
      </Flex>
    </Flex>
  );
};

export default Result;
