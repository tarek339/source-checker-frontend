import Grid from "../../mui/Grid";
import { Link, Text, Title } from "../..";

const PrivacyInfo = () => {
  return (
    <Grid column width={"100%"}>
      <Title title={"Datenschutzhinweise"} />

      <Text text="Für Quellenchecker" />
      <Link href="https://quellenchecker.hoou.tech" />

      <Text
        text={
          "Ein Projekt von #UseTheNews / HAW Hamburg und der Hamburg Open Online University (HOOU@HAW)."
        }
      />
    </Grid>
  );
};

export default PrivacyInfo;
