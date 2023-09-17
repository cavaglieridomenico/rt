import { useState, useEffect } from "react";
import { User } from "../typings/users";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [users2, setUsers2] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Ahia!");
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => {
        console.log("Fetch error:", e);
      });
  }, []);

  useEffect(() => {
    const getUsers2 = async () => {
      try {
        const fetchResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (fetchResponse.ok) {
          const userList = await fetchResponse.json();
          setUsers2(userList);
        } else {
          throw new Error("My personal Error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUsers2();
  }, []);

  const usersRendering = (userList: User[]) => {
    {
      return userList.map((user: User, index: number) => (
        <span key={index}>
          {user.name}
          {index === userList.length - 1 ? "" : ", "}
        </span>
      ));
    }
  };

  return (
    <div>
      <div style={{ marginBottom: ".5rem" }}>{usersRendering(users)}</div>
      <div>{usersRendering(users2)}</div>
    </div>
  );
};

export default Users;
