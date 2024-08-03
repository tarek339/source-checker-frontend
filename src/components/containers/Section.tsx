import { ISection } from "../../types/interfaces/components";
import SubTitle from "../fonts/SubTitle";

const Section = ({ title, subTitle, mappedTitle }: ISection) => {
  return (
    <section>
      <SubTitle title={title} />
      <div>{mappedTitle}</div>
      <p>{subTitle}</p>
    </section>
  );
};

export default Section;
