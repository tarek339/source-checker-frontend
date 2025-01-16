import { FramerMotion, Title, Grid } from "../../components";
import {
  GeneralInfo,
  Mit,
  Apache,
  Ccby,
  Isc,
  Dependencies,
  DevDependencies,
} from "../../components/footer/license-notes";

const LicenseNotes = () => {
  return (
    <FramerMotion>
      <Grid spacing={4} column gutters>
        <Title title={"Lizenzhinweise"} />
        <Title
          title={
            "License Information for this website and used icons on this website"
          }
        />
        <GeneralInfo />
        <Mit />
        <Apache />
        <Ccby />
        <Isc />
        <Dependencies />
        <DevDependencies />
      </Grid>
    </FramerMotion>
  );
};

export default LicenseNotes;
