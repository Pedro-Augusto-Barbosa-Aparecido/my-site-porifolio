import { styled } from "../../styles";

export const TextColored = styled("strong", {
  variants: {
    color: {
      red: {
        color: "$red700",
      },
    },
  },

  color: "$zinc600",
});
