import { useSelectors, useTranslations, useBreakPoints } from "../../../hooks";
import { Next, Prev } from "../../icons";
import SubTitle from "../../fonts/SubTitle";
import Flex from "../../containers/Flex";
import { IResult } from "../../../types/interfaces/components";
import Span from "../../fonts/Span";

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
  const { surveyPages } = useSelectors();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();

  const nextPage = () => {
    if (last >= property?.length) return;
    setFirst(first + 1);
    setLast(last + 1);
  };

  const prevPage = () => {
    if (first === 0) return;
    setFirst(first - 1);
    setLast(last - 1);
  };

  return (
    <Flex
      direction={windowWidth <= 580 ? "column" : "row"}
      width="100%"
      gap={windowWidth <= 470 ? "10px" : "0px"}
      justify="space-between"
      align={windowWidth <= 470 ? "flex-start" : "center"}>
      <Flex
        direction={windowWidth >= 400 ? "row" : "column"}
        gap={"5px"}
        align={"flex-start"}>
        <SubTitle title={`${t("common.result")}:`} />
        <>
          {surveyPages.slice(first, last).map((page, index) => {
            const averageRating = sumStars![index] / page.starsArray.length;
            if (averageRating >= 4.5 && averageRating <= 5) {
              return (
                <div key={index} style={{ paddingTop: "1.5px" }}>
                  {credible}
                </div>
              );
            } else if (averageRating >= 3.5 && averageRating <= 4.4) {
              return (
                <div key={index} style={{ paddingTop: "1.5px" }}>
                  {trustworthy}
                </div>
              );
            } else if (averageRating >= 2.5 && averageRating <= 3.4) {
              return (
                <div key={index} style={{ paddingTop: "1.5px" }}>
                  {questionable}
                </div>
              );
            } else if (averageRating >= 1.5 && averageRating <= 2.4) {
              return (
                <div key={index} style={{ paddingTop: "1.5px" }}>
                  {doubtful}
                </div>
              );
            } else {
              return (
                <div key={index} style={{ paddingTop: "1.5px" }}>
                  {unbelievable}
                </div>
              );
            }
          })}
        </>
      </Flex>

      <Flex direction={"row"} gap={"20px"} justify="flex-end" align="center">
        <Flex direction={"row"} gap={"10px"}>
          <Span title={first + 1} fontSize={21} fontWeight={600} />
          <Span title={t("common.of")} fontSize={21} fontWeight={600} />
          <Span title={property?.length} fontSize={21} fontWeight={600} />
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
