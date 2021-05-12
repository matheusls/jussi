import { render, screen } from 'tests/utils';

import Icon, { iconImage } from './icon';

const icons = Object.keys(iconImage);

describe('<Icon />', () => {
  it.each(icons)('%# should render %s Icon correctly', (icon) => {
    render(<Icon name={icon} alt={icon} />);

    expect(screen.getByRole('img', { name: icon })).toBeInTheDocument();
  });
});
