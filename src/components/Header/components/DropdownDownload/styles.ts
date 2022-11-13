import { styled } from "../../../../styles";
import { FilePdf, FilePng } from "phosphor-react";

import * as Dropdown from "@radix-ui/react-dropdown-menu";

export const PdfIcon = styled(FilePdf, {
  color: "$zinc600",
  marginLeft: "auto",
});

export const PngIcon = styled(FilePng, {
  color: "$zinc600",
  marginLeft: "auto",
});

export const DropdownRoot = styled(Dropdown.Root, {
  border: 0,
  outline: "none",
});

export const DropdownPortal = styled(Dropdown.Portal, {
  height: "100vh",
});

export const DropdownContent = styled(Dropdown.Content, {
  padding: 10,
  width: "23.5rem",
  marginLeft: "11.125rem",

  background: "$gray700",

  boxShadow: "0px 4px 10px #121214",

  borderRadius: 6,
  border: 0,

  outline: "none",

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",

    gap: 13,

    a: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      width: "100%",

      lineHeight: 1.6,

      fontFamily: "Roboto",
      fontWeight: "700",
      fontSize: "1rem",

      color: "$zinc600",

      textDecoration: "none",
    },
  },
});

export const DropdownMenuItem = styled(Dropdown.DropdownMenuItem, {
  "&:hover": {
    border: 0,
    outline: "none",
    "& > *": {
      color: "$zinc500",
    },
  },
});

export const DropdownSeparator = styled(Dropdown.Separator, {
  backgroundColor: "$zinc600",
  margin: "13px 0",
  height: 2,
  alignSelf: "stretch",
});
