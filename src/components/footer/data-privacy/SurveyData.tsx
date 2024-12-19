import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";

const SurveyData = () => {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Span fontSize={18} title={"Umfragedaten"} />
      <Flex direction={"column"} gap={"10px"}>
        <Span
          fontSize={16}
          title={
            "Um das Tool nutzen zu können ist keine Registrierung erforderlich."
          }
        />
        <Span
          fontSize={16}
          title={`
        Von Nutzer:innen (bspw. Lehrkräften) angelegte Umfragen können zwecks 
        Unterrichtsvorbereitung im Vorfeld der geplanten Nutzung gespeichert und zu einem späteren Zeitpunkt gestartet werden. 
        Zu diesem Zweck wird eine zufällig generierte PIN vergeben.`}
        />
        <Span
          fontSize={16}
          title={`
        Teilnehmer:innen einer Umfrage können sich optional selbst einen Nutzernamen (Pseudonym) wählen.`}
        />
        <Span
          fontSize={16}
          title={`
        Die Speicherung des Umfragefortschritts beinhaltet (vorbehaltlich eines eventuell 
        vergebenen Nutzernamens) keine personenbezogenen Daten.`}
        />
        <Span
          fontSize={16}
          title={`
        Die Umfrage-Antworten der Nutzer:innen können von der Lehrkraft eingesehen und nach Abschluss der Umfrage 
        für alle Teilnehmer:innen angezeigt werden. Ein Personenbezug kann nicht hergestellt werden (es sei denn, 
        ein selbstgewählter Nutzername wurde mitgeteilt).`}
        />
        <Span
          fontSize={16}
          title={`
        Angelegte Umfragen werden 14 Tage nach dem Anlegen gelöscht.`}
        />
        <Span
          fontSize={16}
          title={`
        Erfolgt die Durchführung einer Umfrage nicht am Tag des Anlegens, sondern innerhalb der nachfolgenden 14 Tage, 
        so verlängert sich die Löschfrist um 14 Tage, 
        gerechnet ab dem Tag der Durchführung der Umfrage.`}
        />
      </Flex>
    </Flex>
  );
};

export default SurveyData;
