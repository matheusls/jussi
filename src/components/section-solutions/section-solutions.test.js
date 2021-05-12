import { render, screen, within } from 'tests/utils';

import SectionSolutions, { products } from './section-solutions';

describe('<SectionSolutions />', () => {
  it('should render SectionSolutions component correctly', () => {
    render(<SectionSolutions />);

    const solutionCards = screen.getAllByTestId('solution-card');

    expect(solutionCards).toHaveLength(4);

    solutionCards.forEach((card, i) => {
      const { description, features, name } = products[i];

      expect(within(card).getByAltText(name)).toBeInTheDocument();
      expect(within(card).getByRole('heading', { name })).toBeInTheDocument();
      expect(within(card).getByText(description)).toBeInTheDocument();
      expect(
        within(card).getByRole('link', { name: /ver solução/i }),
      ).toHaveAttribute('href', '#');
      expect(within(card).getByRole('list')).toBeInTheDocument();

      const productFeatures = within(card).getAllByRole('listitem');

      expect(productFeatures).toHaveLength(3);

      productFeatures.forEach((feat, i) => {
        expect(feat).toHaveTextContent(features[i]);
      });
    });
  });
});
