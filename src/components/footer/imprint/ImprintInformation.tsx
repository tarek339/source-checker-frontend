import Grid from "../../mui/Grid";
import Text from "../../Text";
import Title from "../../Title";

const ImprintInformation = () => {
  return (
    <Grid column width={"100%"}>
      <Title title={"Impressum"} />
      <Text
        text={
          "Die Website und OER Quellenchecker ist ein Projekt von #UseTheNews / HOOU@HAW Hamburg und der Hamburg Open Online University (HOOU@HAW)."
        }
      />
    </Grid>
  );
};

export default ImprintInformation;
