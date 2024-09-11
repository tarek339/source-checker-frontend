import Flex from "../../containers/Flex";
import Link from "../../fonts/Link";
import Span from "../../fonts/Span";
import TextSmall from "../../fonts/TextSmall";

const ContactData = () => {
  return (
    <Flex direction={"column"} gap={"25px"}>
      <Flex direction={"column"} gap={"20px"}>
        <Flex direction={"column"} gap={"10px"}>
          <Span title={"Kontaktdaten des Verantwortlichen"} />
          <TextSmall
            text={`Verantwortlich im Sinne der Datenschutzgrundverordnung und anderer nationaler 
          Datenschutzgesetze der EU-Mitgliedstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist die:`}
          />
        </Flex>
        <div>
          <TextSmall text={"HOOU GmbH"} />
          <TextSmall
            text={"Vertreten durch den Geschäftsführer Prof. Dr. Sönke Knutzen"}
          />
          <TextSmall text={"Am Irrgarten 3-6"} />
          <TextSmall text={"D-21073 Hamburg"} />
        </div>
      </Flex>

      <Flex direction={"column"} gap={"10px"}>
        <Span title={"Kontaktdaten der Datenschutzbeauftragten:"} />
        <div>
          <TextSmall text={"Datenschutzbeauftragte des MMKH"} />
          <TextSmall
            text={"Vertreten durch den Geschäftsführer Prof. Dr. Sönke Knutzen"}
          />
          <TextSmall text={"Saarlandstraße 30"} />
          <TextSmall text={"D-22303 Hamburg"} />
        </div>
      </Flex>

      <Span
        title={
          <>
            <TextSmall text={"E-Mail: "} />
            &nbsp;
            <Link
              url={"mailto:dsb@mmkh.de"}
              title={"dsb@mmkh.de"}
              fontWeight={0}
              fontSize={14}
            />
          </>
        }
      />
    </Flex>
  );
};

export default ContactData;
