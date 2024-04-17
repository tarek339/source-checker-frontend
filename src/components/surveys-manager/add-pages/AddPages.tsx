import { useBreakPoints, useTranslations } from "../../../hooks";
import useDispatches from "../../../hooks/useDispatches";
import BackButton from "../../BackButton";
import ContinueButton from "../../ContinueButton";
import DividerHorizontal from "../../DividerHorizontal";
import ModalHolder from "./ModalHolder";
import NoPages from "./NoPages";

const AddPages = () => {
  const { openModal } = useDispatches();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();

  return (
    <>
      <ModalHolder />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "25px",
        }}>
        <h3>{t("addPages.header")}</h3>

        <NoPages />

        <div className="add-pages-holder">
          <h3>
            {windowWidth <= 375
              ? t("addPages.addPagesXs")
              : t("addPages.addPages")}
          </h3>
          <button className="add-page-button" onClick={openModal}>
            {t("addPages.button")}
          </button>
        </div>

        <DividerHorizontal />

        <div className="button-container">
          <BackButton page={3} />
          <ContinueButton page={+4} />
        </div>
      </div>
    </>
  );
};

export default AddPages;
