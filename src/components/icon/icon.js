import { string } from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

import FacebookIcon from 'static/icons/facebook.png';
import InstagramIcon from 'static/icons/instagram.png';
import LinkedInIcon from 'static/icons/linkedin.png';
import SearchIcon from 'static/icons/search.png';
import ShoppingCartIcon from 'static/icons/shopping-cart.png';

export const iconImage = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  search: SearchIcon,
  shoppingCart: ShoppingCartIcon,
};

const Icon = styled.img.attrs(({ alt, name }) => ({
  alt,
  src: iconImage[name],
}))`
  display: inline-block;
  vertical-align: middle;

  ${space};
`;

Icon.defaultProps = {
  alt: '',
};

Icon.propTypes = {
  alt: string,
  name: string.isRequired,
};

export default Icon;
