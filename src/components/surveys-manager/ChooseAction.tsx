import { IoAddOutline } from "react-icons/io5";
import { FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useBreakPoints, useLocaleStorage, useTranslations } from "../../hooks";
import SubHeader from "../parents/SubHeader";
import Flex from "../parents/containers/Flex";

const style: React.CSSProperties = {
  border: "2px dashed lightgray",
  borderRadius: "10px",
  height: "230px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "18px",
  cursor: "pointer",
};

const ChooseAction = () => {
  const [isHoveredNew, setIsHoveredNew] = useState(false);
  const [isHoveredAdd, setIsHoveredAdd] = useState(false);
  const { setPage, setDoneStep, resetStates } = useLocaleStorage();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();

  useEffect(() => {
    resetStates();
  }, []);

  return (
    <>
      <SubHeader title={t("chooseAction.header")} />
      <Flex
        direction={windowWidth <= 619 ? "column" : "row"}
        gap={"20px"}
        style={{ marginTop: "1em" }}>
        <div
          onClick={() => {
            setPage(+2);
            setDoneStep();
          }}
          onMouseEnter={() => setIsHoveredAdd(true)}
          onMouseLeave={() => setIsHoveredAdd(false)}
          style={{
            ...style,
            borderColor: isHoveredAdd ? "darkgray" : "lightgray",
          }}>
          <IoAddOutline
            fontSize="64px"
            color={isHoveredAdd ? "darkgray" : "lightgray"}
          />
          <p>{t("chooseAction.newSurvey")}</p>
        </div>
        <div
          onClick={() => {
            localStorage.removeItem("surveyData");
            setPage(+1);
            setDoneStep();
          }}
          onMouseEnter={() => setIsHoveredNew(true)}
          onMouseLeave={() => setIsHoveredNew(false)}
          style={{
            ...style,
            borderColor: isHoveredNew ? "darkgray" : "lightgray",
          }}>
          <FiArrowUp
            fontSize="64px"
            color={isHoveredNew ? "darkgray" : "lightgray"}
          />
          <p>{t("chooseAction.existingSurvey")}</p>
        </div>
      </Flex>
    </>
  );
};

export default ChooseAction;
