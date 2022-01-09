import Container from "components/Container";
import colors from "config/colors";
import styled from "styled-components";

export const FooterStyled = styled.footer`
  padding: 2rem 2.5rem;
  background-color: ${colors.light};
  box-shadow: 0 0 1rem ${colors.black}40;
  @media screen and (max-width: 767px) {
    padding: 0.5rem 2rem;
  }
`;

export const FooterWrapperStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FooterTitleStyled = styled.h3`
  padding: 0.5rem 3.5rem;
  margin: 0;
  text-transform: uppercase;
  color: ${colors.gray};
  @media screen and (max-width: 767px) {
    text-align: center;
    padding-top: 0;
  }
`;

export const FooterListStyled = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-gap: 2rem;
  margin: 0;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    justify-items: flex-end;
  }
`;

export const FooterImageStyled = styled.a`
  display: block;
  padding: 0.25rem;
  background-color: ${colors.gray};
  border-radius: 0.5rem;
  max-width: 56px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${colors.darkGray};
  }
  img {
    display: block;
    max-width: 100%;
    filter: brightness(0);
    transition: filter 0.3s;
    &:hover {
      filter: brightness(1);
    }
  }
`;
