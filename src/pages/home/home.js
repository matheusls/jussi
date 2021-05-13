import {
  Footer,
  HeaderHero,
  Navbar,
  SectionAbout,
  SectionContact,
  SectionNewsletter,
  SectionSolutions,
  SectionStores,
} from 'components';

const Home = () => (
  <>
    <Navbar />
    <main>
      <HeaderHero />
      <SectionStores />
      <SectionSolutions />
      <SectionAbout />
      <SectionContact />
      <SectionNewsletter />
    </main>
    <Footer />
  </>
);

export default Home;
