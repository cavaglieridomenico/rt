import UserList from "../components/UserList";
import UsersLocal from "../components/UsersLocal";

const Users = () => {
  return (
    <div className="page">
      <div className="single-block">
        <UserList />
      </div>
      <div className="single-block">
        <UsersLocal />
      </div>
    </div>
  );
};

export default Users;
