import "./App.css";
import Users from "./components/Users";
import Counter from "./components/Counter";
import UsersLocal from "./components/UsersLocal";
import { AppContextProvider } from "./context/context";
import { Appcontext2Provider } from "./context/context2";
import Display from "./components/Counter2Display";
import Counter2 from "./components/Counter2";
import TodoList from "./components/TodoList";
import Counter3 from "./components/Counter3";
import Counter3Display from "./components/Counter3Display";

function App() {
  return (
    <>
      <Appcontext2Provider>
        <AppContextProvider>
          <Counter3 />
          <Counter3Display />
          <hr />
          <TodoList />
          <hr />
          <Counter2 />
          <Display />
          <hr />
          <Users />
          <hr />
          <Counter />
          <hr />
          <UsersLocal />
        </AppContextProvider>
      </Appcontext2Provider>
    </>
  );
}

export default App;
