import { Box, Flex } from 'reflexbox';

import { Container, Icon, Image, UnorderedList } from 'components';
import WPPCompanyImage from 'static/img/wppcompany.png';

import { FooterStyled } from './footer.styled';

export const socialMediaLinks = [
  {
    alt: 'Facebook da Jussi',
    href: 'https://www.facebook.com/agencia.jussi',
    icon: 'facebook',
  },
  {
    alt: 'Instagram da Jussi',
    href: 'https://www.instagram.com/jussi',
    icon: 'instagram',
  },
  {
    alt: 'LinkedIn da Jussi',
    href: 'https://www.linkedin.com/company/agencia-jussi/mycompany/',
    icon: 'linkedin',
  },
];

const Footer = () => (
  <FooterStyled>
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <a
            href="https://www.wpp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={WPPCompanyImage} alt="WPP Company" />
          </a>
        </Box>
        <Box>
          <UnorderedList alignItems="center" display="flex" flexDirection="row">
            {socialMediaLinks.map(({ alt, href, icon }) => (
              <UnorderedList.Item key={href} marginLeft="1rem">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon name={icon} alt={alt} />
                </a>
              </UnorderedList.Item>
            ))}
          </UnorderedList>
        </Box>
      </Flex>
    </Container>
  </FooterStyled>
);

export default Footer;
