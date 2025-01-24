import axios from "axios";
import { Button, Grid, Modal, SubTitle, Text } from "../..";
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
      <Grid flexStart width={"100%"} nowrap alignStart>
        <Alert />
        <Grid column>
          <SubTitle
            title={`${
              t("common.survey") + " " + "ID:" + " " + survey?.surveyId
            } ${t("common.delete")}?`}
          />
          <div>
            <Text text={t("saveSurvey.deleteText")} />
            <Text text={t("saveSurvey.deleteSection")} />
          </div>
          <Grid spacing={1} width={"100%"} columnReverse>
            <Button error onClick={closeModal} title={t("button.cancel")} />
            <Button onClick={deleteSurvey} title={t("button.delete")} />
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default DeleteSurveyModal;
