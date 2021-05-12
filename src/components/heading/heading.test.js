import { theme, colorAliases, fontSizeAliases } from 'styles';
import { render, screen } from 'tests/utils';
import { textTransformOptions } from 'utils';

import Heading, { headingLevels } from './heading';

describe('<Heading />', () => {
  it('should render Heading component correctly', () => {
    render(<Heading>heading component</Heading>);

    expect(screen.getByText(/heading component/i)).toBeInTheDocument();
  });

  it.each(headingLevels)('%# should render Heading with level %s', (level) => {
    render(<Heading level={level}>heading component</Heading>);

    expect(screen.getByRole('heading', { level })).toBeInTheDocument();
  });

  it.each(colorAliases)('%# should render Heading with color %s', (color) => {
    const { colors } = theme;

    render(<Heading color={color}>heading component</Heading>);

    expect(screen.getByText(/heading component/i)).toHaveStyleRule(
      'color',
      colors[color],
    );
  });

  it.each(fontSizeAliases)(
    '%# should render Heading with font size %s',
    (fontSize) => {
      const { fontSizes } = theme;

      render(<Heading fontSize={fontSize}>heading component</Heading>);

      expect(screen.getByText(/heading component/i)).toHaveStyleRule(
        'font-size',
        fontSizes[fontSize],
      );
    },
  );

  it.each(textTransformOptions)(
    '%# should render Heading with text transform %s',
    (textTransform) => {
      render(
        <Heading textTransform={textTransform}>heading component</Heading>,
      );

      expect(screen.getByText(/heading component/i)).toHaveStyleRule(
        'text-transform',
        textTransform,
      );
    },
  );
});
