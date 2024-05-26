import axios from "axios";
import { IScreenShot } from "../../../types/interfaces/components";
import ChooseButton from "../../buttons/ChooseButton";
import { useDispatches, useLocaleStorage, useSelectors } from "../../../hooks";

const ScreenShot = ({
  title,
  width,
  id,
  isMobileView,
  pageID,
  url,
}: IScreenShot) => {
  const { fetchSurvey } = useLocaleStorage();
  const { dispatchSideBar, incFirstSBPage, incLastSBPage } = useDispatches();
  const { lastSideBarPages } = useSelectors();
  const { surveyPages } = useSelectors();

  const editPage = async () => {
    try {
      const res = await axios.put(`/survey/choose-page-view/${id}`, {
        isMobileView,
        pageID,
      });
      fetchSurvey(res.data.survey);
      if (surveyPages.length !== lastSideBarPages) {
        incFirstSBPage();
        incLastSBPage();
      } else {
        dispatchSideBar(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>{title}</h4>
      <div
        id="capture"
        style={{
          width: width,
          height: "80vh",
          border: "1px solid transparent",
          marginBottom: "10px",
        }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            border: "2px solid #000",
            objectFit: "cover",
            objectPosition: "top",
          }}
          src={url}
        />
      </div>
      <ChooseButton onClick={editPage} />
    </div>
  );
};

export default ScreenShot;
