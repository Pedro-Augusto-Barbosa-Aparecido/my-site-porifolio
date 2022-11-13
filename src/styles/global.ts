import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: "$gray200",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },
  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  "input::placeholder, textarea::placeholder": {
    fontFamily: "'Roboto'",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "1.25rem",
    lineHeight: "160%",
    color: "$zinc600",
  },

  "input:-webkit-auto-fill:active": {
    transition: "background-color 5000s",
    "-webkit-text-fill-color": "$zinc400 !important",
  },

  "input:-webkit-auto-fill": {
    transition: "background-color 5000s",
    "-webkit-text-fill-color": "$zinc400 !important",
  },
  "input:-webkit-auto-fill:hover": {
    transition: "background-color 5000s",
    "-webkit-text-fill-color": "$zinc400 !important",
  },
  "input:-webkit-auto-fill:focus": {
    transition: "background-color 5000s",
    "-webkit-text-fill-color": "$zinc400 !important",
  },
});
