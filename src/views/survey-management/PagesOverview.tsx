import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Title,
  Card,
  FramerMotion,
  SubTitle,
  AddPage,
  NoPages,
  Button,
  PageTable,
  SideMenu,
  Grid,
} from "../../components";
import {
  useDispatches,
  useTranslations,
  useBreakPoints,
  useSelectors,
} from "../../hooks";
import withSurveyAuthPages from "../../hoc/withSurveyAuthPages";

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
    <FramerMotion>
      <Grid column gutters>
        <SideMenu />

        <AddPage />

        <Title title={t("survey.createManagement")} />

        <Card>
          <SubTitle title={t("addPages.header")} marginBottom="16px" />

          <Grid column width={windowWidth <= 1000 ? "100%" : "80%"} spacing={4}>
            <>
              {survey && survey?.pages && survey?.pages?.length > 0 ? (
                <PageTable />
              ) : (
                <NoPages />
              )}
            </>

            <Grid
              direction={windowWidth >= 500 ? "row" : "column"}
              width={"100%"}
              between>
              <SubTitle title={t("addPages.addPages")} />
              <Button title={t("addPages.button")} onClick={openModal} />
            </Grid>

            <Grid
              width={"100%"}
              between
              direction={windowWidth <= 500 ? "column-reverse" : "row"}>
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
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </FramerMotion>
  );
};

export default withSurveyAuthPages(PagesOverview);
