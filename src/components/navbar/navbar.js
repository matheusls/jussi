import { Flex } from 'reflexbox';

import { FormSearch, Icon, Image } from 'components';
import LogoJussi from 'static/img/logoJussiVectorGreen.png';

import { NavbarStyled, NavbarLinkStyled } from './navbar.styled';

const Navbar = () => (
  <NavbarStyled>
    <Flex justifyContent="space-between">
      <Flex alignItems="center">
        <a href="/">
          <Image src={LogoJussi} alt="Logo da Jussi" />
        </a>
        <NavbarLinkStyled href="#">Nossas soluções</NavbarLinkStyled>
        <NavbarLinkStyled href="#">Conheça a Jüssi</NavbarLinkStyled>
      </Flex>
      <Flex alignItems="center">
        <FormSearch />
        <NavbarLinkStyled href="#">Login</NavbarLinkStyled>
        <Icon name="shoppingCart" marginLeft="2rem" />
      </Flex>
    </Flex>
  </NavbarStyled>
);

export default Navbar;
