import { render, screen } from 'tests/utils';

import SectionAbout from './section-about';

describe('<SectionAbout />', () => {
  it('should render SectionAbout component correctly', () => {
    render(<SectionAbout />);

    expect(
      screen.getByRole('heading', { level: 2, name: /olá, somos a jüssi/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /conheça a jüssi/i }),
    ).toHaveAttribute('href', '#');
    expect(screen.getByAltText(/foto da jüssi/i)).toBeInTheDocument();
  });
});
