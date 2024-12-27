import { IoAddOutline } from "react-icons/io5";
import { FiArrowUp } from "react-icons/fi";
import { useState } from "react";
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
import withUnAuthPages from "../../hoc/withUnAuthPages";

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
  backgroundColor: "transparent",
};

const SurveyEntryPoint = () => {
  const [isHoveredNew, setIsHoveredNew] = useState(false);
  const [isHoveredAdd, setIsHoveredAdd] = useState(false);
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const navigate = useNavigate();
  const { dispatchLoading, dispatchSurvey, openModal, closeModal } =
    useDispatches();

  const handleSubmit = async () => {
    try {
      dispatchLoading(true);
      const res = await axios.post("/survey/create", {
        anonymousResults: false,
        freeUserNames: false,
      });
      dispatchSurvey(res.data.survey);
      sessionStorage.setItem("token", res.data.token);
      dispatchLoading(false);
      navigate(`/surveys-manager/survey-profile/${res.data.survey._id}`);
      closeModal();
    } catch (error) {
      dispatchLoading(false);
      openModal();
    }
  };

  return (
    <ContentContainer>
      <ErrorModal />
      <Title title={t("survey.createManagement")} />
      <Card>
        <FramerMotion>
          <SubTitle title={t("chooseAction.header")} />
          <Flex
            direction={windowWidth <= 619 ? "column" : "row"}
            gap={"20px"}
            style={{ marginTop: "1em" }}>
            <button
              onClick={handleSubmit}
              onMouseEnter={() => setIsHoveredAdd(true)}
              onMouseLeave={() => setIsHoveredAdd(false)}
              style={{
                ...style,
                borderColor: isHoveredAdd ? "grey" : "darkgrey",
                color: isHoveredAdd ? "grey" : "darkgrey",
              }}>
              <IoAddOutline
                fontSize="64px"
                color={isHoveredAdd ? "grey" : "darkgrey"}
              />
              {t("chooseAction.newSurvey")}
            </button>
            <button
              onClick={() => {
                navigate("/surveys-manager/log-in");
              }}
              onMouseEnter={() => setIsHoveredNew(true)}
              onMouseLeave={() => setIsHoveredNew(false)}
              style={{
                ...style,
                borderColor: isHoveredNew ? "grey" : "darkgrey",
                color: isHoveredNew ? "grey" : "darkgrey",
              }}>
              <FiArrowUp
                fontSize="64px"
                color={isHoveredNew ? "grey" : "darkgrey"}
              />
              {t("chooseAction.existingSurvey")}
            </button>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default withUnAuthPages(SurveyEntryPoint);
