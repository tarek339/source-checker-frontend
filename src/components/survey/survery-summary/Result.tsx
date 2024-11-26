import { useTranslations, useBreakPoints } from "../../../hooks";
import { Next, Prev } from "../../icons";
import Flex from "../../containers/Flex";
import { IResult } from "../../../types/interfaces/components";
import Span from "../../fonts/Span";
import { Button } from "../..";
import { useNavigate } from "react-router-dom";

const Result = ({ first, last, setFirst, setLast, property }: IResult) => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const navigate = useNavigate();

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
        direction={"row"}
        gap={"20px"}
        justify="flex-end"
        align="center"
        width="100%">
        <Button title={"zurück"} onClick={() => navigate(-1)} />
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
