import { useSelectors, useDispatches, useBreakPoints } from "../../../hooks";
import { Check } from "../../icons";
import { Button, Grid, Modal, SubTitle, Text } from "../..";
import { useEffect, useState } from "react";

const StandbyMessage = () => {
  const { modal, surveyPages, currentPage } = useSelectors();
  const { closeModal } = useDispatches();
  const { windowWidth } = useBreakPoints();
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    if (currentPage === surveyPages.length) {
      setLastPage(true);
    }
  }, [currentPage, surveyPages.length]);

  return (
    <Modal
      open={modal}
      onClose={closeModal}
      style={{
        width: windowWidth <= 635 ? "95%" : "600px",
      }}>
      <Grid flexStart width={"100%"} nowrap alignStart>
        <Check />
        <Grid column width={"100%"} noMargin>
          <SubTitle title={"Bitte warte"} />
          <Text
            text={
              !lastPage
                ? "Einen Moment bitte, gleich kommt das nächste Beispiel."
                : "Letzte Seite betwertet, vielen Dank für deine Teilnahme!"
            }
          />
          <Grid flexEnd width={"100%"}>
            <Button onClick={closeModal} title={"Okay"} />
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default StandbyMessage;
