import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const FilterContainer = styled.TouchableOpacity<FilterStyleProps>`
  ${({ theme: { COLORS }, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${COLORS.GREEN_700};
    `}

  height: 38px;
  width: 70px;
  margin-right: 12px;

  align-items: center;
  justify-content: center;

  border-radius: 4px;
`;

export const Title = styled.Text`
  ${({ theme: { COLORS, FONT_SIZE, FONT_FAMILY } }) =>
    css`
      text-transform: uppercase;
      font-family: ${FONT_FAMILY.BOLD};
      font-size: ${FONT_SIZE.SM}px;
      color: ${COLORS.WHITE};
    `}
`;
