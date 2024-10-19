import useSelectors from "./useSelectors";

const useScroll = () => {
  const { modal, viewsModal, qrCode } = useSelectors();

  const handleScroll = () => {
    if (modal || viewsModal || qrCode) {
      document.body.style.overflow = "hidden";
    }
    if (!modal && !viewsModal && !qrCode) {
      document.body.style.overflow = "auto";
    }
  };

  return {
    handleScroll,
  };
};

export default useScroll;
