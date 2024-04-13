import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const useSelectors = () => {
  const locale = useSelector((state: RootState) => state.translation.locale);
  const page = useSelector((state: RootState) => state.pages.page);
  const index = useSelector((state: RootState) => state.pages.index);
  const stepDone = useSelector((state: RootState) => state.pages.stepDone);

  return { locale, page, index, stepDone };
};

export default useSelectors;
