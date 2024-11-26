import { IoAddOutline } from "react-icons/io5";
import { FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useBreakPoints, useDispatches, useTranslations } from "../../hooks";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Flex,
  FramerMotion,
  SubTitle,
  Title,
  ContentContainer,
  ErrorModal,
} from "../../components";
import axios from "axios";

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
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const navigate = useNavigate();
  const {
    dispatchLoading,
    setMainPage,
    dispatchSurvey,
    openModal,
    closeModal,
  } = useDispatches();

  useEffect(() => {
    setMainPage(false);
  }, [setMainPage]);

  const handleSubmit = async () => {
    try {
      dispatchLoading(true);
      const res = await axios.post("/survey/create", {
        anonymousResults: false,
        freeUserNames: false,
      });
      dispatchSurvey(res.data.survey);
      dispatchLoading(false);
      navigate(`/surveys-manager/save-survey/${res.data.survey._id}`);
      closeModal();
    } catch (err: unknown) {
      dispatchLoading(false);
      openModal();
    }
  };

  return (
    <ContentContainer>
      <ErrorModal
        onClick={handleSubmit}
        errTitle="Verbindungsfehler"
        errMsg="Umfrage konnte nicht angelegt werden. Bitte versuche es später nochmal."
      />
      <Title title={t("survey.createManagement")} />
      <Card>
        <FramerMotion>
          <SubTitle title={t("chooseAction.header")} />
          <Flex
            direction={windowWidth <= 619 ? "column" : "row"}
            gap={"20px"}
            style={{ marginTop: "1em" }}>
            <div
              onClick={handleSubmit}
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
                navigate("/surveys-manager/choose-survey");
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
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default ChooseAction;
