

let count = 0;

const Message = () => {
  count++;
  console.log('messaged called', count);
  return (
    <div>Message count: {count}</div>
  )
}

export default Message