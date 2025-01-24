import Text from "../../mui/Text";
import Grid from "../../mui/Grid";
import { List, ListItem } from "../..";

const Protocol = () => {
  return (
    <Grid column width={"100%"}>
      <Text text={"Protokollierung"} bold />
      <Grid column width={"100%"}>
        <Text
          text={`Bei jedem Aufruf und jeder Nutzung dieser Website werden Daten und Informationen erfasst. 
          Diese Daten und Informationen werden in Logfiles der Server gespeichert. Erfasst werden können:`}
        />
        <List>
          <ListItem children={"IP-Adresse"} />
          <ListItem children={"Datum und Uhrzeit"} />
          <ListItem children={"verwendeter Browser/verwendetes Endgerät"} />
          <ListItem children={"aufgerufene Seite/Name der abgerufenen Datei"} />
          <ListItem children={"übertragene Datenmenge"} />
          <ListItem
            children={"Meldung, ob der Zugriff/Abruf erfolgreich war."}
          />
        </List>

        <Text
          text={
            "Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO."
          }
        />
        <Text
          text={`Die vorübergehende Speicherung der IP-Adresse durch das System ist erforderlich, 
        um eine Auslieferung der Website an den Rechner des Nutzers bzw. der Nutzerin zu ermöglichen.`}
        />
        <Text
          text={`Die Speicherung in Logfiles erfolgt zur Sicherstellung der Funktionsfähigkeit der Website, 
            zur Optimierung der Inhalte der Website sowie 
            zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme.`}
        />
        <Text
          text={`Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung 
            nicht mehr erforderlich sind.`}
        />
        <Text
          text={`Bei Speicherung der Daten in Logfiles ist dies nach spätestens 28 Tagen der Fall. 
            Eine darüberhinausgehende Speicherung ist möglich. 
            In diesem Fall werden die IP-Adressen der Nutzenden gelöscht oder verfremdet, 
            so dass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.`}
        />
      </Grid>
    </Grid>
  );
};

export default Protocol;
