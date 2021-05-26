export default function App() {
  return (
    <LogClick>
      <Button
        onClick={() => {
          console.log("button event");
        }}
      />
    </LogClick>
  );
}

function LogClick({ children }) {
  console.log('children', children);
  function trackLog() {
    console.log('click log');
  }

  return (
    <children.type
      {...children.props}
      onClick={event => {
        trackLog();
        children.props.onClick(event);
      }}
    />
  );
}

function Button({ onClick }) {
  return <button onClick={onClick}>버튼</button>;
}
