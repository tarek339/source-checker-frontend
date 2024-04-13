import { BackButton, FormButton, Select } from "..";
import { useTranslations } from "../../hooks";
import useDispatches from "../../hooks/useDispatches";

const NewSurvey = () => {
  const { t } = useTranslations();
  const { handlePage } = useDispatches();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          label={""}
          name={""}
          htmlFor={""}
          error={null}
          option={undefined}
        />
        <Select
          label={""}
          name={""}
          htmlFor={""}
          error={null}
          option={undefined}
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
