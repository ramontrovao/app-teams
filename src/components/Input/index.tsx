import { TextInputProps } from "react-native";
import { TextInput } from "react-native/Libraries/Components/TextInput/TextInput";
import { useTheme } from "styled-components/native";
import { InputContainer } from "./styles";

type InputProps = {
  inputRef?: React.RefObject<TextInput>;
} & TextInputProps;

export const Input = ({ inputRef, ...rest }: InputProps) => {
  const { COLORS } = useTheme();

  return (
    <InputContainer
      placeholderTextColor={COLORS.GRAY_300}
      ref={inputRef}
      {...rest}
    />
  );
};
