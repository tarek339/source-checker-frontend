import { IoAddOutline } from "react-icons/io5";
import { FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useLocaleStorage, useTranslations } from "../../hooks";

const ChooseAction = () => {
  const [ishHoveredNew, setIshHoveredNew] = useState(false);
  const [isHoveredAdd, setIsHoveredAdd] = useState(false);
  const { setPage, setDoneStep } = useLocaleStorage();
  const { t } = useTranslations();

  useEffect(() => {
    localStorage.removeItem("surveyData");
    localStorage.removeItem("page");
    localStorage.removeItem("stepDone");
  }, []);

  return (
    <>
      <h3>{t("chooseAction.header")}</h3>
      <div className="action-card-holder">
        <div
          onClick={() => {
            setPage(+2);
            setDoneStep();
          }}
          onMouseEnter={() => setIsHoveredAdd(true)}
          onMouseLeave={() => setIsHoveredAdd(false)}
          className="action-card">
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
          onMouseEnter={() => setIshHoveredNew(true)}
          onMouseLeave={() => setIshHoveredNew(false)}
          className="action-card">
          <FiArrowUp
            fontSize="64px"
            color={ishHoveredNew ? "darkgray" : "lightgray"}
          />
          <p>{t("chooseAction.existingSurvey")}</p>
          {/* <p>(ID und PIN erforderlich)</p> */}
        </div>
      </div>
    </>
  );
};

export default ChooseAction;
