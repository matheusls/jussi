import { Box, Flex } from 'reflexbox';
import JussiPhoto from 'static/img/image-jussi.png';

import { Button, Container, Heading, Image, Text } from 'components';

import { SectionAboutStyled } from './section-about.styled';

const SectionAbout = () => (
  <SectionAboutStyled>
    <Container>
      <Flex justifyContent="space-between">
        <Box maxWidth="241px">
          <Heading level={2} marginBottom="1.5rem" maxWidth="200px">
            Olá, somos a Jüssi
          </Heading>
          <Text marginBottom="1.5rem">
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </Text>
          <Button href="#" variation="blackOutline">
            Conheça a Jüssi
          </Button>
        </Box>
        <Box>
          <Image src={JussiPhoto} alt="Foto da Jüssi" />
        </Box>
      </Flex>
    </Container>
  </SectionAboutStyled>
);

export default SectionAbout;
