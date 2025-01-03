import axios from "axios";
import { Button, ButtonContainer, Flex, Modal, Span, SubTitle } from "../..";
import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../icons";

const DeleteSurveyModal = () => {
  const { survey, modal } = useSelectors();
  const { closeModal, discardSurvey } = useDispatches();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const navigate = useNavigate();

  const deleteSurvey = async () => {
    await axios.delete(`/survey/delete-survey/${survey?._id}`);
    sessionStorage.removeItem("token");
    discardSurvey();
    navigate("/surveys-manager/authentication");
    closeModal();
  };

  return (
    <Modal
      open={modal}
      onClose={closeModal}
      style={{
        width:
          windowWidth >= 500 && windowWidth < 935
            ? "466.77px"
            : windowWidth < 500
            ? "95%"
            : "",
      }}>
      <Flex direction={"row"} gap={"10px"} align="flex-start">
        <Alert />
        <Flex direction={"column"} gap={"5px"} justify="flex-start">
          <SubTitle
            style={{ paddingTop: "0px" }}
            title={`${
              t("common.survey") + " " + "ID:" + " " + survey?.surveyId
            } ${t("common.delete")}?`}
          />
          <Span title={t("saveSurvey.deleteText")} />
          <Span title={t("saveSurvey.deleteSection")} />
          <ButtonContainer
            style={{ paddingTop: "1em", justifyContent: "flex-end" }}>
            <Button error onClick={closeModal} title={t("button.cancel")} />
            <Button onClick={deleteSurvey} title={t("button.delete")} />
          </ButtonContainer>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default DeleteSurveyModal;
