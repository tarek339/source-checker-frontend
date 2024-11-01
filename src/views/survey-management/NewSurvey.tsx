import { useState } from "react";
import {
  ButtonContainer,
  Card,
  Divider,
  ErrorModal,
  Flex,
  FormContainer,
  FramerMotion,
  SubTitle,
  Title,
  ContentContainer,
  Button,
  SwitchButton,
} from "../../components";
import { useDispatches, useTranslations } from "../../hooks";
import axios, { AxiosError } from "axios";
import { FaCircleDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NewSurvey = () => {
  const { t } = useTranslations();
  const { dispatchLoading, closeModal, openModal, dispatchSurvey } =
    useDispatches();
  const navigate = useNavigate();

  const [anonymousResults, setAnonymousResults] = useState(false);
  const [freeUserNames, setFreeUserNames] = useState(false);
  const [status, setStatus] = useState<number | undefined | null | string>(
    null
  );
  const [statusText, setStatusText] = useState<string | undefined>("");
  const [errTitle, setErrTitle] = useState<string | undefined>("");
  const [errMsg, setErrMsg] = useState<string | undefined>();
  const [optionOne, setOptionOne] = useState<string | undefined>("");
  const [optionTwo, setOptionTwo] = useState<string | undefined>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      dispatchLoading(true);
      const res = await axios.post("/survey/create", {
        anonymousResults,
        freeUserNames,
      });
      dispatchSurvey(res.data.survey);
      dispatchLoading(false);
      navigate(`/surveys-manager/save-survey/${res.data.survey._id}`);
      closeModal();
    } catch (err: unknown) {
      dispatchLoading(false);
      openModal();
      const error = err as AxiosError;
      setStatus(
        error.response?.status === undefined ? "" : error.response?.status
      );
      setStatusText(
        error.response?.status === 404
          ? t("newSurvey.error.404.status")
          : error.response?.status === 422
          ? t("newSurvey.error.422.status")
          : error.response?.status! >= 500 && error.response?.status! <= 511
          ? t("newSurvey.error.500.status")
          : t("newSurvey.error.undefined.status")
      );
      setErrTitle(
        error.response?.status === 404
          ? t("newSurvey.error.404.errTitle")
          : error.response?.status === 422
          ? t("newSurvey.error.422.errTitle")
          : error.response?.status! >= 500 && error.response?.status! <= 511
          ? t("newSurvey.error.500.errTitle")
          : t("newSurvey.error.undefined.errTitle")
      );
      setErrMsg(
        error.response?.status === 404
          ? t("newSurvey.error.404.errMsg")
          : error.response?.status === 422
          ? t("newSurvey.error.422.errMsg")
          : error.response?.status! >= 500 && error.response?.status! <= 511
          ? t("newSurvey.error.500.errMsg")
          : t("newSurvey.error.undefined.errMsg")
      );
      setOptionOne(
        error.response?.status === 404
          ? t("newSurvey.error.404.optionOne")
          : error.response?.status === 422
          ? t("newSurvey.error.422.optionOne")
          : error.response?.status! >= 500 && error.response?.status! <= 511
          ? t("newSurvey.error.500.optionOne")
          : t("newSurvey.error.undefined.optionOne")
      );
      setOptionTwo(
        error.response?.status === 404
          ? t("newSurvey.error.404.optionTwo")
          : error.response?.status === 422
          ? t("newSurvey.error.422.optionTwo")
          : error.response?.status! >= 500 && error.response?.status! <= 511
          ? t("newSurvey.error.500.optionTwo")
          : t("newSurvey.error.undefined.optionTwo")
      );
    }
  };

  return (
    <ContentContainer>
      <Title title={t("survey.createManagement")} />
      <Card>
        <FramerMotion>
          <ErrorModal
            onSubmit={handleSubmit}
            status={status}
            statusText={statusText}
            errTitle={errTitle}
            errMsg={errMsg}
            optionOne={optionOne}
            optionTwo={optionTwo}
          />
          <Flex
            direction={"column"}
            gap={"25px"}
            style={{
              margin: "0 auto",
            }}>
            <SubTitle title={t("newSurvey.headerOne")} />
            <Divider />
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

            <SubTitle title={t("newSurvey.headerTwo")} />

            <Divider />

            <FormContainer onSubmit={handleSubmit} gap={"30px"}>
              <SwitchButton
                label={t("newSurvey.freeNames")}
                labelText={t("newSurvey.labelTextOne")}
                toggled={freeUserNames}
                ifOnText={t("newSurvey.yes")}
                ifOffText={t("newSurvey.no")}
                onClick={() => setFreeUserNames(!freeUserNames)}
              />

              <SwitchButton
                label={t("newSurvey.anonymous")}
                labelText={t("newSurvey.labelTextTwo")}
                toggled={anonymousResults}
                ifOnText={t("newSurvey.yes")}
                ifOffText={t("newSurvey.no")}
                onClick={() => setAnonymousResults(!anonymousResults)}
              />
              <Divider />

              <ButtonContainer>
                <Button
                  error
                  onClick={() => navigate(-1)}
                  title={t("button.back")}
                />
                <Button type="submit" title={t("button.create")} />
              </ButtonContainer>
            </FormContainer>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default NewSurvey;
