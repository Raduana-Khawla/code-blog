import { styled } from "@mui/styles";

export const Pre = styled("pre")({
  textAlign: "left",
  margin: "1em 0",
  padding: "0.5em",
  overflow: "scroll",

  "& .token-line": {
    lineHeight: "1.3em",
    height: "1.3em",
  },
});

export const Line = styled("div")({
  display: "table-row",
});

export const LineNo = styled("span")({
  display: "table-cell",
  textAlign: "right",
  paddingRight: "1em",
  userSelect: "none",
  opacity: 0.5,
});

export const LineContent = styled("span")({
  display: "table-cell",
});
