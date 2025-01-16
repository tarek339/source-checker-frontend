import Text from "../../mui/Text";
import Grid from "../../mui/Grid";

const SurveyData = () => {
  return (
    <Grid column width={"100%"}>
      <Text bold text={"Umfragedaten"} />
      <Grid column width={"100%"}>
        <Text
          text={
            "Um das Tool nutzen zu können ist keine Registrierung erforderlich."
          }
        />
        <Text
          text={`
        Von Nutzer:innen (bspw. Lehrkräften) angelegte Umfragen können zwecks 
        Unterrichtsvorbereitung im Vorfeld der geplanten Nutzung gespeichert und zu einem späteren Zeitpunkt gestartet werden. 
        Zu diesem Zweck wird eine zufällig generierte PIN vergeben.`}
        />
        <Text
          text={`
        Teilnehmer:innen einer Umfrage können sich optional selbst einen Nutzernamen (Pseudonym) wählen.`}
        />
        <Text
          text={`
        Die Speicherung des Umfragefortschritts beinhaltet (vorbehaltlich eines eventuell 
        vergebenen Nutzernamens) keine personenbezogenen Daten.`}
        />
        <Text
          text={`
        Die Umfrage-Antworten der Nutzer:innen können von der Lehrkraft eingesehen und nach Abschluss der Umfrage 
        für alle Teilnehmer:innen angezeigt werden. Ein Personenbezug kann nicht hergestellt werden (es sei denn, 
        ein selbstgewählter Nutzername wurde mitgeteilt).`}
        />
        <Text
          text={`
        Angelegte Umfragen werden 14 Tage nach dem Anlegen gelöscht.`}
        />
        <Text
          text={`
        Erfolgt die Durchführung einer Umfrage nicht am Tag des Anlegens, sondern innerhalb der nachfolgenden 14 Tage, 
        so verlängert sich die Löschfrist um 14 Tage, 
        gerechnet ab dem Tag der Durchführung der Umfrage.`}
        />
      </Grid>
    </Grid>
  );
};

export default SurveyData;
