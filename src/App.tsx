import { useState } from 'react';
import Message from './components/Message';

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });
  const [pizza, setPizza] = useState({
    nam: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  })
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  });

  const handleClickGame = () => {
    setCart({ ...game, player: {...game.player, name: 'Doe'}})
  }

  const handleClickPizza = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']})
  }


  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Update</button>
      <Message/>
    </div>
  );
}

export default App;
