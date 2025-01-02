import UsersFetch from "../components/Users/UsersFetch";
import UsersLocal from "../components/Users/UsersLocal/UsersLocal";

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
