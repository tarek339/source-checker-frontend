import { useEffect, useState } from "react";
import {
  useBreakPoints,
  useDispatches,
  useLocaleStorage,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import BackButton from "../../buttons/BackButton";
import DividerHorizontal from "../../DividerHorizontal";
import NoPages from "./NoPages";
import PagesHolder from "./PagesHolder";
import AddPage from "./AddPage";
import Flex from "../../parents/containers/Flex";
import SubHeader from "../../parents/SubHeader";
import ContButton from "../../buttons/ContButton";
import FramerMotion from "../../parents/containers/FramerMotion";
import { useNavigate } from "react-router-dom";

const AddPages = () => {
  const { openModal, dispatchSideBar } = useDispatches();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { survey, surveyPages } = useSelectors();
  const { getSurvey } = useLocaleStorage();
  const navigate = useNavigate();
  const [viewsSelected, setViewsSelected] = useState(false);

  useEffect(() => {
    getSurvey();
  }, []);

  useEffect(() => {
    surveyPages?.find((element) => {
      if (element.isMobileView !== null) {
        setViewsSelected(true);
      } else setViewsSelected(false);
    });
  }, [surveyPages]);

  useEffect(() => {
    if (survey && survey?.pages && survey?.pages?.length < 1) {
      setViewsSelected(false);
    }
  }, [viewsSelected, survey]);

  return (
    <FramerMotion>
      <AddPage />
      <Flex
        direction={"column"}
        gap={"25px"}
        justify="center"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          position: "relative",
        }}>
        <SubHeader title={t("addPages.header")} />

        {survey && survey?.pages && survey?.pages?.length > 0 ? (
          <PagesHolder />
        ) : (
          <NoPages />
        )}

        <Flex
          direction={"row"}
          gap={"0px"}
          justify="space-between"
          align="center"
          style={{
            borderRadius: "4px",
            marginTop: "2em",
          }}>
          <SubHeader
            title={
              windowWidth <= 375
                ? t("addPages.addPagesXs")
                : t("addPages.addPages")
            }
          />

          <ContButton title={t("addPages.button")} onClick={openModal} />
        </Flex>

        <DividerHorizontal />

        <Flex
          direction={windowWidth <= 500 ? "column-reverse" : "row"}
          gap={"20px"}
          justify="flex-start"
          width="100%">
          <BackButton page={3} />
          <>
            {survey && survey?.pages && survey?.pages?.length > 0 && (
              <ContButton
                onClick={
                  viewsSelected
                    ? () => navigate("/survey-summary")
                    : () => {
                        if (
                          survey &&
                          survey?.pages &&
                          survey?.pages?.length > 0
                        ) {
                          dispatchSideBar(true);
                        }
                      }
                }
                title={
                  viewsSelected
                    ? t("addPages.shareSurvey")
                    : t("common.chooseView")
                }
              />
            )}
          </>
        </Flex>
      </Flex>
    </FramerMotion>
  );
};

export default AddPages;
