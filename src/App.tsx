import { useState } from 'react';

function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    // Add item
    setTags([...tags, 'exciting']);

    // Remove an item
    setTags(tags.filter((tag) => tag !== 'happy'));

    // Update an item
    setTags(tags.map((tag) => (tag === 'cheerful' ? 'yahoo' : tag)));
  };
  return (
    <div>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
