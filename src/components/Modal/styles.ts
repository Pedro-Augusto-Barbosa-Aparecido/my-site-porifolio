import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../styles";

export const DialogRoot = styled(Dialog.Root, {});

export const DialogTitle = styled(Dialog.Title, {
  color: "$gray300",
});

export const DialogOverlay = styled(Dialog.Overlay, {
  width: "100%",
  height: "100vh",
});

export const DialogClose = styled(Dialog.Close, {});

export const DialogContent = styled(Dialog.Content, {
  position: "absolute",

  top: 0,
  left: 0,

  height: "100vh",
  width: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  svg: {
    color: "$gray300",
  },
});

export const DialogContainer = styled("div", {
  backgroundColor: "$zinc900",

  padding: 16,

  borderRadius: 6,
  boxShadow: "0px 4px 10px #121214",

  gap: "2rem",
});

export const DialogContainerTitle = styled("div", {
  display: "flex",

  flexDirection: "row-reverse",

  justifyContent: "space-between",
  alignItems: "center",
});

export const DialogTrigger = styled(Dialog.Trigger, {});

export const DialogPortal = styled(Dialog.Portal, {});

export const ComingSoonContainer = styled("div", {
  color: "$zinc500",

  textAlign: "center",

  fontSize: "1.5rem",

  "& > div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    gap: ".5rem",

    svg: {
      color: "$red700",
    },
  },
});
