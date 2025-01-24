import Grid from "../../mui/Grid";
import Title from "../../mui/Title";
import Text from "../../mui/Text";

const ImprintInformation = () => {
  return (
    <Grid column width={"100%"}>
      <Title title={"Impressum"} />
      <Text
        text={
          "Die Website und OER Quellenchecker ist ein Projekt von #UseTheNews / HAW Hamburg und der Hamburg Open Online University (HOOU@HAW)."
        }
      />
    </Grid>
  );
};

export default ImprintInformation;
