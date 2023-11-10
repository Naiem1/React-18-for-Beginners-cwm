import { MouseEvent } from "react";

const ListGroup = () => {
  const items = ['New York', 'San Francisco', 'London', 'Tokyo', 'Paris'];
  // items = [];


  const message = items.length === 0 ? <p>No Item Found!</p> : null;
  const getMessage = () => {
    return items.length === 0 ? <p>Item Not Found</p> : null;
  };


  const handleClick = (event:MouseEvent) => {
    console.log(event.target)
  }
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {message}
        {getMessage()}
        {items.length === 0 ? <p>Item not Found</p> : null}
        {items.length === 0 && <p>Item Not Found!</p>}
        {items.map((item) => (
          <li key={item} className="list-group-item active" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
