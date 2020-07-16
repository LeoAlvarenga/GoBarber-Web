import React, { InputHTMLAttributes, useEffect, useRef } from "react";

import { Container } from "./styles";
import { IconBaseProps } from "react-icons/lib";
import { useField } from "@unform/core"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...restProps}) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      { Icon && <Icon size={20} />}
      <input ref={inputRef} {...restProps} />
    </Container>
  );
};

export default Input;
