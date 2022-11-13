import { styled } from "../../styles";

export const FooterContainer = styled("footer", {
  height: "fit-content",
  alignSelf: "stretch",

  padding: ".75rem",

  backgroundColor: "$zinc900",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: ".5rem",

  span: {
    fontSize: ".90rem",
    color: "$zinc600",
  },
});

export const SocialContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  gap: "3rem",

  img: {
    cursor: "pointer",

    borderRadius: "50%",

    transition: "ease-in .1s",

    "&:hover": {
      opacity: 0.8,
    },
  },
});
