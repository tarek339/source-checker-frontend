import { IThumbnail } from "../../../types/interfaces/components";

const Thumbnail = ({ url, height, width }: IThumbnail) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        width: !width ? "80px" : width,
        height: !height ? "60px" : height,
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
