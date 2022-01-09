import colors from "config/colors";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  padding: 1rem 1.5rem;
  background-color: ${colors.darkGray};
  color: ${colors.white};
  span {
    font-size: 1.125rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;
