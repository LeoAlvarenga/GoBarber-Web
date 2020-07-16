import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from "react";

import { Container } from "./styles";
import { IconBaseProps } from "react-icons/lib";
import { useField } from "@unform/core";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...restProps }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  /**
   * Every time you need to create a function inside a component, use the useCallback,
   * so it prevents the function to be created again every time the component is rendered
   */

   const handleInputFocus = useCallback(() => {
     setIsFocused(true)
   }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)

  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...restProps}
      />
      {error}
    </Container>
  );
};

export default Input;
