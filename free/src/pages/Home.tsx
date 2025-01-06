import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const activityList: string[] = [
    "counters",
    "users",
    "todolists",
    "games",
    "props",
    "challenges",
  ];
  return (
    <div className="page">
      <div className="single-block">
        <div className="activity-buttons-container flex">
          {activityList.map((activity, index) => (
            <button
              key={index}
              className="custom-button activity-button"
              onClick={() => navigate(`/${activity}`)}
            >
              {activity.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
