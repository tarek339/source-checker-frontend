import { IoAddOutline } from "react-icons/io5";
import { FiArrowUp } from "react-icons/fi";
import { useState } from "react";
import { useBreakPoints, useDispatches, useTranslations } from "../../hooks";
import { useNavigate } from "react-router-dom";
import {
  FramerMotion,
  SubTitle,
  Title,
  ErrorModal,
  Grid,
  Card,
  ActionButton,
} from "../../components";
import axios from "axios";
import withUnAuthPages from "../../hoc/withUnAuthPages";
import { colors } from "../../assets/theme/colors";

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
      const res = await axios.post("/survey/create-new-survey", {
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
    <FramerMotion>
      <ErrorModal onClick={handleSubmit} />

      <Grid column gutters>
        <Title title={t("survey.createManagement")} />
        <Card>
          <Grid column>
            <SubTitle title={t("chooseAction.header")} />
            <div
              style={{
                display: "flex",
                flexDirection: windowWidth < 600 ? "column" : "row",
                justifyContent: "space-between",
                gap: "1rem",
              }}>
              <ActionButton
                onClick={handleSubmit}
                onMouseEnter={() => setIsHoveredAdd(true)}
                onMouseLeave={() => setIsHoveredAdd(false)}
                borderColor={
                  isHoveredAdd
                    ? colors.typography.hover
                    : colors.typography.secondary
                }
                color={
                  isHoveredAdd
                    ? colors.typography.hover
                    : colors.typography.secondary
                }
                icon={
                  <IoAddOutline
                    fontSize="64px"
                    color={
                      isHoveredAdd
                        ? colors.typography.hover
                        : colors.typography.secondary
                    }
                  />
                }
                title={t("chooseAction.newSurvey")}
              />
              <ActionButton
                onClick={() => {
                  navigate("/surveys-manager/log-in");
                }}
                onMouseEnter={() => setIsHoveredNew(true)}
                onMouseLeave={() => setIsHoveredNew(false)}
                borderColor={
                  isHoveredNew
                    ? colors.typography.hover
                    : colors.typography.secondary
                }
                color={
                  isHoveredNew
                    ? colors.typography.hover
                    : colors.typography.secondary
                }
                icon={
                  <FiArrowUp
                    fontSize="64px"
                    color={
                      isHoveredNew
                        ? colors.typography.hover
                        : colors.typography.secondary
                    }
                  />
                }
                title={t("chooseAction.existingSurvey")}
              />
            </div>
          </Grid>
        </Card>
      </Grid>
    </FramerMotion>
  );
};

export default withUnAuthPages(SurveyEntryPoint);
