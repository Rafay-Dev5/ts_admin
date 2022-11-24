import GridDX from "./layout/griddx";

const ToolbarDX = () => {
  return (
    <GridDX
      container
      style={{
        display: "flex",
        backgroundColor: "#ededed",
        height: 50,
        width: "100%",
      }}
    >
      <GridDX item xs={12}></GridDX>
    </GridDX>
  );
};

export default ToolbarDX;
