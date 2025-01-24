import { FramerMotion, Grid } from "../../components";
import {
  ImprintInformation,
  RightsOwner,
  LegalForm,
  ProjectOwner,
  TechnicalRealization,
  Contact,
} from "../../components/footer/imprint";

const Imprint = () => {
  return (
    <FramerMotion>
      <Grid column gutters spacing={4}>
        <ImprintInformation />
        <RightsOwner />
        <LegalForm />
        <ProjectOwner />
        <TechnicalRealization />
        <Contact />
      </Grid>
    </FramerMotion>
  );
};

export default Imprint;
