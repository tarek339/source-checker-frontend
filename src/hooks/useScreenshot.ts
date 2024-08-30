import html2canvas from "html2canvas";
import { useRef } from "react";

const useScreenshot = () => {
  const screenshotRef = useRef();

  // const handleScreenshot = async () => {
  //   const canvas = await html2canvas(screenshotRef.current!);
  //   const dataUrl = canvas.toDataURL("image/png");
  //   const link = document.createElement("a");
  //   link.href = dataUrl;
  //   link.download = "screenshot.png";
  //   link.click();
  // };

  const handleScreenshot = async () => {
    // Get the current element
    const element = screenshotRef.current;

    // Save the original padding (if any)
    const originalPaddingTop = window.getComputedStyle(
      element as any
    ).paddingTop;
    const originalPaddingBottom = window.getComputedStyle(
      element as any
    ).paddingBottom;

    // Set new padding values
    (element as any).style.paddingTop = "2em";
    (element as any).style.paddingBottom = "2em";

    try {
      const canvas = await html2canvas(element as any);
      const dataUrl = canvas.toDataURL("image/png");

      // Create a link to download the image
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "screenshot.png";
      link.click();
    } finally {
      // Revert back to original padding
      (element as any).style.paddingTop = originalPaddingTop;
      (element as any).style.paddingBottom = originalPaddingBottom;
    }
  };

  return {
    handleScreenshot,
    screenshotRef,
  };
};

export default useScreenshot;
