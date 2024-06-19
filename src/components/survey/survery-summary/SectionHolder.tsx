import { useSelectors, useBreakPoints } from "../../../hooks";
import { ISectionHolder } from "../../../types/interfaces/components";
import Divider from "../../Divider";
import Flex from "../../parents/containers/Flex";
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
  const { windowWidth } = useBreakPoints();

  return (
    <>
      {!survey?.anonymousResults &&
        page.starsArray.map((obj, i) => {
          return (
            <Flex key={i} direction={"column"} gap={"15px"} justify="center">
              <Flex
                direction={windowWidth >= 470 ? "row" : "column"}
                gap={"10px"}
                align={windowWidth >= 470 ? "center" : "flex-start"}
                width="100%">
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
                {windowWidth >= 635 ? <Section text="bewertet als" /> : <></>}
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
