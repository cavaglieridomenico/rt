import Counter1 from "../components/Counter1/Counter1";
import Counter2 from "../components/Counter2/Counter2";
import Counter2Display from "../components/Counter2/Counter2Display";
import Counter3 from "../components/Counter3/Counter3";
import Counter3Display from "../components/Counter3/Counter3Display";

const Counters = () => {
  return (
    <div className="page">
      <Counter1 />
      <div className="single-block">
        <Counter2 />
        <div className="mt-01">
          <Counter2Display />
        </div>
      </div>
      <div className="single-block">
        <div className="mt-01">
          <Counter3 />
        </div>
        <div className="mt-01">
          <Counter3Display />
        </div>
      </div>
    </div>
  );
};

export default Counters;
