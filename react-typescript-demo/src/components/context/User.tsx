import { useContext } from "react";
import { UserContext } from "./UserContext";

const User2 = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Don",
      email: "asd@gfd.it",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User is {userContext.user?.name}</p>
      <p>Email is {userContext.user?.email}</p>
    </div>
  );
};

export default User2;
