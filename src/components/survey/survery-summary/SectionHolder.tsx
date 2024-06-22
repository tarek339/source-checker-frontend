import { useSelectors, useBreakPoints } from "../../../hooks";
import { ISectionHolder } from "../../../types/interfaces/components";
import Flex from "../../parents/containers/Flex";
import Section from "./Section";

const SectionHolder = ({
  page,
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
        page.starsArray
          ?.slice()
          .sort((a, b) => b.stars - a.stars)
          .map((obj, i) => {
            return (
              <Flex
                key={i}
                direction={windowWidth >= 470 ? "row" : "column"}
                gap={windowWidth >= 470 ? "70px" : "0px"}
                align="center"
                justify={"space-between"}
                style={{
                  borderBottom: "2px solid #2835c3",
                  padding: "5px",
                }}>
                <Section
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
            );
          })}
    </>
  );
};

export default SectionHolder;
