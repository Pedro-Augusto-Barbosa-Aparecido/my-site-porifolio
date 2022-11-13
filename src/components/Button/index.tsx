import React from "react";

import { BaseButton } from "./styles";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export function Button({ text, ...rest }: ButtonProps) {
  return <BaseButton {...rest}>{text}</BaseButton>;
}
