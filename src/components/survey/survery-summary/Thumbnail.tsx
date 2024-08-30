import { IThumbnail } from "../../../types/interfaces/components";

const Thumbnail = ({ url, height, width }: IThumbnail) => {
  return (
    <div
      className="hide-scroll-bar"
      style={{
        overflow: "scroll",
        width: !width ? "50px" : width,
        height: !height ? "30px" : height,
      }}>
      <img src={url} alt="" style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default Thumbnail;
