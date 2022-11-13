import Image from "next/image";
import { styled } from "../..";
import { ModalForm } from "../../../components/Header/components/ModalContactMe/styles";

export const AboutMeContainer = styled("main", {
  height: "fit-content",
  alignSelf: "stretch",

  padding: "3.75rem 3.125rem",
  // paddingBottom: 0,
  backgroundColor: "$gray200",
  backgroundImage: "url(/bg.png)",
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "right",

  display: "flex",
  flexDirection: "column",

  justifyContent: "flex-start",
  alignItems: "flex-start",

  gap: "2.5rem",

  h1: {
    fontSize: "2rem",
    fontWeight: "700",
  },

  p: {
    maxWidth: "45rem",
    textIndent: 64,
  },
});

export const AboutMe = styled("section", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",

  height: "fit-content",

  gap: "13.75rem",

  h3: {
    fontWeight: "700",
    fontSize: "1.25rem",
  },
});

export const AboutMeItem = styled("div", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "flex-start",
  alignItems: "flex-start",

  gap: "1rem",
});

export const List = styled("ul", {
  marginLeft: "1rem",
});

export const ItemList = styled("li", {
  fontSize: ".85rem",
  fontWeight: "700",

  textDecoration: "underline",

  color: "$blue700",

  cursor: "pointer",

  "&:hover": {
    color: "$blue500",
  },
});

export const ImageBottom = styled(Image, {
  position: "fixed",

  right: 0,
  marginBottom: -230,
  marginRight: 0,

  // float: "left",

  variants: {
    position: {
      right: {
        right: 0,
      },
      left: {
        left: 0,
      },
    },
    bottom: {
      less: {
        bottom: 60,
      },
    },
  },
});

export const ContactFormHomeContainer = styled("section", {
  backgroundColor: "$zinc900",

  padding: "5.625rem 0",

  alignSelf: "stretch",
  gap: "3rem",

  position: "relative",
  zIndex: 99999,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  h2: {
    fontSize: "1.5rem",
    fontWeight: "700",

    color: "$gray200",
  },
});

export const Form = styled(ModalForm, {
  width: "27.5rem",

  button: {
    height: 75,
  },
});
