import { render, screen } from 'tests/utils';

import SolutionCard from './solution-card';

describe('<SolutionCard />', () => {
  it('should render SolutionCard component correctly', () => {
    const props = {
      productDescription: 'Descrição do produto #1',
      productFeatures: ['Feature 1', 'Feature 2', 'Feature 3'],
      productImage: 'https://via.placeholder.com/100.png/F2F2F2/000?text=P1',
      productLink: '#',
      productName: 'Nome do produto #1',
    };

    const { productDescription, productFeatures, productName } = props;

    render(<SolutionCard {...props} />);

    expect(screen.getByAltText(productName)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: productName }),
    ).toBeInTheDocument();
    expect(screen.getByText(productDescription)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ver solução/i })).toHaveAttribute(
      'href',
      '#',
    );
    expect(screen.getByRole('list')).toBeInTheDocument();

    const features = screen.getAllByRole('listitem');

    expect(features).toHaveLength(3);

    features.forEach((feat, i) => {
      expect(feat).toHaveTextContent(productFeatures[i]);
    });
  });
});
