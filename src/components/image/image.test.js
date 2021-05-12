import { render, screen } from 'tests/utils';

import Image from './image';

describe('<Image />', () => {
  it('should render Image component correctly', () => {
    render(<Image src="http://image-url" alt="image component" />);

    expect(
      screen.getByRole('img', { name: /image component/i }),
    ).toBeInTheDocument();
  });
});
