import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { InputContainer } from "./styles";

export const Input = ({ ...rest }: TextInputProps) => {
  const { COLORS } = useTheme();

  return <InputContainer placeholderTextColor={COLORS.GRAY_300} {...rest} />;
};
