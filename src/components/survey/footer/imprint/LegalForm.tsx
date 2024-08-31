import Flex from "../../../containers/Flex";
import Span from "../../../fonts/Span";

const LegalForm = () => {
  return (
    <Flex direction={"column"} gap={"10px"}>
      <Span title={"Rechtsform und gesetzliche Vertretung"} fontSize={18} />
      <Span
        title={"Die HAW Hamburg ist eine Körperschaft des Öffentlichen Rechts."}
      />
      <Span
        title={
          "Sie wird gesetzlich vertreten durch Prof. Dr. Ute Lohrentz, Präsidentin der HAW Hamburg, Berliner Tor 5, 20099 Hamburg."
        }
      />
      <Span title={"Zuständige Aufsichtsbehörde"} fontSize={18} />
      <Span
        title={
          "Behörde für Wissenschaft, Forschung, Gleichstellung und Bezirke der Freien und Hansestadt Hamburg, Hamburger Straße 37, D-22083 Hamburg"
        }
      />
      <Span title={"Umsatzsteueridentifikationsnummer"} fontSize={18} />
      <Span title={"DE 246571598"} />
    </Flex>
  );
};

export default LegalForm;
