import { render, screen } from 'tests/utils';

import HeaderHero from './header-hero';

describe('<HeaderHero />', () => {
  it('should render HeaderHero component correctly', () => {
    render(<HeaderHero />);

    expect(
      screen.getByRole('heading', { name: /criamos lojas que vendem mais./i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /a jüssi é especialista na criação de lojas usando a plataforma vtex\. precisa criar sua loja ou migrar de plataforma\?/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /veja nossas soluções/i }),
    ).toHaveAttribute('href', '#');
    expect(screen.getByAltText(/foto de uma geladeira/i)).toBeInTheDocument();
    expect(screen.getByText(/mais detalhes/i)).toBeInTheDocument();
    expect(screen.getByAltText(/foto de uma batedeira/i)).toBeInTheDocument();
    expect(screen.getByText(/comprar em 12x/i)).toBeInTheDocument();
    expect(
      screen.getByAltText(/foto de uma garrafa de whisky/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/adicionar à sacola/i)).toBeInTheDocument();
  });
});
