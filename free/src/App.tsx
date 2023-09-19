import "./App.css";
import Users from "./components/Users";
import Counter from "./components/Counter";
import UsersLocal from "./components/UsersLocal";
import { AppContextProvider } from "./context/context";
import Display from "./components/Display";

function App() {
  return (
    <>
      <AppContextProvider>
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
