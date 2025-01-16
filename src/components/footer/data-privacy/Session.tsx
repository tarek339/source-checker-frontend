import Grid from "../../mui/Grid";
import Text from "../../mui/Text";

const Session = () => {
  return (
    <Grid column width={"100%"}>
      <Text bold text={"Json Web Tokens (JWT) / Session Storage"} />
      <Text
        text={
          "Um die Sicherheit und Integrität unserer Website zu gewährleisten und unberechtigte Zugriffe auf Umfragen zu verhindern, kommen sog. JSON Web Tokens (JWT) zum Einsatz. JWTs sind kleine, signierte Datensätze, die Informationen über Ihre Sitzung enthalten. Sie ermöglichen es uns, Nutzer:innen zu authentifizieren und sicherzustellen, dass nur autorisierte Personen auf bestimmte Bereiche der Website Zugriff haben können."
        }
      />
      <Text
        text={
          "Beim Einsatz von JWT werden folgende Daten verarbeitet: User-ID, Authentifizierungsinformationen (Token), Zeitstempel der Token-Erstellung und -Ablauf (Startzeitpunkt der Sitzung/Session), Angaben zu Ihren Berechtigungen und Zugriffsrechten innerhalb der Website/Anwendung. Konkret bedeutet dies, dass nach dem Erstellen und Einloggen einer Umfrage ein Token in der Web Storage API im Sessionstorage gespeichert wird, so dass nur der Tab des jeweiligen Browser Zugang zu diesen Daten hat."
        }
      />
      <Text
        text={
          "Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 S. 1 lit. f DSGVO (berechtigtes Interesse). Unser berechtigtes Interesse liegt vorliegend in der technischen Notwendigkeit der Authentifizierung und Autorisierung, d. h. der sicheren und zweckgemäßen Verwaltung der Zugriffe von Nutzer:innen auf unsere Website. Die Daten werden nur so lange gespeichert, wie für den beschriebenen Zweck erforderlich. JWTs haben eine begrenzte Gültigkeitsdauer (vorliegend: 1 Tag) und werden nach deren Ablauf automatisch ungültig. Im Übrigen wird der Inhalt der Session gelöscht, wenn der jeweilige Tab oder der komplette Browser geschlossen wird. (Hinweis: Nach Ablauf des JWTs ist i. d. R. eine erneute Authentifizierung notwendig.) Wir setzen angemessene technische und organisatorische Maßnahmen (TOMs) ein, um die Sicherheit der personenbezogenen Daten und die Integrität der JWTs zu gewährleisten. Dazu gehören: Verschlüsselung der JWT-Signatur, sichere Speicherung der Signaturschlüssel, HTTPS-Verschlüsselung für die Übertragung, regelmäßige Sicherheitsüberprüfungen."
        }
      />
    </Grid>
  );
};

export default Session;
