import { shape, string } from 'prop-types';

import { Button, Image } from 'components';

import { HeaderCardStyled } from './header-card.styled';

const HeaderCard = ({ altText, buttonText, image, positionProps }) => (
  <HeaderCardStyled
    data-testid="header-card"
    height={271}
    maxWidth={215}
    {...positionProps}
  >
    <Image src={image} alt={altText} />
    <Button borderRadiusStyle="pill" href="#" variation="pinkOutline">
      {buttonText}
    </Button>
  </HeaderCardStyled>
);

HeaderCard.propTypes = {
  altText: string.isRequired,
  buttonText: string.isRequired,
  image: string.isRequired,
  positionProps: shape({}),
};

export default HeaderCard;
