import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useTranslations, useSelectors } from "../../../hooks";
import { Yes, No } from "../../icons";
import SurveyProp from "./SurveyProp";
import Span from "../../fonts/Span";
const useCompArray = () => {
  const { t } = useTranslations();
  const { survey } = useSelectors();

  const [copied, setCopied] = useState(false);

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

  const surveyArray = [
    {
      comp: (
        <SurveyProp
          header={t("newSurvey.anonymous")}
          child={
            <div style={{ display: "flex", alignItems: "center" }}>
              {survey?.anonymousResults ? <Yes /> : <No />}
            </div>
          }
        />
      ),
    },
    {
      comp: (
        <SurveyProp
          header={t("saveSurvey.chooseName")}
          child={
            <div style={{ display: "flex", alignItems: "center" }}>
              {survey?.freeUserNames ? <Yes /> : <No />}
            </div>
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
            secondChild={
              copied ? (
                <FaCheck style={{ fontSize: "20px" }} />
              ) : (
                <FaRegCopy
                  onClick={copyToClipboard}
                  style={{
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
              )
            }
            child={<Span fontWeight={600} title={survey?.surveyId!} />}
          />
          <div>
            <p style={{ color: "#ff0000", fontSize: "16px" }}>
              {t("saveSurvey.info")}
            </p>
            <p style={{ color: "#ff0000", fontSize: "16px" }}>
              {t("saveSurvey.secondInfo")}
            </p>
          </div>
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
