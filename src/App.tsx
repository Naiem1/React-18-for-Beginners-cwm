import { useState } from 'react';

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
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
