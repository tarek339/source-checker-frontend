import Flex from "../../containers/Flex";
import Link from "../../fonts/Link";
import Span from "../../fonts/Span";

const ContactData = () => {
  return (
    <Flex direction={"column"} gap={"25px"}>
      <Flex direction={"column"} gap={"20px"}>
        <Flex direction={"column"} gap={"10px"}>
          <Span fontSize={18} title={"Kontaktdaten des Verantwortlichen"} />
          <Span
            fontSize={18}
            title={`Verantwortlich im Sinne der Datenschutzgrundverordnung und anderer nationaler 
          Datenschutzgesetze der EU-Mitgliedstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist die:`}
          />
        </Flex>
        <div>
          <Span fontSize={18} title={"HOOU GmbH"} />
          <Span
            fontSize={18}
            title={
              "Vertreten durch den Geschäftsführer Prof. Dr. Sönke Knutzen"
            }
          />
          <Span fontSize={18} title={"Am Irrgarten 3-6"} />
          <Span fontSize={18} title={"D-21073 Hamburg"} />
        </div>
      </Flex>

      <Flex direction={"column"} gap={"10px"}>
        <Span title={"Kontaktdaten der Datenschutzbeauftragten:"} />
        <div>
          <Span fontSize={18} title={"Datenschutzbeauftragte des MMKH"} />
          <Span
            fontSize={18}
            title={
              "Vertreten durch den Geschäftsführer Prof. Dr. Sönke Knutzen"
            }
          />
          <Span fontSize={18} title={"Saarlandstraße 30"} />
          <Span fontSize={18} title={"D-22303 Hamburg"} />
        </div>
      </Flex>

      <Span
        title={
          <>
            <Span fontSize={18} title={"E-Mail: "} />
            &nbsp;
            <Link
              url={"mailto:dsb@mmkh.de"}
              title={"dsb@mmkh.de"}
              fontWeight={0}
              fontSize={18}
            />
          </>
        }
      />
    </Flex>
  );
};

export default ContactData;
