import { render, screen } from 'tests/utils';

import HeaderCard from './header-card';

describe('<HeaderCard />', () => {
  it('should render HeaderCard component correctly', () => {
    const props = {
      altText: 'alt text',
      buttonText: 'button text',
      image: 'http://image-url',
    };

    const { altText, buttonText, image } = props;

    render(<HeaderCard {...props} />);

    expect(screen.getByText(buttonText)).toBeInTheDocument();
    expect(screen.getByAltText(altText)).toHaveAttribute('src', image);
  });
});
