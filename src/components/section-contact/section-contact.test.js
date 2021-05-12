import { render, screen } from 'tests/utils';

import SectionContact from './section-contact';

describe('<SectionContact />', () => {
  it('should render SectionContact component correctly', () => {
    render(<SectionContact />);

    expect(
      screen.getByText(
        /essa loja foi construída usando uma das nossas soluções da plataforma vtex\. tenha a sua\./i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/entre em contato/i)).toBeInTheDocument();
    expect(screen.getByText(/comercial@jussi\.com\.br/i)).toBeInTheDocument();
  });
});
