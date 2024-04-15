import { useState } from "react";
import {
  BackButton,
  FormButton,
  Input,
  InputErrorContainer,
  Select,
  ToggleButton,
  useCompArray,
} from "..";
import { useTranslations } from "../../hooks";
import useDispatches from "../../hooks/useDispatches";

const NewSurvey = () => {
  const { t } = useTranslations();
  const { handlePage } = useDispatches();
  const { surveysOptions, resultsOptions } = useCompArray();

  const [surveysSelectedOptions, setSurveysSelectedOptions] = useState("");
  const [resultsSelectedOptions, setResultsSelectedOptions] = useState("");
  const [toggleOn, setToggleOn] = useState(false);
  const [userName, setUserName] = useState("");

  const [selectErrorMessage, setSelectErrorMessage] =
    useState<JSX.Element | null>(null);
  const [inputError, setInputError] = useState<JSX.Element | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !surveysSelectedOptions
      ? setSelectErrorMessage(<InputErrorContainer />)
      : null;
    !userName ? setInputError(<InputErrorContainer />) : null;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        margin: "0 auto",
        maxWidth: "300px",
      }}>
      <h3>{t("newSurvey.header")} </h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}>
        <Select
          label={t("input.surveyType")}
          error={selectErrorMessage}
          selectedItem={
            !surveysSelectedOptions ? t("input.select") : surveysSelectedOptions
          }
          inputErrorStyle={selectErrorMessage}
          option={surveysOptions
            .filter((opt) => opt.option !== surveysSelectedOptions)
            .map((opt, i) => {
              return (
                <div
                  onClick={() => {
                    setSurveysSelectedOptions(opt.option);
                    setSelectErrorMessage(null);
                  }}
                  className="options-style"
                  key={i}>
                  <span className="opt-span">{opt.option}</span>
                </div>
              );
            })}
        />
        <Select
          label={t("newSurvey.resultsType")}
          error={selectErrorMessage}
          selectedItem={
            !resultsSelectedOptions ? t("input.select") : resultsSelectedOptions
          }
          inputErrorStyle={selectErrorMessage}
          option={resultsOptions
            .filter((opt) => opt.option !== resultsSelectedOptions)
            .map((opt, i) => {
              return (
                <div
                  onClick={() => {
                    setResultsSelectedOptions(opt.option);
                    setSelectErrorMessage(null);
                  }}
                  className="options-style"
                  key={i}>
                  <span className="opt-span">{opt.option}</span>
                </div>
              );
            })}
        />
        <ToggleButton
          label={t("newSurvey.anonymous")}
          isOn={toggleOn}
          handleToggle={() => setToggleOn(!toggleOn)}
          ifOnText={t("newSurvey.yes")}
          ifOffText={t("newSurvey.no")}
        />
        {!toggleOn && (
          <Input
            label={t("newSurvey.userName")}
            name={"userName"}
            htmlFor={"userName"}
            error={inputError}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            inputErrorStyle={inputError}
          />
        )}

        <FormButton />
        <div
          style={{
            width: "100%",
            borderBottom: "1px solid lightgrey",
          }}></div>
        <BackButton onClick={() => handlePage(0)} />
      </form>
    </div>
  );
};

export default NewSurvey;
