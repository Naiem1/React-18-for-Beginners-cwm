import {produce} from 'immer';
import { useState } from 'react';

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'bug 1', fixed: false },
    { id: 2, title: 'bug 2', fixed: false },
    { id: 3, title: 'bug 3', fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);

        if (bug) bug.fixed = true;
      })
    );
  };
  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? 'Fixed' : 'new'}
        </p>
      ))}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
