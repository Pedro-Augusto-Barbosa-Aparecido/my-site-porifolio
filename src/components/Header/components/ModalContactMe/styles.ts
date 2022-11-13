import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../../../styles";
import { TextLink } from "../../../TextLink";

export const DialogContent = styled(Dialog.Content, {
  width: "100%",
  height: "100vh",

  position: "absolute",
  top: 0,
  left: 0,
});

export const Overlay = styled(Dialog.Overlay, {
  width: "100%",
  height: "100vh",

  position: "absolute",
  top: 0,
  left: 0,

  backdropFilter: "blur(2px)",
});

export const Modal = styled("div", {
  "-webkit-app-region": "drag",
  position: "absolute",

  top: "57%",
  left: "50%",

  translate: "-50% -50%",

  width: 600,
  height: "fit-content",

  backgroundColor: "$zinc900",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

  boxSizing: "border-box",
  padding: 24,

  borderRadius: 12,

  display: "flex",
  flexDirection: "column",

  justifyContent: "flex-start",
  alignItems: "flex-start",

  gap: "2rem",

  "& > div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    alignContent: "stretch",

    width: "100%",

    svg: {
      color: "$zinc400",
    },
  },
});

export const ModalTitle = styled(TextLink, {
  "-webkit-user-select": "none",
  margin: 0,
  padding: 0,
  lineHeight: 1,
  "&:hover": {
    textDecoration: "none",
    cursor: "default",
  },
});

export const ButtonClose = styled("button", {
  background: "none",
  border: 0,
  outline: "none",
  "&:hover": {
    scale: 1.1,
    cursor: "pointer",
  },
});

export const ModalForm = styled("form", {
  width: "100%",
  height: "100%",

  display: "flex",

  flexDirection: "column",

  justifyContent: "flex-start",
  alignItems: "flex-start",

  gap: "1rem",
});
