import { styled } from "../../styles";

export const HeaderStyle = styled("header", {
  backgroundColor: "$zinc900",
  height: 168,
  paddingLeft: "3.125rem",
  paddingRight: "2.1875rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& > div": {
    a: {
      textDecoration: "none",
    },
    display: "flex",
    alignItems: "center",
    gap: "4rem",
  },
  img: {
    margin: 0,
    marginBottom: "-155px",
    display: "inline-block",
  },
});
