import { FaCircleDot } from "react-icons/fa6";
import { useTranslations } from "../../../hooks";
import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";

const RatingInfo = () => {
  const { t } = useTranslations();
  return (
    <Flex
      direction={"row"}
      gap={"10px"}
      justify="flex-start"
      style={{
        border: "1.5px solid rgb(40, 53, 195, 0.2)",
        color: "#2835c3",
        backgroundColor: "rgb(40, 53, 195, 0.05)",
        padding: "15px 20px",
      }}>
      <Flex
        direction={"row"}
        justify="flex-start"
        align="flex-start"
        style={{
          paddingTop: "6px",
        }}>
        <FaCircleDot />
      </Flex>
      <div style={{ color: "#2835c3" }}>
        <Span title={"Bewertung"} fontSize={18} fontWeight={600} />
        <Span title={t("newSurvey.ratingText")} fontSize={16} />
      </div>
    </Flex>
  );
};

export default RatingInfo;
