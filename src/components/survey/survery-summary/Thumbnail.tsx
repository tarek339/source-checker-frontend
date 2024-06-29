import { IThumbnail } from "../../../types/interfaces/components";

const Thumbnail = ({ url }: IThumbnail) => {
  return (
    <div
      className="hide-scroll-bar"
      style={{ overflow: "scroll", width: "50px", height: "30px" }}>
      <img src={url} alt="" style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default Thumbnail;
