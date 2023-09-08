import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Status from "./components/Status";
import Box from "./components/context/Box";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import User2 from "./components/context/User";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import Private from "./components/component-prop/Private";
import Profile from "./components/component-prop/Profile";
import List from "./components/generics/List";
import List2 from "./components/generics/List2";
import RandomNumber from "./components/restriction/RandomNumber";

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isPositive />
      <RandomNumber value={-10} isNegative />
      <RandomNumber value={0} isZero />
      <hr />
      <List2
        items={[{ name: "Max" }, { name: "John" }, { name: "Paul" }]}
        handleClick={(item) => console.log(item)}
      />
      <List
        items={["dog", "cat", "fish"]}
        handleClick={(item) => console.log("My " + item)}
      />
      <List items={[1, 2, 3]} handleClick={(item) => console.log(item)} />
      <hr />
      <Private isLoggedIn={true} component={Profile} />
      <hr />
      <MutableRef />
      <hr />
      <DomRef />
      <hr />
      <ThemeContextProvider>
        <UserContextProvider>
          <User2 />
          <Box />
          <hr />
          <Counter />
          <hr />
          <User />
          <hr />
          <LoggedIn />
          <hr />
          <Container
            styles={{
              width: "100px",
              height: "100px",
              background: "yellow",
              margin: "0 auto",
            }}
          />
          <Input />
          <div>
            <Button
              handleClick={(event, identify) =>
                console.log("Cliked", event.target, identify)
              }
            />
          </div>
          <Oscar>
            <Heading>The winner is...</Heading>
          </Oscar>
          <Status status="loading" />
          <Greet name="VishWas" isLoggedIn={true} />
        </UserContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
