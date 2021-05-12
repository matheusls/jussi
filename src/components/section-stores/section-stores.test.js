import { render, screen } from 'tests/utils';

import SectionStores, { storesImages } from './section-stores';

describe('<SectionStores />', () => {
  it('should render SectionStores component correctly', () => {
    render(<SectionStores />);

    expect(
      screen.getByRole('heading', { name: /nossas principais lojas vtex/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(4);

    storesImages.forEach((image) => {
      const altText = image[1];

      expect(screen.getByAltText(altText)).toBeInTheDocument();
    });
  });
});
