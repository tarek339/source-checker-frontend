import { Link } from "../..";
import Grid from "../../mui/Grid";
import Text from "../../mui/Text";

const ContactData = () => {
  return (
    <Grid column width={"100%"}>
      <Grid column width={"100%"}>
        <Text bold text={"Kontaktdaten des Verantwortlichen"} />

        <Text
          text={`Verantwortlich im Sinne der Datenschutzgrundverordnung und anderer nationaler 
          Datenschutzgesetze der EU-Mitgliedstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist die:`}
        />

        <div>
          <Text text={"HOOU GmbH"} />
          <Text
            text={"Vertreten durch den Geschäftsführer Prof. Dr. Sönke Knutzen"}
          />
          <Text text={"Am Irrgarten 3-6"} />
          <Text text={"D-21073 Hamburg"} />
        </div>
      </Grid>

      <Grid column width={"100%"}>
        <Text bold text={"Kontaktdaten der Datenschutzbeauftragten:"} />
        <div>
          <Text text={"Datenschutzbeauftragte des MMKH"} />
          <Text
            text={"Vertreten durch den Geschäftsführer Prof. Dr. Sönke Knutzen"}
          />
          <Text text={"Saarlandstraße 30"} />
          <Text text={"D-22303 Hamburg"} />
        </div>
      </Grid>

      <Text text={"E-Mail: "} />
      <Link href={"mailto:dsb@mmkh.de"} mail />
    </Grid>
  );
};

export default ContactData;
