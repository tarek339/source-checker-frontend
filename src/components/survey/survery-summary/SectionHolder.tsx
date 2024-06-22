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
                gap={"0px"}
                align="flex-start"
                width="100%">
                <Section
                  minWidth="100px"
                  maxWidth="150px"
                  style={{ paddingTop: "1.5px" }}
                  text={
                    survey?.freeUserNames
                      ? obj.userName.toUpperCase()
                      : obj.userNumber
                  }
                />
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
              </Flex>
              <div>{i !== starsArrayLength - 1 ? <Divider /> : null}</div>
            </Flex>
          );
        })}
    </>
  );
};

export default SectionHolder;
