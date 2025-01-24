import { useCallback, useEffect, useState } from "react";
import { useDispatches, useSelectors, useTranslations } from "../../../hooks";
import { PagesProps } from "../../../types/interfaces/interfaces";
import OpenGraphHolder from "./OpenGraphHolder";
import ScreenShotHolder from "./ScreenShotHolder";
import StarRating from "./StarRating";
import axios from "axios";
import FramerMotion from "../../FramerMotion";
import Grid from "../../mui/Grid";
import SubTitle from "../../SubTitle";

const SurveyStart = () => {
  const { student, surveyPages, survey, currentPage } = useSelectors();
  const { setVotedStars, setVoted, setStars } = useDispatches();
  const { t } = useTranslations();
  const [pageId, setPageId] = useState("");

  const user = survey?.freeUserNames
    ? student?.freeUserName
    : `User ${student?.userNumber}`;

  useEffect(() => {
    surveyPages.slice(currentPage - 1, currentPage).map((page: PagesProps) => {
      setPageId(page._id);
    });
  }, [surveyPages, currentPage, pageId]);

  const fetchStars = useCallback(async () => {
    try {
      const res = await axios.get(
        `/survey/get-student-page-stars/${survey?._id}/${pageId}/${student?._id}`
      );
      if (res.data > 0) {
        setVotedStars(res.data);
        setVoted(true);
      }
      if (res.data === "") {
        setVotedStars(0);
        setVoted(false);
        setStars(0);
      }
    } catch (error) {
      console.log(error);
    }
  }, [pageId, setStars, setVoted, setVotedStars, student?._id, survey?._id]);

  useEffect(() => {
    if (student?._id !== undefined && pageId !== "") {
      fetchStars();
    }
  }, [student?._id, pageId]);

  const slicedUser = user ? user.slice(1) : undefined;

  return (
    <FramerMotion>
      <Grid column width={"100%"}>
        <Grid column width={"100%"}>
          <SubTitle
            title={`${user?.charAt(0).toUpperCase() + slicedUser!}, ${t(
              "studentSurvey.title"
            )}`}
          />
          <SubTitle title={"1 - nicht vertrauenswürdig"} />
          <SubTitle title={"5 - vertrauenswürdig"} />
        </Grid>

        <FramerMotion>
          <Grid column width={"100%"} spacing={4}>
            <StarRating
              pageId={pageId}
              surveyId={survey?._id ?? ""}
              studentId={student?._id ?? ""}
            />
            <>
              {surveyPages
                .slice(currentPage - 1, currentPage)
                .map((page: PagesProps, i: number) => {
                  return (
                    <div key={i}>
                      {page.isMobileView ? (
                        <ScreenShotHolder src={page.mobileScreenshot} />
                      ) : page.isMobileView === false ? (
                        <ScreenShotHolder src={page.desktopScreenshot} />
                      ) : page.isMobileView === null && page.isOpenGraphView ? (
                        <OpenGraphHolder
                          ogTitle={page.openGraph.ogTitle}
                          ogImage={page.openGraph.ogImage?.map(
                            (img: { url: string }) => img.url
                          )}
                          ogDescription={page.openGraph.ogDescription}
                          url={page.url}
                        />
                      ) : null}
                    </div>
                  );
                })}
            </>
          </Grid>
        </FramerMotion>
      </Grid>
    </FramerMotion>
  );
};

export default SurveyStart;
