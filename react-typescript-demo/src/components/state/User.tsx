import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Bob",
      email: "Torton",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <p>User name is {user?.name}</p>
      <p>Email is {user?.email}</p>
    </div>
  );
};

export default User;
