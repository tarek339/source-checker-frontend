import { useSelectors, useStars, useTranslations } from "../../../hooks";
import SubTitle from "../../parents/SubTitle";
import Title from "../../parents/Title";
import Flex from "../../parents/containers/Flex";
import FramerMotion from "../../parents/containers/FramerMotion";
import SubCard from "../../parents/containers/SubCard";

const Acknowledgement = () => {
  const { t } = useTranslations();
  const { student, surveyPages } = useSelectors();
  const { fiveStars, fourStars, oneStar, threeStars, twoStars } = useStars();

  return (
    <FramerMotion>
      <Flex direction={"column"} gap={"0px"}>
        <Title title={t("studentSurvey.thankYou")} />
        <SubCard style={{ marginLeft: "20px", marginRight: "20px" }}>
          <Flex direction={"column"} gap={"20px"} align="center">
            <Flex direction={"row"} gap={""} justify="center">
              <SubTitle title={t("studentSurvey.ratedInfo")} />
            </Flex>

            <Flex
              style={{ margin: "0 auto" }}
              direction={"column"}
              gap={"15px"}>
              <>
                {surveyPages.map((page) => {
                  return page.starsArray.map((obj, i) => {
                    if (obj.userNumber === student?.userNumber.toString()) {
                      return (
                        <Flex
                          key={i}
                          direction={"row"}
                          gap={"10px"}
                          justify="flex-start">
                          <SubTitle
                            title={`${t("common.title")} - ${page.title}`}
                          />
                          <SubTitle
                            title={
                              obj.stars === 5
                                ? fiveStars
                                : obj.stars === 4
                                ? fourStars
                                : obj.stars === 3
                                ? threeStars
                                : obj.stars === 2
                                ? twoStars
                                : oneStar
                            }
                          />
                        </Flex>
                      );
                    }
                  });
                })}
              </>
            </Flex>

            <Flex direction={"column"} gap={"0px"}>
              <SubTitle
                style={{ color: "#5cb85c" }}
                title={t("studentSurvey.savedInfo")}
              />
              <SubTitle
                style={{ color: "#5cb85c" }}
                title={t("studentSurvey.closeBrowser")}
              />
            </Flex>
          </Flex>
        </SubCard>
      </Flex>
    </FramerMotion>
  );
};

export default Acknowledgement;
