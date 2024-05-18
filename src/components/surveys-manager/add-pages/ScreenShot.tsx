import axios from "axios";
import { IScreenShot } from "../../../types/interfaces/components";
import ChooseButton from "../../buttons/ChooseButton";
import { useDispatches, useSelectors } from "../../../hooks";

const ScreenShot = ({
  title,
  width,
  id,
  isMobileView,
  pageID,
  url,
}: IScreenShot) => {
  // const { fetchSurvey } = useLocaleStorage();
  const { dispatchSideBar, incFirstSBPage, incLastSBPage } = useDispatches();
  const { lastSideBarPages } = useSelectors();
  const { surveyPages } = useSelectors();
  // const [isLastItem, setisLastItem] = useState(false);

  const editPage = async () => {
    await axios.put(`/survey/edit-single-page/${id}`, {
      isMobileView,
      pageID,
    });
    // fetchSurvey(res); in locale storage

    if (surveyPages.length !== lastSideBarPages) {
      incFirstSBPage();
      incLastSBPage();
    } else dispatchSideBar(false);
  };

  return (
    <div>
      <h4>{title}</h4>
      <div
        id="capture"
        style={{
          width: width,
          height: "70vh",
          border: "1px solid transparent",
          marginBottom: "10px",
        }}>
        <iframe
          style={{ width: "100%", height: "100%", display: "block" }}
          src={url}></iframe>
      </div>
      <ChooseButton onClick={editPage} />
    </div>
  );
};

export default ScreenShot;
