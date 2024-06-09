import useSelectors from "./useSelectors";

const useScroll = () => {
  const { modal } = useSelectors();

  const handleScroll = () => {
    if (modal) {
      document.body.style.overflow = "hidden";
    }
    if (!modal) {
      document.body.style.overflow = "auto";
    }
  };

  return {
    handleScroll,
  };
};

export default useScroll;
