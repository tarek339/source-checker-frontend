import { useState } from "react";
import {
  useDispatches,
  useLocaleStorage,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import Table from "../../Table";
import axios from "axios";
import EditPage from "./EditPage";

const PagesHolder = () => {
  const { surveyPages, survey } = useSelectors();
  const { openEditModal, fetchSinglePage } = useDispatches();
  const { fetchSurvey } = useLocaleStorage();
  const { t } = useTranslations();
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(5);

  const handleMouseEnter = (row: number) => {
    setHoveredRow(row);
  };
  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const onDelete = async (_id: string) => {
    await axios.post(`/survey/delete-page/${_id}`);
    const res = await axios.get(`/survey/get-profile/${survey?._id}`);
    fetchSurvey(res.data);
    if (res.data.pages.length % 5 === 0 && res.data.pages.length > 0) {
      setFirst((prevNum) => prevNum - 5);
      setLast((prevNum) => prevNum - 5);
    }
  };

  const handleEdit = (
    id: string,
    url: string,
    title: string,
    note: string,
    isMobileView: boolean,
    mobileScreenshot: string,
    desktopScreenshot: string
  ) => {
    fetchSinglePage({
      _id: id,
      url: url,
      title: title,
      note: note,
      isMobileView: isMobileView,
      mobileScreenshot: mobileScreenshot,
      desktopScreenshot: desktopScreenshot,
    });
    openEditModal();
  };

  return (
    <>
      <EditPage />
      <Table
        headers={["Name", t("common.view"), t("common.action")]}
        propsChildren={surveyPages?.slice(first, last).map((page, i) => {
          return (
            <tr
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              style={{
                backgroundColor:
                  hoveredRow === i ? "#ddd" : i % 2 === 0 ? "#fff" : "#f1f1f1",
              }}>
              <td
                style={{
                  borderBottomLeftRadius:
                    i === surveyPages?.slice(first, last).length - 1
                      ? "10px"
                      : "0px",
                }}>
                {page?.title}
              </td>
              <td>
                {page?.isMobileView
                  ? t("common.mobileView")
                  : page?.isMobileView === false
                  ? t("common.desktopView")
                  : null}
              </td>
              {page?.title && (
                <td
                  style={{
                    textTransform: "uppercase",
                    borderBottomRightRadius:
                      i === surveyPages?.slice(first, last).length - 1
                        ? "10px"
                        : "0px",
                  }}>
                  <span
                    style={{ color: "#2835c3", paddingRight: "20px" }}
                    onClick={() =>
                      handleEdit(
                        page._id,
                        page.url,
                        page.title,
                        page.note,
                        page.isMobileView!,
                        page.mobileScreenshot,
                        page.desktopScreenshot
                      )
                    }>
                    {t("common.edit")}
                  </span>
                  <span
                    style={{
                      color: "#FF0000",
                    }}
                    onClick={() => onDelete(page?._id!)}>
                    {t("common.delete")}
                  </span>
                </td>
              )}
            </tr>
          );
        })}
        first={first}
        last={last}
        setFirst={setFirst}
        setLast={setLast}
        property={surveyPages}
      />
    </>
  );
};

export default PagesHolder;
