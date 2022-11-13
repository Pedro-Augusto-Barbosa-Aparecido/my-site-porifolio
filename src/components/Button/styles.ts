import { styled } from "../../styles";

export const BaseButton = styled("button", {
  alignSelf: "stretch",
  height: 60,

  "-vendor-background-clip": "padding-box",
  "-moz-border-radius": "6px",
  "-webkit-border-radius": "6px",

  border: 0,
  outline: "none",
  borderRadius: 6,

  backgroundColor: "$blue400",

  color: "$gray200",

  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "1.25rem",
  lineHeight: "160%",

  transition: "background-color .25s",

  "&:hover": {
    backgroundColor: "$blue500",
    color: "$white900",
  },

  "&:active": {
    backgroundColor: "transparent",
    border: "4px solid $blue500",
    color: "$white900",
    // "inner-border-radius": 6,
  },
});
