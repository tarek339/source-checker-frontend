import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";
import TextSmall from "../../fonts/TextSmall";

const SurveyData = () => {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Span title={"Umfragedaten"} />
      <Flex direction={"column"} gap={"10px"}>
        <TextSmall
          text={
            "Um das Tool nutzen zu können ist keine Registrierung erforderlich."
          }
        />
        <TextSmall
          text={`
        Von Nutzer:innen (bspw. Lehrkräften) angelegte Umfragen können zwecks 
        Unterrichtsvorbereitung im Vorfeld der geplanten Nutzung gespeichert und zu einem späteren Zeitpunkt gestartet werden. 
        Zu diesem Zweck wird eine zufällig generierte PIN vergeben.`}
        />
        <TextSmall
          text={`
        Teilnehmer:innen einer Umfrage können sich optional selbst einen Nutzernamen (Pseudonym) wählen.`}
        />
        <TextSmall
          text={`
        Die Speicherung des Umfragefortschritts beinhaltet (vorbehaltlich eines eventuell 
        vergebenen Nutzernamens) keine personenbezogenen Daten.`}
        />
        <TextSmall
          text={`
        Die Umfrage-Antworten der Nutzer:innen können von der Lehrkraft eingesehen und nach Abschluss der Umfrage 
        für alle Teilnehmer:innen angezeigt werden. Ein Personenbezug kann nicht hergestellt werden (es sei denn, 
        ein selbstgewählter Nutzername wurde mitgeteilt).`}
        />
        <TextSmall
          text={`
        Angelegte Umfragen werden 14 Tage nach dem Anlegen gelöscht.`}
        />
        <TextSmall
          text={`
        Erfolgt die Durchführung einer Umfrage nicht am Tag des Anlegens, sondern innerhalb der nachfolgenden 14 Tage, 
        so verlängert sich die Löschfrist um 14 Tage, 
        gerechnet ab dem Tag der Durchführung der Umfrage.`}
        />
      </Flex>
    </Flex>
  );
};

export default SurveyData;
