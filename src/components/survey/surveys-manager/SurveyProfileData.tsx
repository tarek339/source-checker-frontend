import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useTranslations, useSelectors, useRequests } from "../../../hooks";
import { Yes, No } from "../../icons";
import SurveyProp from "./SurveyProp";
import Span from "../../fonts/Span";
import { Divider, Flex, FormContainer, SwitchButton } from "../..";
import axios from "axios";

const SurveyProfileData = () => {
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { fetchSurvey } = useRequests();
  const [copied, setCopied] = useState(false);
  const [freeUserNames, setFreeUserNames] = useState(survey?.freeUserNames);
  const [anonymousResults, setAnonymousResults] = useState(
    survey?.anonymousResults
  );

  useEffect(() => {
    setFreeUserNames(survey?.freeUserNames);
    setAnonymousResults(survey?.anonymousResults);
  }, [survey]);

  const copyToClipboard = () => {
    const id = `ID: ${survey?.surveyId}`;
    const pin = `PIN: ${survey?.surveyPin}`;
    const input = document.createElement("input");
    input.value = `${id}, ${pin}`;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const editFreeUsernames = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.put(`survey/edit-free-user-names/${survey?._id}`, {
      freeUserNames,
    });
    fetchSurvey();
  };

  const editAnonymousResults = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.put(`survey/edit-anonymous-results/${survey?._id}`, {
      anonymousResults,
    });
    fetchSurvey();
  };

  return (
    <>
      <SurveyProp
        header={t("saveSurvey.chooseName")}
        secondChild={t("newSurvey.labelTextOne")}
        child={
          <Flex direction={"row"} align="center">
            <FormContainer
              onSubmit={editFreeUsernames}
              style={{ paddingBottom: "4px" }}>
              <SwitchButton
                label={""}
                toggled={freeUserNames!}
                onClick={() => {
                  setFreeUserNames(!freeUserNames);
                }}
                ifOnText={""}
                ifOffText={""}
                type="submit"
              />
            </FormContainer>
            {survey?.freeUserNames ? <Yes /> : <No />}
          </Flex>
        }
      />
      <Divider />

      <SurveyProp
        header={t("newSurvey.anonymous")}
        secondChild={t("newSurvey.labelTextTwo")}
        child={
          <Flex direction={"row"} align="center">
            <FormContainer
              onSubmit={editAnonymousResults}
              style={{ paddingBottom: "4px" }}>
              <SwitchButton
                label={""}
                toggled={anonymousResults!}
                onClick={() => {
                  setAnonymousResults(!anonymousResults);
                }}
                ifOnText={""}
                ifOffText={""}
                type="submit"
              />
            </FormContainer>
            {survey?.anonymousResults ? <Yes /> : <No />}
          </Flex>
        }
      />
      <Divider />

      <SurveyProp
        header={t("newSurvey.surveyType")}
        child={<Span title={t("newSurvey.rating")} />}
      />

      <Divider />

      <SurveyProp
        header={t("newSurvey.resultsType")}
        child={<Span title={t("newSurvey.rating")} />}
      />
      <Divider />

      <div>
        <SurveyProp
          header={t("common.surveyID")}
          child={<Span title={survey?.surveyId ?? ""} />}
        />
        <Flex direction={"column"}>
          <Flex direction={"row"} gap={"3px"}>
            <Span
              color="#ff0000"
              fontSize={16}
              title={t("saveSurvey.secondInfo")}
            />
            <div>
              {copied ? (
                <FaCheck color="#ff0000" fontSize="20px" />
              ) : (
                <FaRegCopy
                  color="#ff0000"
                  fontSize="20px"
                  onClick={copyToClipboard}
                  style={{
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
          </Flex>
          <Span
            color="#ff0000"
            fontSize={16}
            title={t("saveSurvey.thirdInfo")}
          />
          <Span color="#ff0000" fontSize={16} title={t("saveSurvey.info")} />
        </Flex>
      </div>

      <Divider />

      <SurveyProp
        header={t("common.surveyPIN")}
        child={<Span title={survey?.surveyPin ?? ""} />}
      />
    </>
  );
};

export default SurveyProfileData;
