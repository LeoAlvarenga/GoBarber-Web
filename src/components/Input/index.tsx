import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";
import { IconBaseProps } from "react-icons/lib";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({icon: Icon, ...restProps}) => {
  return (
    <Container>
      { Icon && <Icon size={20} />}
      <input {...restProps} />
    </Container>
  );
};

export default Input;
