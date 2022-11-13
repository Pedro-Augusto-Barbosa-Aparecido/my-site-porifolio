import { styled } from "../../styles";

export const InputLayout = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",

  flexDirection: "column",

  gap: "1rem",

  width: "100%",
});

export const InputContainer = styled("div", {
  variants: {
    border: {
      focus: {
        border: "2px solid $blue500",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

        "& > svg": {
          color: "$white900",
        },
      },
      default: {
        border: "2px solid transparent",
      },
    },
  },

  boxSizing: "border-box",

  width: "100%",
  height: "4rem",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  borderRadius: 6,

  backgroundColor: "$gray700",
});

export const IconContainer = styled("div", {
  variants: {
    color: {
      focus: {
        color: "$white900",
      },
      default: {
        color: "$gray300",
      },
    },
  },

  width: "15%",
  height: "100%",

  display: "flex",

  justifyContent: "center",
  alignItems: "center",
});

export const BaseInput = styled("input", {
  width: "100%",
  height: "100%",

  backgroundColor: "transparent",

  outline: "none",
  border: 0,
  borderTopLeftRadius: 6,
  borderBottomLeftRadius: 6,

  color: "$zinc500",

  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "1.25rem",
  lineHeight: "160%",

  padding: "0 1rem",

  "&:focus": {
    color: "$zinc400",
  },
});

export const BaseTextArea = styled("textarea", {
  width: "stretch",
  height: 200,

  outline: "none",
  border: "2px solid transparent",
  borderTopLeftRadius: 6,
  borderBottomLeftRadius: 6,

  color: "$zinc500",

  borderRadius: 6,

  backgroundColor: "$gray700",

  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "1.25rem",
  lineHeight: "160%",

  padding: "1.25rem",

  resize: "none",

  "&::-webkit-scrollbar": {
    width: "0.25rem",
    backgroundColor: "$gray700",
  },

  "&::-webkit-scrollbar-track": {
    backgroundColor: "$gray700",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "$zinc600",
  },

  "&:focus": {
    border: "2px solid $blue500",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
});

export const Label = styled("label", {
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "1.5rem",

  lineHeight: "160%",

  color: "$white900",

  display: "flex",
  alignItems: "center",
});
