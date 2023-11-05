import UsersFetch from "../components/UsersFetch";
import UsersLocal from "../components/UsersLocal";

const Users = () => {
  return (
    <div className="page">
      <div className="single-block">
        <UsersFetch />
      </div>
      <div className="single-block">
        <UsersLocal />
      </div>
    </div>
  );
};

export default Users;
