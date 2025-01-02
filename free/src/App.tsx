import { Routes, Route } from "react-router-dom";
import { AppContext1Provider } from "./context/context1";
import { Appcontext2Provider } from "./context/context2";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Counters from "./pages/Counters";
import Users from "./pages/Users";
import TodoLists from "./pages/TodoLists";
import NotFound from "./pages/NotFound";
import Games from "./pages/Games";
import SearchbleData from "./pages/SearchbleData";

function App() {
  return (
    <>
      <Appcontext2Provider>
        <AppContext1Provider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="counters" element={<Counters />} />
              <Route path="users" element={<Users />} />
              <Route path="todolists" element={<TodoLists />} />
              <Route path="games" element={<Games />} />
              <Route path="searchble-data" element={<SearchbleData />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AppContext1Provider>
      </Appcontext2Provider>
    </>
  );
}

export default App;
