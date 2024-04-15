import { useState } from "react";
import {
  BackButton,
  FormButton,
  InputErrorContainer,
  Select,
  useCompArray,
} from "..";
import { useTranslations } from "../../hooks";
import useDispatches from "../../hooks/useDispatches";

const NewSurvey = () => {
  const { t } = useTranslations();
  const { handlePage } = useDispatches();
  const { options } = useCompArray();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectErrorMessage, setSelectErrorMessage] =
    useState<JSX.Element | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !selectedOption ? setSelectErrorMessage(<InputErrorContainer />) : null;
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
          selectedItem={!selectedOption ? t("input.select") : selectedOption}
          inputErrorStyle={selectErrorMessage}
          option={options
            .filter((opt) => opt.comp !== selectedOption)
            .map((opt, i) => {
              return (
                <div
                  onClick={() => {
                    setSelectedOption(opt.comp);
                    setSelectErrorMessage(null);
                  }}
                  className="options-style"
                  key={i}>
                  <span className="opt-span">{opt.comp}</span>
                </div>
              );
            })}
        />
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
