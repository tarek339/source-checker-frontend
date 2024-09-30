import { useSelectors, useBreakPoints } from "../../../hooks";
import { ISectionHolder } from "../../../types/interfaces/components";
import Flex from "../../containers/Flex";
import SectionChild from "./SectionChild";

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
                padding: "5px 5px 5px 10px",
                transition: "background-color 0.3s",
              }}>
              <SectionChild
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
                <SectionChild text={credible} />
              ) : obj.stars === 4 ? (
                <SectionChild text={trustworthy} />
              ) : obj.stars === 3 ? (
                <SectionChild text={questionable} />
              ) : obj.stars === 2 ? (
                <SectionChild text={doubtful} />
              ) : (
                <SectionChild text={unbelievable} />
              )}
            </Flex>
          );
        })}
    </>
  );
};

export default SectionHolder;
