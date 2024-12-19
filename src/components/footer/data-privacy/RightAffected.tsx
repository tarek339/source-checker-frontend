import Flex from "../../containers/Flex";
import Span from "../../fonts/Span";

const RightAffected = () => {
  return (
    <Flex direction={"column"} gap={"15px"}>
      <Span fontSize={18} title={"Betroffenenrechte"} />
      <Flex direction={"column"} gap={"10px"}>
        <Span
          fontSize={16}
          title={
            "Nutzerinnen und Nutzer unserer Webseite haben folgende Rechte:"
          }
        />
        <ul>
          <li style={{ fontSize: "16px" }}>
            Recht auf Auskunft über die bei uns zu ihrer Person gespeicherten
            Daten (Art. 15 DSGVO),
          </li>
          <li style={{ fontSize: "16px" }}>
            Recht auf Berichtigung unrichtiger oder unvollständiger
            personenbezogener Daten (Art. 16 DSGVO),
          </li>
          <li style={{ fontSize: "16px" }}>
            Recht auf Löschung gespeicherter personenbezogener Daten, soweit
            nicht die Verarbeitung zur Ausübung des Rechts auf freie
            Meinungsäußerung und Information, zur Erfüllung einer rechtlichen
            Verpflichtung, aus Gründen des öffentlichen Interesses oder zur
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            erforderlich ist (Art. 17 DSGVO),
          </li>
          <li style={{ fontSize: "16px" }}>
            Recht auf Einschränkung der Verarbeitung personenbezogener Daten
            (Art. 18 DSGVO),
          </li>
          <li style={{ fontSize: "16px" }}>
            Recht auf Widerspruch gegen eine Verarbeitung, die unserem
            berechtigten Interesse, einem öffentlichen Interesse oder einem
            Profiling dient, es sei denn, wir können zwingende schutzwürdige
            Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte
            und Freiheiten überwiegen, oder die Verarbeitung dient der
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            (Art. 21 DSGVO),
          </li>
          <li style={{ fontSize: "16px" }}>
            Recht, erteilte Einwilligungen zur Erhebung, Verarbeitung und
            Nutzung Ihrer personenbezogenen Daten jederzeit mit Wirkung für die
            Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO). Dies hat zur Folge,
            dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte,
            für die Zukunft nicht mehr fortführen dürfen.
          </li>
          <li style={{ fontSize: "16px" }}>
            Recht auf Datenübertragbarkeit (Art. 20 DSGVO),
          </li>
          <li style={{ fontSize: "16px" }}>
            Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn Sie der
            Ansicht sind, dass die Verarbeitung der Sie betreffenden
            personenbezogenen Daten gegen die DSGVO verstößt (Art. 77 DSGVO).
          </li>
        </ul>

        <span style={{ fontSize: "16px" }}>
          Wenn Sie von Ihren Betroffenenrechten Gebrauch machen möchten,
          kontaktieren Sie uns bitte unter:{" "}
          <span style={{ fontSize: "16px" }}>
            <a href="mailto:info@hoou.de">info@hoou.de</a>
          </span>
          .
        </span>
      </Flex>
    </Flex>
  );
};

export default RightAffected;
