import { SectionProps } from "../types/interfaces/components";
import SubTitle from "./SubTitle";
import Text from "./Text";

const Section = ({ title, subTitle, mappedTitle }: SectionProps) => {
  return (
    <section>
      <SubTitle title={title} />
      <div>{mappedTitle}</div>
      <Text text={subTitle ?? ""} />
    </section>
  );
};

export default Section;
