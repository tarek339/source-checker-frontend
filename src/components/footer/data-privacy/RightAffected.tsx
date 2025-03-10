import Grid from "../../mui/Grid";
import { Link, List, ListItem, Text } from "../..";

const RightAffected = () => {
  return (
    <Grid column width={"100%"}>
      <Text bold text={"Betroffenenrechte"} />
      <Grid spacing={1} column width={"100%"}>
        <List>
          <div style={{ marginBottom: "8px" }}>
            <Text
              text={
                "Nutzerinnen und Nutzer unserer Webseite haben folgende Rechte:"
              }
            />
          </div>
          <ListItem>
            Recht auf Auskunft über die bei uns zu ihrer Person gespeicherten
            Daten (Art. 15 DSGVO),
          </ListItem>
          <ListItem>
            Recht auf Berichtigung unrichtiger oder unvollständiger
            personenbezogener Daten (Art. 16 DSGVO),
          </ListItem>
          <ListItem>
            Recht auf Löschung gespeicherter personenbezogener Daten, soweit
            nicht die Verarbeitung zur Ausübung des Rechts auf freie
            Meinungsäußerung und Information, zur Erfüllung einer rechtlichen
            Verpflichtung, aus Gründen des öffentlichen Interesses oder zur
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            erforderlich ist (Art. 17 DSGVO),
          </ListItem>
          <ListItem>
            Recht auf Einschränkung der Verarbeitung personenbezogener Daten
            (Art. 18 DSGVO),
          </ListItem>
          <ListItem>
            Recht auf Widerspruch gegen eine Verarbeitung, die unserem
            berechtigten Interesse, einem öffentlichen Interesse oder einem
            Profiling dient, es sei denn, wir können zwingende schutzwürdige
            Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte
            und Freiheiten überwiegen, oder die Verarbeitung dient der
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            (Art. 21 DSGVO),
          </ListItem>
          <ListItem>
            Recht, erteilte Einwilligungen zur Erhebung, Verarbeitung und
            Nutzung Ihrer personenbezogenen Daten jederzeit mit Wirkung für die
            Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO). Dies hat zur Folge,
            dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte,
            für die Zukunft nicht mehr fortführen dürfen.
          </ListItem>
          <ListItem>Recht auf Datenübertragbarkeit (Art. 20 DSGVO),</ListItem>
          <ListItem>
            Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn Sie der
            Ansicht sind, dass die Verarbeitung der Sie betreffenden
            personenbezogenen Daten gegen die DSGVO verstößt (Art. 77 DSGVO).
          </ListItem>
        </List>

        <Text
          text={
            "Wenn Sie von Ihren Betroffenenrechten Gebrauch machen möchten, kontaktieren Sie uns bitte unter:"
          }
        />
        <Link href={"info@hoou.de"} mail />
      </Grid>
    </Grid>
  );
};

export default RightAffected;
