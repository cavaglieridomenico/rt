import Counter1 from "../components/Counter1/Counter1";
import Counter2 from "../components/Counter2/Counter2";
import Counter2Display from "../components/Counter2/Counter2Display";

const Counters = () => {
  return (
    <div className="page">
      <Counter1 />
      <div className="single-block">
        <Counter2 />
        <Counter2Display />
      </div>
    </div>
  );
};

export default Counters;
