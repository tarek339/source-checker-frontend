import Grid from "../../mui/Grid";
import SubTitle from "../../SubTitle";
import Text from "../../Text";

const ProjectOwner = () => {
  return (
    <Grid spacing={1} column width={"100%"}>
      <SubTitle title={"Projektverantwortlich"} />
      <Text text={"Fiete Stegers"} />
      <Text text={"Projekt #UseTheNews / HAW Hamburg"} />
      <Text text={"Department Information und Medienkommunikation"} />
      <Text text={"fiete.stegers[at]haw-hamburg.de"} />
    </Grid>
  );
};

export default ProjectOwner;
