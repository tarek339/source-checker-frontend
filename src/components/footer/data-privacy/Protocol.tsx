import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";

const Protocol = () => {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Span fontSize={18} title={"Protokollierung"} />
      <Flex direction={"column"} gap={"10px"}>
        <Span
          fontSize={16}
          title={`Bei jedem Aufruf und jeder Nutzung dieser Website werden Daten und Informationen erfasst. 
          Diese Daten und Informationen werden in Logfiles der Server gespeichert. Erfasst werden können:`}
        />
        <ul>
          <li style={{ fontSize: "16px" }}>IP-Adresse</li>
          <li style={{ fontSize: "16px" }}>Datum und Uhrzeit</li>
          <li style={{ fontSize: "16px" }}>
            verwendeter Browser/verwendetes Endgerät
          </li>
          <li style={{ fontSize: "16px" }}>
            aufgerufene Seite/Name der abgerufenen Datei
          </li>
          <li style={{ fontSize: "16px" }}>übertragene Datenmenge</li>
          <li style={{ fontSize: "16px" }}>
            Meldung, ob der Zugriff/Abruf erfolgreich war.
          </li>
        </ul>
        <Span
          fontSize={16}
          title={
            "Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO."
          }
        />
        <Span
          fontSize={16}
          title={`Die vorübergehende Speicherung der IP-Adresse durch das System ist erforderlich, 
        um eine Auslieferung der Website an den Rechner des Nutzers bzw. der Nutzerin zu ermöglichen.`}
        />
        <Span
          fontSize={16}
          title={`Die Speicherung in Logfiles erfolgt zur Sicherstellung der Funktionsfähigkeit der Website, 
            zur Optimierung der Inhalte der Website sowie 
            zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme.`}
        />
        <Span
          fontSize={16}
          title={`Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung 
            nicht mehr erforderlich sind.`}
        />
        <Span
          fontSize={16}
          title={`Bei Speicherung der Daten in Logfiles ist dies nach spätestens 28 Tagen der Fall. 
            Eine darüberhinausgehende Speicherung ist möglich. 
            In diesem Fall werden die IP-Adressen der Nutzenden gelöscht oder verfremdet, 
            so dass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.`}
        />
      </Flex>
    </Flex>
  );
};

export default Protocol;
