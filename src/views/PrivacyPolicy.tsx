import { useEffect } from "react";
import {
  ContentContainer,
  Flex,
  FramerMotion,
  SubTitle,
  Title,
} from "../components";
import { useDispatches } from "../hooks";

const PrivacyPolicy = () => {
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(false);
  }, []);

  return (
    <FramerMotion>
      <ContentContainer>
        <Title title={"Datenschutz"} />
        <Flex style={{ paddingLeft: "20px" }} direction={"column"} gap={"30px"}>
          <section>
            <Flex direction={"column"} gap={"10px"}>
              <SubTitle title={"Cookies"} />
              <p>
                Diese Seite{" "}
                <span style={{ color: "#fb4000" }}>setzt keine</span> Cookies
                ein.
              </p>
            </Flex>
          </section>

          <section>
            <Flex direction={"column"} gap={"10px"}>
              <SubTitle title={"Umfragedaten"} />
              <p>
                Von Nutzern angelegte Umfragen können gespeichert und später
                gestartet werden. Dazu wird eine zufällige PIN vergeben. Eine
                Registrierung ist nicht erforderlich.
              </p>
              <p>
                Teilnehmer der Umfrage können optional selbst einen Nutzernamen
                (Pseudonym) wählen. Eine Registrierung ist nicht erforderlich.
                Auf die Vergabe von Nutzernamen kann auch verzichtet werden.
              </p>
              <p>
                Die Speicherung des Umfragefortschritts enthält mit Ausnahme
                eines eventuellen Nutzernamens keine persönlichen Daten.
              </p>
              <p>
                Die Umfrage-Antworten der Nutzer können von der Lehrkraft
                eingesehen und nach Abschluss der Umfrage für alle Teilnehmer
                angezeigt werden.
              </p>
              <p>
                Angelegte Umfragen werden X Tage nach dem Anlegen gelöscht.
                Abgeschlossene Umfragen mit Ergebnissen und Nutzernamen werden
                nach <span style={{ color: "#fb4000" }}>30 Tagen </span>{" "}
                gelöscht.
              </p>
            </Flex>
          </section>

          <section>
            <Flex direction={"column"} gap={"10px"}>
              <SubTitle title={"PROTOKOLLDATEN"} />
              <p>
                Bei jedem Aufruf und Nutzung dieser Website werden Daten und
                Informationen erfasst.
              </p>
              <p>
                Diese Daten und Informationen werden in Logfiles der Server
                gespeichert. Erfasst werden können:
              </p>
              <ul>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit</li>
                <li>Browserinformationen</li>
                <li>Referrer</li>
                <li>URI der abgerufenen Information</li>
              </ul>
              <p>
                Rechtsgrundlage für die vorübergehende Speicherung der Daten und
                der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p>
                Die vorübergehende Speicherung der IP-Adresse durch das System
                ist erforderlich, um eine Auslieferung der Webseite an den
                Rechner der Nutzenden zu ermöglichen. Hierfür muss die
                IP-Adresse der Nutzenden für die Dauer der Sitzung gespeichert
                bleiben.
              </p>
              <p>
                Die Speicherung in Logfiles erfolgt zur Sicherstellung der
                Funktionsfähigkeit der Webseite, zur Optimierung der Inhalte der
                Webseite sowie zur Sicherstellung der Sicherheit unserer
                informationstechnischen Systeme.
              </p>
              <p>
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle
                der Erfassung der Daten zur Bereitstellung der Website ist dies
                der Fall, wenn die jeweilige Sitzung beendet ist.
              </p>
              <p>
                Im Fall der Speicherung der Daten in Logfiles ist dies nach
                spätestens sieben Tagen der Fall. Eine darüberhinausgehende
                Speicherung ist möglich. In diesem Fall werden die IP-Adressen
                der Nutzenden gelöscht oder verfremdet, sodass eine Zuordnung
                des aufrufenden Clients nicht mehr möglich ist.
              </p>
            </Flex>
          </section>

          <section>
            <Flex direction={"column"} gap={"10px"}>
              <SubTitle
                title={
                  "Name und Kontaktdaten des für die Verarbeitung Verantwortlichen sowie des Datenschutzbeauftragten"
                }
              />
              <p>
                Verantwortlicher im Sinne der EU-Datenschutz-Grundverordnung
                (DSGVO) und anderer nationaler Datenschutzgesetze sowie
                sonstiger datenschutzrechtlicher Bestimmungen ist der: 
              </p>
              <p style={{ color: "#fb4000" }}>HOOU:</p>
              <p>Datenschutzbeauftragter</p>
              <p style={{ color: "#fb4000" }}>HOOU:</p>
              <p style={{ fontWeight: 600 }}>Rechte der betroffen Person</p>
              <p>Sie haben folgende Rechte:</p>
              <ul>
                <li>
                  Recht auf Auskunft über die bei uns zu ihrer Person
                  gespeicherten Daten (Art. 15 DSGVO);
                </li>
                <li>
                  Recht auf Berichtigung unrichtiger oder unvollständiger
                  personenbezogener Daten (Art. 16 DSGVO);
                </li>
                <li>
                  Recht auf Löschung gespeicherter personenbezogener Daten,
                  soweit nicht die Verarbeitung zur Ausübung des Rechts auf
                  freie Meinungsäußerung und Information, zur Erfüllung einer
                  rechtlichen Verpflichtung, aus Gründen des öffentlichen
                  Interesses oder zur Geltendmachung, Ausübung oder Verteidigung
                  von Rechtsansprüchen erforderlich ist (Art. 17 DSGVO);
                </li>
                <li>
                  Recht auf Einschränkung der Verarbeitung personenbezogener
                  Daten (Art. 18 DSGVO);
                </li>
                <li>
                  Recht auf Widerspruch gegen eine Verarbeitung, die unserem
                  berechtigten Interesse, einem öffentlichen Interesse oder
                  einem Profiling dient, es sei denn, wir können zwingende
                  schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
                  Interessen, Rechte und Freiheiten überwiegen, oder die
                  Verarbeitung dient der Geltendmachung, Ausübung oder
                  Verteidigung von Rechtsansprüchen (Art. 21 DSGVO);
                </li>
                <li>
                  erteilte Einwilligungen zur Erhebung, Verarbeitung und Nutzung
                  Ihrer personenbezogenen Daten jederzeit mit Wirkung für die
                  Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO). Dies hat zur
                  Folge, dass wir die Datenverarbeitung, die auf dieser
                  Einwilligung beruhte, für die Zukunft nicht mehr fortführen
                  dürfen;
                </li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO);</li>
                <li>
                  Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn Sie der
                  Ansicht sind, dass die Verarbeitung der Sie betreffenden
                  personenbezogenen Daten gegen die DSGVO verstößt (Art. 77
                  DSGVO).
                </li>
              </ul>
              <p>
                Wenn Sie von Ihren Betroffenenrechten Gebrauch machen wollen,
                kontaktieren Sie uns bitte unter{" "}
                <a href="mailto:info@hoou.de">info@hoou.de</a>
              </p>
            </Flex>
          </section>
        </Flex>
      </ContentContainer>
    </FramerMotion>
  );
};

export default PrivacyPolicy;
