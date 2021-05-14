import { Flex } from 'reflexbox';

import { Container, FormNewsletter, Heading } from 'components';

import { SectionNewsletterStyled } from './section-newsletter.styled';

const SectionNewsletter = () => (
  <SectionNewsletterStyled>
    <Container>
      <Flex alignItems="center" flexDirection="column" justifyContent="center">
        <Heading
          color="white"
          level={2}
          marginBottom="2rem"
          maxWidth="55%"
          openQuote={{
            color: 'green',
            left: '-3rem',
            position: 'relative',
            size: '7rem',
          }}
        >
          Receba novidades da nossa área de produtos digitais.
        </Heading>

        <FormNewsletter />
      </Flex>
    </Container>
  </SectionNewsletterStyled>
);

export default SectionNewsletter;
