import { useState, useEffect } from "react";
import { getData } from "./typings/utils/dataUtils";

const Users = () => {
  const [users, setUsers] = useState<any>();
  const [users2, setUsers2] = useState<any>();

  useEffect(() => {
    console.log("Users render");
  });

  getData();

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((resp) => resp.json())
  //       .then((data) => setUsers(data));
  //   }, []);

  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       const userList = await response.json();
  //       setUsers2(userList);
  //     };
  //     getUsers();
  //   }, []);

  return (
    <>
      {users?.map((user: any, index: number) => (
        <p key={index}>{user.name}</p>
      ))}
      <br />
      {users2?.map((user: any, index: number) => (
        <p key={index}>{user.name}</p>
      ))}
    </>
  );
};

export default Users;
