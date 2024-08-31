import Flex from "../../../containers/Flex";
import Span from "../../../fonts/Span";
import SubTitle from "../../../fonts/SubTitle";

const ProjectOwner = () => {
  return (
    <Flex direction={"column"} gap={"10px"}>
      <SubTitle title={"Projektverantwortlich"} />
      <Span title={"Fiete Stegers"} />
      <Span title={"Projekt #UseTheNews / HAW Hamburg"} />
      <Span title={"Department Information und Medienkommunikation"} />
      <Span title={"fiete.stegers[at]haw-hamburg.de"} />
    </Flex>
  );
};

export default ProjectOwner;
