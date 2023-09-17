import "./App.css";
import Users from "./components/Users";
import Counter from "./components/Counter";
import UsersLocal from "./components/UsersLocal";

function App() {
  return (
    <>
      <Users />
      <hr />
      <Counter />
      <hr />
      <UsersLocal />
    </>
  );
}

export default App;
