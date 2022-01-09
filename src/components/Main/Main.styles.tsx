import Container from "components/Container";
import styled from "styled-components";

export const MainStyled = styled.main`
  overflow-y: auto;
  padding: 1.5rem 2rem;
  @media screen and (min-width: 768px) {
    padding: 2rem 2.5rem;
  }
`;

export const MainWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
`;
