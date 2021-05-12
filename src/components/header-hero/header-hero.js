import { Box, Flex } from 'reflexbox';

import { Button, Container, Heading, Text } from 'components';

import { HeaderHeroStyled } from './header-hero.styled';

const HeaderHero = () => (
  <HeaderHeroStyled>
    <Container>
      <Flex>
        <Box>
          <Heading
            fontSize="xlarge"
            fontWeight={500}
            lineHeight="1"
            marginBottom="1rem"
            maxWidth="450px"
          >
            Criamos lojas que vendem mais.
          </Heading>
          <Text marginBottom="2rem" maxWidth="330px">
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </Text>
          <Button href="#" variation="blackOutline">
            Veja nossas soluções
          </Button>
        </Box>
      </Flex>
    </Container>
  </HeaderHeroStyled>
);

export default HeaderHero;
