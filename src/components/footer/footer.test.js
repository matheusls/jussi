import { render, screen } from 'tests/utils';

import Footer, { socialMediaLinks } from './footer';

describe('<Footer />', () => {
  it('should render Footer component correctly', () => {
    const allFooterLinks = [
      {
        alt: 'WPP Company',
        href: 'https://www.wpp.com/',
      },
      ...socialMediaLinks,
    ];

    render(<Footer />);

    allFooterLinks.forEach(({ alt }) => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });

    const links = screen.getAllByRole('link');

    links.forEach((link, i) => {
      const { href } = allFooterLinks[i];

      expect(link).toHaveAttribute('href', href);
    });
  });
});
