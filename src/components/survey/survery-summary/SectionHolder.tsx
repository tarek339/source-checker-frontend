import { useState } from "react";
import { useSelectors, useBreakPoints } from "../../../hooks";
import { ISectionHolder } from "../../../types/interfaces/components";
import Flex from "../../containers/Flex";
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

  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (row: number) => {
    setHovered(row);
  };
  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <>
      {page.starsArray
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
                cursor: "pointer",
                padding: "5px 5px 5px 10px",
                backgroundColor: hovered === i ? "#2835c320" : "",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}>
              <Section
                style={{ paddingTop: "1.5px", textTransform: "capitalize" }}
                text={
                  survey?.freeUserNames && !survey?.anonymousResults
                    ? obj.userName
                    : (survey?.freeUserNames && survey?.anonymousResults) ||
                      (!survey?.freeUserNames && survey?.anonymousResults)
                    ? `Person ${i + 1}`
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
