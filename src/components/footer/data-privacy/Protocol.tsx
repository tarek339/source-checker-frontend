import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";
import TextSmall from "../../fonts/TextSmall";

const Protocol = () => {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Span title={"Protokollierung"} />
      <Flex direction={"column"} gap={"10px"}>
        <TextSmall
          text={`Bei jedem Aufruf und jeder Nutzung dieser Website werden Daten und Informationen erfasst. 
          Diese Daten und Informationen werden in Logfiles der Server gespeichert. Erfasst werden können:`}
        />
        <ul>
          <li style={{ fontSize: "14px" }}>IP-Adresse</li>
          <li style={{ fontSize: "14px" }}>Datum und Uhrzeit</li>
          <li style={{ fontSize: "14px" }}>
            verwendeter Browser/verwendetes Endgerät
          </li>
          <li style={{ fontSize: "14px" }}>
            aufgerufene Seite/Name der abgerufenen Datei
          </li>
          <li style={{ fontSize: "14px" }}>übertragene Datenmenge</li>
          <li style={{ fontSize: "14px" }}>
            Meldung, ob der Zugriff/Abruf erfolgreich war.
          </li>
        </ul>
        <TextSmall
          text={
            "Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO."
          }
        />
        <TextSmall
          text={`Die vorübergehende Speicherung der IP-Adresse durch das System ist erforderlich, 
        um eine Auslieferung der Website an den Rechner des Nutzers bzw. der Nutzerin zu ermöglichen.`}
        />
        <TextSmall
          text={`Die Speicherung in Logfiles erfolgt zur Sicherstellung der Funktionsfähigkeit der Website, 
            zur Optimierung der Inhalte der Website sowie 
            zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme.`}
        />
        <TextSmall
          text={`Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung 
            nicht mehr erforderlich sind.`}
        />
        <TextSmall
          text={`Bei Speicherung der Daten in Logfiles ist dies nach spätestens 28 Tagen der Fall. 
            Eine darüberhinausgehende Speicherung ist möglich. 
            In diesem Fall werden die IP-Adressen der Nutzenden gelöscht oder verfremdet, 
            so dass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.`}
        />
      </Flex>
    </Flex>
  );
};

export default Protocol;
