import { IoAddOutline } from "react-icons/io5";
import { FiArrowUp } from "react-icons/fi";
import { useState } from "react";
import useDispatches from "../../hooks/useDispatches";
import { useTranslations } from "../../hooks";

const ChooseAction = () => {
  const [ishHoveredNew, setIshHoveredNew] = useState(false);
  const [isHoveredAdd, setIsHoveredAdd] = useState(false);
  const { handlePage, finishStep } = useDispatches();
  const { t } = useTranslations();

  return (
    <>
      <h3>{t("chooseAction.header")}</h3>
      <div className="action-card-holder">
        <div
          onClick={() => {
            handlePage(+2);
            finishStep();
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
            handlePage(+1);
            finishStep();
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
