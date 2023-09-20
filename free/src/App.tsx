import "./App.css";
import Users from "./components/Users";
import Counter from "./components/Counter";
import UsersLocal from "./components/UsersLocal";
import { AppContextProvider } from "./context/context";
import Display from "./components/Counter2Display";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <>
      <AppContextProvider>
        <Counter2 />
        <Display />
        <hr />
        <Users />
        <hr />
        <Counter />
        <hr />
        <UsersLocal />
      </AppContextProvider>
    </>
  );
}

export default App;
