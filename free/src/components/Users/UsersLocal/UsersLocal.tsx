import { useState, useEffect } from "react";
import UsersLocalButtons from "./UsersLocalButtons";
import type { User } from "../../../typings/users";
import { timeout } from "../../../utils/dataUtils";

const UsersLocal = () => {
  const [usersLocal, setUsersLocal] = useState<any>();
  const [usersLocal2, setUsersLocal2] = useState<any>();
  const [usersLocal3, setUsersLocal3] = useState<User[]>([]);
  const [showUsersLocal1, setShowUsersLocal1] = useState(false);
  const [showUsersLocal2, setShowUsersLocal2] = useState(false);
  const [showUsersLocal3, setShowUsersLocal3] = useState(false);

  //Dynamic import with ASYNC AWAIT
  const userData = () => import("../../../utils/usersList.json");

  const handleUsersLocal1 = async () => {
    const data = await userData();
    setUsersLocal(data.default);
    setShowUsersLocal1(true);
  };

  //Dynamic import with THEN
  const handleUser2 = () => {
    userData()
      .then((data) => {
        setUsersLocal2(data.default);
        setShowUsersLocal2(true);
      })
      .catch((message) => console.log(message));
  };

  //Dynamic import with ASYNC AWAIT and TIMEOUT
  const handleUser3 = async () => {
    if (usersLocal3.length !== 0) return;
    const data = await userData();
    for (let user of data.default) {
      setUsersLocal3((prevState) => [...prevState, user]);
      setShowUsersLocal3(true);
      await timeout(3000);
    }
  };

  const removeUsersLocal1 = () => {
    setUsersLocal([]);
    setShowUsersLocal1(false);
  };

  const removeUsersLocal2 = () => {
    setUsersLocal2([]);
    setShowUsersLocal2(false);
  };

  const removeUsersLocal3 = () => {
    setUsersLocal3([]);
    setShowUsersLocal3(false);
  };

  useEffect(() => {
    console.log("UsersLocal rendering");
  });

  const userRendering = (userList: User[]): JSX.Element | JSX.Element[] => {
    return userList?.length > 0 ? (
      userList?.map((user: any, index: number) => (
        <span key={index}>
          {user.name}
          {index === userList.length - 1 ? "" : ", "}
        </span>
      ))
    ) : (
      <span>No user data at this time</span>
    );
  };

  return (
    <>
      <div>
        <span style={{ fontWeight: "bold" }}>
          Users via import local module with and without async await, and with
          timeout
        </span>
        <div style={{ marginTop: ".5rem" }}>
          <button className="text-button" onClick={handleUsersLocal1}>
            Load UsersLocal
          </button>
          <button className="text-button ml-01" onClick={removeUsersLocal1}>
            Remove UsersLocal
          </button>
        </div>
        {showUsersLocal1 ? userRendering(usersLocal) : <></>}
      </div>
      <br />
      <div>
        <div>
          <button className="text-button" onClick={handleUser2}>
            Load UsersLocal
          </button>
          <button className="text-button ml-01" onClick={removeUsersLocal2}>
            Remove UsersLocal
          </button>
        </div>
        {showUsersLocal2 ? userRendering(usersLocal2) : <></>}
      </div>
      <br />
      <UsersLocalButtons
        handleUserLocal={handleUser3}
        removeUserLocal={removeUsersLocal3}
        showUserLocal={showUsersLocal3}
        children={userRendering(usersLocal3)}
      />
    </>
  );
};

export default UsersLocal;
