import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContentContainer,
  Title,
  Card,
  FramerMotion,
  SubTitle,
  AddPage,
  Flex,
  NoPages,
  Divider,
  ButtonContainer,
  Button,
  PageTable,
} from "../../components";
import {
  useDispatches,
  useTranslations,
  useBreakPoints,
  useSelectors,
} from "../../hooks";
import withSurveyAuthPages from "../../hoc/withSurveyAuthPages";
import NewSideMenu from "../../components/survey/surveys-manager/add-pages/NewSideMenu";

const PagesOverview = () => {
  const { openModal, dispatchSideBar, resetSBPages } = useDispatches();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { survey, surveyPages } = useSelectors();
  const navigate = useNavigate();
  const [viewsSelected, setViewsSelected] = useState(false);

  useEffect(() => {
    surveyPages?.find((element) => {
      if (element.isMobileView !== null || element.isOpenGraphView !== false) {
        setViewsSelected(true);
      } else setViewsSelected(false);
    });
  }, [surveyPages]);

  useEffect(() => {
    if (survey && survey?.pages && survey?.pages?.length < 1) {
      setViewsSelected(false);
    }
  }, [viewsSelected, survey]);

  useEffect(() => {
    if (surveyPages?.length === 0) {
      resetSBPages();
    }
  }, []);

  return (
    <ContentContainer style={{ position: "relative" }}>
      <NewSideMenu />
      <Title title={t("survey.createManagement")} />
      <Card>
        <FramerMotion>
          <SubTitle title={t("addPages.header")} />
          <AddPage />
          <Flex
            direction={"column"}
            gap={"25px"}
            justify="center"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              position: "relative",
              paddingTop: "1em",
            }}>
            {survey && survey?.pages && survey?.pages?.length > 0 ? (
              <PageTable />
            ) : (
              <NoPages />
            )}

            <Flex
              direction={windowWidth >= 530 ? "row" : "column"}
              gap={windowWidth < 530 ? "10px" : "0px"}
              justify="space-between"
              align={windowWidth >= 530 ? "center" : "stretch"}
              style={{
                borderRadius: "4px",
                marginTop: "2em",
              }}>
              <SubTitle
                style={{ paddingTop: "0px" }}
                title={t("addPages.addPages")}
              />
              <Button title={t("addPages.button")} onClick={openModal} />
            </Flex>

            <Divider />

            <ButtonContainer>
              <Button
                error
                onClick={() =>
                  navigate(`/surveys-manager/survey-profile/${survey?._id}`)
                }
                title={t("button.back")}
              />
              <>
                {survey && survey?.pages && survey?.pages?.length > 0 && (
                  <Button
                    onClick={
                      viewsSelected
                        ? () => navigate(`/survey-control/${survey._id}`)
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
                    title={t("button.continue")}
                  />
                )}
              </>
            </ButtonContainer>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default withSurveyAuthPages(PagesOverview);
