import { arrayOf, string } from 'prop-types';

import { Button, Heading, Image, Text, UnorderedList } from 'components';

import { SolutionCardStyled } from './solution-card.styled';

const listColor = 'greyDark';
const listFontSize = 'small';

const SolutionCard = ({
  productDescription,
  productFeatures,
  productImage,
  productLink,
  productName,
}) => (
  <SolutionCardStyled data-testid="solution-card" maxWidth={241}>
    <Image src={productImage} alt={productName} />
    <Heading
      fontSize="medium"
      fontWeight="normal"
      level={3}
      marginBottom="1rem"
      textTransform="none"
    >
      {productName}
    </Heading>
    <Text color="pink" fontSize="small" marginBottom="1rem">
      {productDescription}
    </Text>
    <UnorderedList
      color={listColor}
      fontSize="small"
      listStyle="disc"
      marginBottom="1rem"
      paddingLeft="1rem"
    >
      {productFeatures?.map((feature, i) => (
        <UnorderedList.Item key={`feature_${i}`} marginBottom="2px">
          <Text color={listColor} fontSize={listFontSize}>
            {feature}
          </Text>
        </UnorderedList.Item>
      ))}
    </UnorderedList>
    <Button href={productLink} variation="green" width="209px">
      Ver solução
    </Button>
  </SolutionCardStyled>
);

SolutionCard.propTypes = {
  productDescription: string.isRequired,
  productFeatures: arrayOf(string).isRequired,
  productImage: string.isRequired,
  productLink: string.isRequired,
  productName: string.isRequired,
};

export default SolutionCard;
