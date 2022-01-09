import {
  FooterImageStyled,
  FooterListStyled,
  FooterStyled,
  FooterTitleStyled,
  FooterWrapperStyled,
} from "./Footer.styles";

export default function Footer(props: any) {
  const imagesId = [7, 150, 6, 143];
  const setUrl = (id: Number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
  return (
    <FooterStyled {...props}>
      <FooterWrapperStyled>
        <FooterTitleStyled>Others</FooterTitleStyled>
        <FooterListStyled>
          {imagesId.map((imageId) => (
            <FooterImageStyled key={imageId} href={`/${imageId}`}>
              <img src={setUrl(imageId)} alt={`pokemon`} />
            </FooterImageStyled>
          ))}
        </FooterListStyled>
      </FooterWrapperStyled>
    </FooterStyled>
  );
}
