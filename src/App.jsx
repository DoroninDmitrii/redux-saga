import { useSelector, useDispatch } from "react-redux";

function App() {

  const store = useSelector(store => store);
  const dispatch = useDispatch();
  console.log(store)

  return (
      <div className="App">
      <h1>Hello WORLD</h1>
      <button onClick={() => dispatch({ type: 'LOAD_DATA'})}>ClickHere</button>
      </div>
  );
}

export default App;
