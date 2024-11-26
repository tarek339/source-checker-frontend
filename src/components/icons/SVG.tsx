const Svg = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(244, 67, 54, 0.5)",
        padding: "8px",
        borderRadius: "50px",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(244, 67, 54)",
          borderRadius: "50px",
          padding: "3px",
        }}>
        <svg
          stroke="#fff"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="30px"
          width="30px"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill="none"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="32"
            d="m240 80 8 240h16l8-240h-32zm0 320h32v32h-32z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Svg;
