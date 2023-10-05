import "./App.css";
import Users from "./components/Users";
import Counter1 from "./components/Counter1";
import UsersLocal from "./components/UsersLocal";
import { AppContext1Provider } from "./context/context1";
import { Appcontext2Provider } from "./context/context2";
import Display from "./components/Counter2Display";
import Counter2 from "./components/Counter2";
import TodoList from "./components/TodoList";
import Counter3 from "./components/Counter3";
import Counter3Display from "./components/Counter3Display";
import TodoList2 from "./components/TodoList2";

function App() {
  return (
    <>
      <Appcontext2Provider>
        <AppContext1Provider>
          <TodoList2 />
          <hr />
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
          <Counter1 />
          <hr />
          <UsersLocal />
        </AppContext1Provider>
      </Appcontext2Provider>
    </>
  );
}

export default App;
