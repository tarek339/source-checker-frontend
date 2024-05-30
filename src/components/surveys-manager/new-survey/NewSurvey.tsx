import { useState } from "react";
import {
  BackButton,
  DividerHorizontal,
  Flex,
  FormButton,
  SubHeader,
  ToggleButton,
} from "../..";
import {
  useDispatches,
  useLocaleStorage,
  useTranslations,
} from "../../../hooks";
import axios from "axios";
import { FaCircleDot } from "react-icons/fa6";
import ButtonContainer from "../../parents/containers/ButtonContainer";
import FormContainer from "../../parents/form/FormContainer";
import FramerMotion from "../../parents/containers/FramerMotion";

const NewSurvey = () => {
  const { t } = useTranslations();
  const { dispatchLoading, closeModal } = useDispatches();
  const { createSurvey, setPage } = useLocaleStorage();

  const [anonymousResults, setAnonymousResults] = useState(false);
  const [freeUserNames, setFreeUserNames] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      dispatchLoading(true);
      const res = await axios.post("/survey/create", {
        anonymousResults,
        freeUserNames,
      });
      createSurvey(res.data.survey);
      dispatchLoading(false);
      setPage(+3);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FramerMotion>
      <Flex
        direction={"column"}
        gap={"25px"}
        style={{
          margin: "0 auto",
        }}>
        <SubHeader title={t("newSurvey.headerOne")} />

        <DividerHorizontal />
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
            gap={"0px"}
            justify="flex-start"
            align="flex-start"
            style={{
              paddingTop: "8px",
            }}>
            <FaCircleDot />
          </Flex>
          <div>
            <h4 style={{ fontSize: "22px", color: "#2835c3" }}>Rating</h4>
            <p style={{ color: "#2835c3" }}>{t("newSurvey.ratingText")}</p>
          </div>
        </Flex>

        <SubHeader title={t("newSurvey.headerTwo")} />

        <DividerHorizontal />

        <FormContainer onSubmit={handleSubmit} gap={"30px"}>
          <ToggleButton
            label={t("newSurvey.freeNames")}
            labelText={t("newSurvey.labelTextOne")}
            isOn={freeUserNames}
            handleToggle={() => setFreeUserNames(!freeUserNames)}
            ifOnText={t("newSurvey.yes")}
            ifOffText={t("newSurvey.no")}
            htmlFor={"user-names"}
          />
          <ToggleButton
            label={t("newSurvey.anonymous")}
            labelText={t("newSurvey.labelTextTwo")}
            isOn={anonymousResults}
            handleToggle={() => setAnonymousResults(!anonymousResults)}
            ifOnText={t("newSurvey.yes")}
            ifOffText={t("newSurvey.no")}
            htmlFor={"anonymous"}
          />
          <DividerHorizontal />

          <ButtonContainer>
            <BackButton page={0} />
            <FormButton title={t("common.create")} />
          </ButtonContainer>
        </FormContainer>
      </Flex>
    </FramerMotion>
  );
};

export default NewSurvey;
