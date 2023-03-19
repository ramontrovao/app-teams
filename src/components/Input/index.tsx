import { TextInputProps } from "react-native";
import { InputContainer } from "./styles";

export const Input = ({ ...rest }: TextInputProps) => {
  return <InputContainer {...rest} />;
};
