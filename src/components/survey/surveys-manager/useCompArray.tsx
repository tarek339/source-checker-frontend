import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useTranslations, useSelectors, useDispatches } from "../../../hooks";
import { Yes, No } from "../../icons";
import SurveyProp from "./SurveyProp";
import Span from "../../fonts/Span";
import { Flex, FormContainer, SwitchButton } from "../..";
import axios from "axios";

const useCompArray = () => {
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { dispatchSurvey } = useDispatches();

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
    let id = `ID: ${survey?.surveyId}`;
    let pin = `PIN: ${survey?.surveyPin}`;
    let input = document.createElement("input");
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
    const res = await axios.put(`survey/edit-freeUserNames/${survey?._id}`, {
      freeUserNames,
    });
    dispatchSurvey(res.data.survey);
  };

  const editAnonymousResults = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.put(`survey/edit-anonymousResults/${survey?._id}`, {
      anonymousResults,
    });
    dispatchSurvey(res.data.survey);
  };

  const surveyArray = [
    {
      comp: (
        <SurveyProp
          header={t("saveSurvey.chooseName")}
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
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("newSurvey.anonymous")}
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
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("newSurvey.surveyType")}
          child={<Span fontWeight={600} title={t("newSurvey.rating")} />}
        />
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("newSurvey.resultsType")}
          child={<Span fontWeight={600} title={t("newSurvey.rating")} />}
        />
      ),
    },
    {
      comp: (
        <>
          <SurveyProp
            header={t("common.surveyID")}
            child={<Span fontWeight={600} title={survey?.surveyId!} />}
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
        </>
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("common.surveyPIN")}
          child={<Span fontWeight={600} title={survey?.surveyPin!} />}
        />
      ),
    },
  ];

  return {
    surveyArray,
  };
};

export default useCompArray;
