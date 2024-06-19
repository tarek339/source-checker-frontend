import { Flex, Divider } from "../../components";
import { useSelectors } from "../../hooks";
import { ISectionHolder } from "../../types/interfaces/views";
import Section from "./Section";

const SectionHolder = ({
  page,
  starsArrayLength,
  credible,
  trustworthy,
  questionable,
  doubtful,
  unbelievable,
}: ISectionHolder) => {
  const { survey } = useSelectors();

  return (
    <>
      {!survey?.anonymousResults &&
        page.starsArray.map((obj, i) => {
          return (
            <Flex key={i} direction={"column"} gap={"15px"} justify="center">
              <Flex direction={"row"} gap={"10px"} align="center">
                <Section
                  minWidth="185px"
                  maxWidth="200px"
                  text={`Teilnehmer
                              ${
                                survey?.freeUserNames
                                  ? obj.userName
                                  : obj.userNumber
                              }`}
                />
                <Section text="bewertet als" />
                <div>
                  {obj.stars === 5 ? (
                    <Section text={credible} />
                  ) : obj.stars === 4 ? (
                    <Section text={trustworthy} />
                  ) : obj.stars === 3 ? (
                    <Section text={questionable} />
                  ) : obj.stars === 2 ? (
                    <Section text={doubtful} />
                  ) : (
                    <Section text={unbelievable} />
                  )}
                </div>
              </Flex>
              <div>{i !== starsArrayLength - 1 ? <Divider /> : null}</div>
            </Flex>
          );
        })}
    </>
  );
};

export default SectionHolder;
