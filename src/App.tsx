import Button from './components/Button';

function App() {
  return (
    <div>
      <Button  color='danger' onClick={() => console.log('clicked')}>my Button</Button>
    </div>
  );
}

export default App;
