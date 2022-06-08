import { useSelector, useDispatch } from "react-redux";

function App() {

  const store = useSelector(store => store);
  const dispatch = useDispatch();
  console.log(store)

  return (
      <div className="App">
      <h1>Hello WORLD</h1>
      </div>
  );
}

export default App;
