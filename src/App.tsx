import ListGroup from './components/ListGroup/';

function App() {
  const items = ['React.js', 'Angular.js', 'Veu.js'];
  const handleSelectedItem = () => {
    console.log('clicked');
  };
  return (
    <div>
      <ListGroup
        heading="Libraries"
        items={items}
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
