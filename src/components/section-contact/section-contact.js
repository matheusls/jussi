import { Flex } from 'reflexbox';

import { Container, Heading, Text } from 'components';

import { SectionContactStyled } from './section-contact.styled';

const textColor = 'white';

const SectionContact = () => (
  <SectionContactStyled>
    <Container>
      <Flex alignItems="center" flexDirection="column" justifyContent="center">
        <Heading color={textColor} level={2} marginBottom="2rem" maxWidth="70%">
          Essa loja foi construída usando uma das nossas soluções da plataforma
          VTEX. Tenha a sua.
        </Heading>
        <Text color={textColor} marginBottom="0.5rem">
          Entre em contato
        </Text>
        <Text color={textColor} fontSize="large">
          comercial@jussi.com.br
        </Text>
      </Flex>
    </Container>
  </SectionContactStyled>
);

export default SectionContact;
