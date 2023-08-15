import UseStateExample from "./components/UseStateExample";
import UseEffectExample from "./components/UseEffectExample";
import UseRefExample from "./components/UseRefExample";
import UseMemoExample from "./components/useMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";

const App = () => {
  return (
    <>
      <UseStateExample />
      <hr />
      <UseEffectExample />
      <hr />
      <UseRefExample />
      <hr />
      <UseMemoExample />
      <hr />
      <UseCallbackExample />
    </>
  );
};

export default App;
