import Modal from "../../containers/Modal";
import Flex from "../../containers/Flex";
import { useEffect } from "react";
import { useSelectors, useDispatches, useScroll } from "../../../hooks";
import SubTitle from "../../fonts/SubTitle";
import ButtonContainer from "../../containers/ButtonContainer";
import Span from "../../fonts/Span";
import { Check } from "../../icons";
import { Button } from "../..";

const WaitMessage = () => {
  const { modal } = useSelectors();
  const { handleScroll } = useScroll();
  const { closeModal } = useDispatches();

  useEffect(() => {
    handleScroll();
  }, [modal]);

  return (
    <Modal
      isVisible={modal}
      setIsVisible={closeModal}
      style={{ maxWidth: "600px" }}>
      <Flex direction={"row"} gap={"10px"} align="flex-start">
        <Check />
        <Flex direction={"column"} gap={"15px"}>
          <Flex direction={"column"} gap={"5px"}>
            <SubTitle title={"Bitte warte"} />
            <Span
              title={"Einen Moment bitte, gleich kommt das nächste Beispiel."}
            />
          </Flex>
          <ButtonContainer style={{ justifyContent: "flex-end" }}>
            <Button onClick={closeModal} title={"Okay"} />
          </ButtonContainer>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default WaitMessage;
