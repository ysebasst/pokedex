import colors from "config/colors";
import styled from "styled-components";

export const PokemonStyled = styled.article`
  display: grid;
  grid-column-gap: 2.5rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr auto;
  }
`;

export const PokemonHeaderStyled = styled.div`
  /* padding: 1.5rem; */
`;

export const PokemonNameStyled = styled.h1`
  padding: 0.5rem 1.5rem;
  margin-top: 0;
  margin-bottom: -2.5rem;
  font-size: 1.25rem;
  text-align: center;
  text-transform: uppercase;
  background-color: ${colors.light};
  border-radius: 0.5rem;
`;

export const PokemonImageStyled = styled.img`
  display: block;
  aspect-ratio: 1;
  max-width: 100%;
  margin: 0 auto;
  filter: brightness(0);
  transition: filter 0.3s;
  &:hover {
    filter: brightness(1);
  }
`;

export const PokemonInfoStyled = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  padding: 2.5rem 1.5rem;
  background-color: ${colors.light};
  border-radius: 0.5rem;
  @media screen and (max-width: 767px) {
    margin-top: -2.25rem;
    z-index: -1;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
`;

export const PokemonStatStyled = styled.div`
  span {
    &:first-of-type {
      color: ${colors.gray};
    }
    &:last-of-type {
      font-size: 1.25rem;
      text-transform: uppercase;
      color: ${colors.darkGray};
    }
    @media screen and (min-width: 768px) {
      display: block;
      text-align: center;
    }
  }
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
