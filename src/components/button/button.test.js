import { theme } from 'styles';
import { render, screen } from 'tests/utils';

import Button from './button';
import { buttonVariations } from './get-button-variation';

const buttonVariationNames = Object.keys(buttonVariations);

describe('<Button />', () => {
  it('should render Button component correctly', () => {
    render(<Button>button component</Button>);

    expect(screen.getByText(/button component/i)).toBeInTheDocument();
  });

  it('should render Button as link component correctly', () => {
    const testUrl = 'http://test-link/';

    render(<Button href={testUrl}>button as link component</Button>);

    const link = screen.getByRole('link', {
      name: /button as link component/i,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', testUrl);
  });

  it.each(buttonVariationNames)(
    '%# should render Button with variation %s',
    (variation) => {
      const { backgroundColor, borderColor, color } = buttonVariations[
        variation
      ];

      const { colors } = theme;

      render(<Button variation={variation}>button component</Button>);

      const button = screen.getByText(/button component/i);

      expect(button).toHaveStyleRule(
        'background-color',
        colors[backgroundColor] ?? 'transparent',
      );
      expect(button).toHaveStyleRule('border-color', colors[borderColor]);
      expect(button).toHaveStyleRule('color', colors[color]);
    },
  );
});
