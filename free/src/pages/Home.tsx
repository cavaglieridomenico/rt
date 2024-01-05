const Home = () => {
  return (
    <div className="page">
      <div className="single-block">
        <h2>Popover API</h2>
        <span style={{ margin: "0 .3rem 0 0" }}>Article</span>
        <button popovertarget="info">info</button>
        <div popover="true" id="info" style={{ top: "4.6rem", left: "6rem" }}>
          Extra info
        </div>
      </div>
    </div>
  );
};

export default Home;
