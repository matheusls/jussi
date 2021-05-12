import { render, screen } from 'tests/utils';

import UnorderedList from './unordered-list';

const items = ['item 1', 'item 2', 'item 3'];

describe('<UnorderedList />', () => {
  it('should render UnorderedList component correctly', () => {
    render(
      <UnorderedList>
        {items.map((item) => (
          <UnorderedList.Item key={item}>{item}</UnorderedList.Item>
        ))}
      </UnorderedList>,
    );

    expect(screen.getByRole('list')).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');

    listItems.forEach((listItem, i) => {
      expect(listItem).toHaveTextContent(items[i]);
    });
  });
});
