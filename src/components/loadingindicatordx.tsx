import { CircularProgress } from "@mui/material";

interface loadingParam {
  loading: boolean;
}

const LoadingIndicatorDX = (props: loadingParam) => {
  const loading = props.loading ?? false;

  return loading ? (
    <div
      style={{
        display: "flex",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
        backgroundColor: "rgb(205, 205, 205, 0.5)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  ) : (
    <></>
  );
};

export default LoadingIndicatorDX;
