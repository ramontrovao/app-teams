import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const InputContainer = styled(TextInput)`
  ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
    min-height: 56px;
    max-height: 56px;
    padding: 16px;
    border-radius: 6px;

    flex: 1;

    background-color: ${COLORS.GRAY_700};
    color: ${COLORS.WHITE};
    font-size: ${FONT_SIZE.MD}px;
  `}
`;
