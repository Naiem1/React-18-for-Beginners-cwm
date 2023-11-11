import { useState } from 'react';
import Expandable from './components/ExpandableText';

function App() {
  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'San Francisco',
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 11111 },
    });
  };
  return (
    <div>
      {/* <button onClick={handleClick}>Update</button> */}
      <Expandable maxChars={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempore
        magnam exercitationem, voluptatem vel iste, quas quisquam molestiae
        repellat obcaecati expedita! Consequatur placeat facere sint eius neque
        est quae quam, quod praesentium possimus expedita ipsa animi ullam
        deleniti maiores, itaque dolorem tempore ab in? Sint eligendi
        repellendus, sapiente expedita dignissimos, praesentium temporibus vitae
        quos harum suscipit eius quia iure aperiam totam sunt! Quod, doloremque
        inventore nihil at dolores deleniti minima culpa iure porro praesentium
        eligendi, modi nam ratione reprehenderit, recusandae vel laborum
        impedit. Vitae sapiente earum aut dignissimos adipisci magnam voluptatum
        non veritatis velit sequi nesciunt, illo officiis cumque nihil.
      </Expandable>
    </div>
  );
}

export default App;
