import { HeaderStyled } from "./Header.styles";

export default function Header(props: any) {
  return (
    <HeaderStyled {...props}>
      <span>Pokédex_</span>
    </HeaderStyled>
  );
}
