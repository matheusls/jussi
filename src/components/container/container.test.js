import { render, screen } from 'tests/utils';

import Container from './container';

describe('<Container />', () => {
  it('should render Container component correctly', () => {
    render(<Container>container component</Container>);

    expect(screen.getByText(/container component/i)).toBeInTheDocument();
  });
});
