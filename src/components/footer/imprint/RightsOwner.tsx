import Grid from "../../mui/Grid";
import SubTitle from "../../SubTitle";
import Text from "../../Text";

const RightsOwner = () => {
  return (
    <Grid column width={"100%"}>
      <SubTitle title={"Rechtlich verantwortlich"} />
      <div>
        <Text
          text={
            "Hochschule für Angewandte Wissenschaften Hamburg (HAW Hamburg)"
          }
        />
        <Text text={"Berliner Tor 5"} />
        <Text text={"20099 Hamburg"} />
        <Text text={"Deutschland"} />
      </div>

      <div>
        <Text text={"Tel. +49 40 428 75- 0"} />
        <Text text={"Fax +49 40 428 75 91 49"} />
        <Text text={"info[at]haw-hamburg.de"} />
      </div>
    </Grid>
  );
};

export default RightsOwner;
