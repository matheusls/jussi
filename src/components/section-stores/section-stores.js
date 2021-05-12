import { Flex } from 'reflexbox';

import { Container, Heading, Image, Text, UnorderedList } from 'components';
import LogoBrastemp from 'static/img/logo-brastemp.png';
import LogoCompraCerta from 'static/img/logo-compra-certa.png';
import LogoConsul from 'static/img/logo-consul.png';
import LogoTheBar from 'static/img/logo-thebar.png';

import { SectionStoresStyled } from './section-stores.styled';

export const storesImages = [
  [LogoBrastemp, 'Brastemp'],
  [LogoCompraCerta, 'Compra Certa'],
  [LogoConsul, 'Consul'],
  [LogoTheBar, 'The Bar'],
];

const SectionStores = () => (
  <SectionStoresStyled>
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontSize="medium" fontWeight="500" level={2}>
          Nossas principais lojas VTEX
        </Heading>
        <Text>→</Text>
        <UnorderedList alignItems="center" display="flex" flexDirection="row">
          {storesImages.map(([src, alt], i) => {
            const isLastChild = i === storesImages.length - 1;

            return (
              <UnorderedList.Item
                key={alt}
                marginRight={!isLastChild && '3rem'}
              >
                <Image src={src} alt={alt} />
              </UnorderedList.Item>
            );
          })}
        </UnorderedList>
      </Flex>
    </Container>
  </SectionStoresStyled>
);

export default SectionStores;
