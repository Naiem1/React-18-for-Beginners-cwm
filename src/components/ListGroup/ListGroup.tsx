import { useState } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 10px;
`;
interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? 'blue' : 'none')};
`;
interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectedItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0); // select first item default

  return (
    <>
      <h1>{heading}</h1>
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
