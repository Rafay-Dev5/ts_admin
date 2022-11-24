import Box from "@mui/material/Box";

const BoxDX = (props: any) => {
  return (
    <Box
      {...props}
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
    />
  );
};

//for commits
export default BoxDX;
