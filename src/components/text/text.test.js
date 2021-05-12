import { theme, colorAliases, fontSizeAliases } from 'styles';
import { render, screen } from 'tests/utils';
import { textTransformOptions } from 'utils';

import Text from './text';

describe('<Text />', () => {
  it('should render Text component correctly', () => {
    render(<Text>text component</Text>);

    expect(screen.getByText(/text component/i)).toBeInTheDocument();
  });

  it.each(colorAliases)('%# should render Text with color %s', (color) => {
    const { colors } = theme;

    render(<Text color={color}>text component</Text>);

    expect(screen.getByText(/text component/i)).toHaveStyleRule(
      'color',
      colors[color],
    );
  });

  it.each(fontSizeAliases)(
    '%# should render Text with font size %s',
    (fontSize) => {
      const { fontSizes } = theme;

      render(<Text fontSize={fontSize}>text component</Text>);

      expect(screen.getByText(/text component/i)).toHaveStyleRule(
        'font-size',
        fontSizes[fontSize],
      );
    },
  );

  it.each(textTransformOptions)(
    '%# should render Text with text transform %s',
    (textTransform) => {
      render(<Text textTransform={textTransform}>text component</Text>);

      expect(screen.getByText(/text component/i)).toHaveStyleRule(
        'text-transform',
        textTransform,
      );
    },
  );

  it('should render Text component with label tag', () => {
    const { container } = render(<Text tag="label">text component</Text>);

    const label = container.querySelector('label');

    expect(label).toBeInTheDocument();
  });
});
