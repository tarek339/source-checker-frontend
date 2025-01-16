import Text from "../../mui/Text";
import Grid from "../../mui/Grid";

const LegalForm = () => {
  return (
    <Grid column width={"100%"}>
      <div>
        <Text text={"Rechtsform und gesetzliche Vertretung"} bold />
        <Text
          text={
            "Die HAW Hamburg ist eine Körperschaft des Öffentlichen Rechts."
          }
        />
        <Text
          text={
            "Sie wird gesetzlich vertreten durch Prof. Dr. Ute Lohrentz, Präsidentin der HAW Hamburg, Berliner Tor 5, 20099 Hamburg."
          }
        />
      </div>

      <div>
        <Text text={"Zuständige Aufsichtsbehörde"} bold />
        <Text
          text={
            "Behörde für Wissenschaft, Forschung, Gleichstellung und Bezirke der Freien und Hansestadt Hamburg, Hamburger Straße 37, D-22083 Hamburg"
          }
        />
      </div>

      <div>
        <Text text={"Umsatzsteueridentifikationsnummer"} bold />
        <Text text={"DE246571598"} />
      </div>
    </Grid>
  );
};

export default LegalForm;
