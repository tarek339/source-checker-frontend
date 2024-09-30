import { IThumbnail } from "../../../types/interfaces/components";

const Thumbnail = ({ url, height, width }: IThumbnail) => {
  return (
    <div
      // className="hide-scroll-bar"
      style={{
        overflowY: "scroll",
        width: !width ? "80px" : width,
        height: !height ? "60px" : height,
      }}>
      <img src={url} alt="" style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default Thumbnail;
