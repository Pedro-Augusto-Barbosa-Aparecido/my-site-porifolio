import React, { useState } from "react";
import {
  BaseInput,
  BaseTextArea,
  InputContainer,
  InputLayout,
  Label,
  IconContainer,
} from "./styles";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  labelText: string;
  icon?: React.ReactElement;
  name: string;
}

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  labelText: string;
  name: string;
}

export function Input({ labelText, name, icon, ...rest }: InputProps) {
  const [focusContainerType, setFocus] = useState<"focus" | "default">(
    "default"
  );

  return (
    <InputLayout>
      <Label htmlFor={name}>{labelText}</Label>
      <InputContainer border={focusContainerType}>
        <BaseInput
          name={name}
          onFocus={() => setFocus("focus")}
          onBlur={() => setFocus("default")}
          autoComplete="off"
          {...rest}
        />
        {icon && (
          <IconContainer color={focusContainerType}>{icon}</IconContainer>
        )}
      </InputContainer>
    </InputLayout>
  );
}

export function TextArea({ labelText, name, ...rest }: TextAreaProps) {
  return (
    <InputLayout>
      <Label htmlFor={name}>{labelText}</Label>
      <BaseTextArea name={name} {...rest} />
    </InputLayout>
  );
}
