import { Box, Flex } from 'reflexbox';

import { Container, Heading, SolutionCard } from 'components';

import { SectionSolutionsStyled } from './section-solutions.styled';

export const mockProduct = (productNumber) => ({
  description: `Descrição do produto #${productNumber}`,
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  image: `https://via.placeholder.com/100.png/F2F2F2/000?text=P${productNumber}`,
  link: '#',
  name: `Nome do produto #${productNumber}`,
});

export const products = [
  mockProduct(1),
  mockProduct(2),
  mockProduct(3),
  mockProduct(4),
];

const SectionSolutions = () => (
  <SectionSolutionsStyled>
    <Container>
      <Heading
        level={2}
        marginBottom="1.5rem"
        quote={{
          color: 'green',
          size: 'xlarge',
        }}
      >
        Nossas soluções
      </Heading>
      <Flex justifyContent="space-between">
        {products.map(({ description, features, image, link, name }) => (
          <Box key={name}>
            <SolutionCard
              productDescription={description}
              productImage={image}
              productFeatures={features}
              productLink={link}
              productName={name}
            />
          </Box>
        ))}
      </Flex>
    </Container>
  </SectionSolutionsStyled>
);

export default SectionSolutions;
