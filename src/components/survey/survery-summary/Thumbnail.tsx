import { ThumbnailProps } from "../../../types/interfaces/components";

const Thumbnail = ({ url, height, width, overflowY }: ThumbnailProps) => {
  return (
    <div
      style={{
        overflowY: !overflowY ? "scroll" : overflowY,
        width: !width ? "80px" : width,
        height: !height ? "60px" : height,
        scrollbarWidth: "thin",
      }}>
      <img
        src={url ? (Array.isArray(url) ? url[0] : url) : ""}
        alt=""
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Thumbnail;
