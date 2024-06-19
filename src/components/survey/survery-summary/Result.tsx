import { useEffect, useState } from "react";
import { useSelectors, useTranslations, useBreakPoints } from "../../../hooks";
import { Next, Prev } from "../../icons";
import SubTitle from "../../parents/SubTitle";
import Flex from "../../parents/containers/Flex";
import { IResult } from "../../../types/interfaces/components";

const Result = ({
  credible,
  questionable,
  doubtful,
  sumStars,
  trustworthy,
  unbelievable,
  first,
  last,
  setFirst,
  setLast,
  property,
}: IResult) => {
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");
  const { surveyPages } = useSelectors();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();

  useEffect(() => {
    surveyPages.slice(first, last).map((page, index) => {
      const averageRating = sumStars![index] / page.starsArray.length;

      if (averageRating >= 4.5 && averageRating <= 5) {
        setResult(credible);
        setColor("#28a745");
      } else if (averageRating >= 3.5 && averageRating <= 4.4) {
        setResult(trustworthy);
        setColor("#4cd137");
      } else if (averageRating >= 2.5 && averageRating <= 3.4) {
        setResult(questionable);
        setColor("#f1a545");
      } else if (averageRating >= 1.5 && averageRating <= 2.4) {
        setResult(doubtful);
        setColor("#ff7f00");
      } else {
        setResult(unbelievable);
        setColor("#ff0000");
      }
    });
  }, [surveyPages, sumStars, result, color, first, last]);

  const nextPage = () => {
    if (last >= property?.length) return;
    setFirst((prevNum) => prevNum + 1);
    setLast((prevNum) => prevNum + 1);
  };

  const prevPage = () => {
    if (first === 0) return;
    setFirst((prevNum) => prevNum - 1);
    setLast((prevNum) => prevNum - 1);
  };

  return (
    <Flex
      direction={windowWidth <= 580 ? "column" : "row"}
      width="100%"
      gap={windowWidth <= 580 ? "10px" : "0px"}
      justify="space-between"
      align={windowWidth <= 580 ? "flex-start" : "center"}>
      <Flex
        direction={windowWidth >= 400 ? "row" : "column"}
        gap={"5px"}
        align={windowWidth >= 400 ? "center" : "flex-start"}>
        <SubTitle title={`${t("common.result")}:`} />
        <SubTitle
          style={{
            color: color,
          }}
          title={`${result.toUpperCase()}`}
        />
      </Flex>

      <Flex direction={"row"} gap={"20px"} justify="flex-end" align="center">
        <Flex direction={"row"} gap={"10px"}>
          <span style={{ fontSize: "21px", fontWeight: 600 }}>{first + 1}</span>
          <span style={{ fontSize: "21px", fontWeight: 600 }}>
            {t("common.of")}
          </span>
          <span style={{ fontSize: "21px", fontWeight: 600 }}>
            {property?.length}
          </span>
        </Flex>

        <Prev first={first} onClick={prevPage} fontSize={24} />
        <Next
          last={last}
          propertyLength={property.length}
          onClick={nextPage}
          fontSize={24}
        />
      </Flex>
    </Flex>
  );
};

export default Result;
