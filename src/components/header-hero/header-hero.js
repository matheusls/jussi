import { Box, Flex } from 'reflexbox';

import { Button, Container, HeaderCard, Heading, Text } from 'components';
import Batedeira from 'static/img/batedeira.png';
import Geladeira from 'static/img/geladeira.png';
import Whisky from 'static/img/whisky.png';

import { HeaderHeroStyled } from './header-hero.styled';

const HeaderHero = () => (
  <HeaderHeroStyled>
    <Container>
      <Flex justifyContent="space-between">
        <Box paddingY="5rem">
          <Heading
            fontSize="xlarge"
            fontWeight={500}
            lineHeight="1"
            marginBottom="1rem"
            maxWidth="450px"
            openQuote={{
              color: 'white',
              left: '-6rem',
              position: 'absolute',
              top: '4.5rem',
              size: '12rem',
            }}
          >
            Criamos lojas que vendem mais.
          </Heading>
          <Text marginBottom="2rem" maxWidth="330px">
            A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
            Precisa criar sua loja ou migrar de plataforma?
          </Text>
          <Button href="#" maxWidth={200} variation="blackOutline">
            Veja nossas soluções
          </Button>
        </Box>
        <Box maxWidth={460} sx={{ position: 'relative' }} width="50%">
          <HeaderCard
            altText="Foto de uma geladeira"
            buttonText="Mais Detalhes"
            image={Geladeira}
            positionProps={{
              bottom: '4rem',
              left: 0,
              position: 'absolute',
              zIndex: 1,
            }}
          />
          <HeaderCard
            altText="Foto de uma batedeira"
            buttonText="Comprar em 12x"
            image={Batedeira}
            positionProps={{
              position: 'absolute',
              right: '30%',
              top: '4rem',
              zIndex: 2,
            }}
          />
          <HeaderCard
            altText="Foto de uma garrafa de whisky"
            buttonText="Adicionar à sacola"
            image={Whisky}
            positionProps={{
              bottom: '2rem',
              position: 'absolute',
              right: 0,
              zIndex: 1,
            }}
          />
        </Box>
      </Flex>
    </Container>
  </HeaderHeroStyled>
);

export default HeaderHero;
