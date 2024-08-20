import { useEffect } from "react";
import { useDispatches } from "../hooks";

const LicenseNotes = () => {
  const { setMainPage } = useDispatches();

  useEffect(() => {
    setMainPage(false);
  }, []);
  return <div>LicenseNotes</div>;
};

export default LicenseNotes;
