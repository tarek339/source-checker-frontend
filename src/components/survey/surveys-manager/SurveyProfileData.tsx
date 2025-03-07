import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useTranslations, useSelectors, useRequests } from "../../../hooks";
import { Yes, No } from "../../icons";
import SurveyProp from "./SurveyProp";
import { Form, Grid, SwitchButton, Divider, Text } from "../..";
import axios from "axios";
import { colors } from "../../../assets/theme/colors";

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
    <Grid column width={"100%"} spacing={3}>
      <SurveyProp
        header={t("saveSurvey.chooseName")}
        secondChild={t("newSurvey.labelTextOne")}
        child={
          <Grid spacing={1} nowrap alignCenter>
            <Form onSubmit={editFreeUsernames}>
              <SwitchButton
                toggled={freeUserNames!}
                onClick={() => {
                  setFreeUserNames(!freeUserNames);
                }}
                type="submit"
              />
            </Form>
            <div>{survey?.freeUserNames ? <Yes /> : <No />}</div>
          </Grid>
        }
      />
      <Divider />

      <SurveyProp
        header={t("newSurvey.anonymous")}
        secondChild={t("newSurvey.labelTextTwo")}
        child={
          <Grid spacing={1} nowrap alignCenter>
            <Form onSubmit={editAnonymousResults}>
              <SwitchButton
                toggled={anonymousResults!}
                onClick={() => {
                  setAnonymousResults(!anonymousResults);
                }}
                type="submit"
              />
            </Form>
            <div>{survey?.anonymousResults ? <Yes /> : <No />}</div>
          </Grid>
        }
      />
      <Divider />

      <div>
        <SurveyProp
          header={t("common.surveyID")}
          child={<Text text={survey?.surveyId ?? ""} />}
        />
        <Grid column spacing={1}>
          <div>
            <Grid spacing={1} nowrap>
              <Text
                text={t("saveSurvey.secondInfo")}
                color={colors.desctructed.main}
                small
              />
              <div>
                {copied ? (
                  <FaCheck color={colors.desctructed.main} fontSize="20px" />
                ) : (
                  <FaRegCopy
                    color={colors.desctructed.main}
                    fontSize="20px"
                    onClick={copyToClipboard}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>
            </Grid>

            <Text
              text={t("saveSurvey.thirdInfo")}
              color={colors.desctructed.main}
              small
            />
            <Text
              text={t("saveSurvey.info")}
              color={colors.desctructed.main}
              small
            />
          </div>
        </Grid>
      </div>

      <Divider />

      <SurveyProp
        header={t("common.surveyPIN")}
        child={<Text text={survey?.surveyPin ?? ""} />}
      />
    </Grid>
  );
};

export default SurveyProfileData;
