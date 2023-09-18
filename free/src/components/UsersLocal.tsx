import { useState, useEffect } from "react";

const UsersLocal = () => {
  const [UsersLocal, setUsersLocal] = useState<any>();
  const [UsersLocal2, setUsersLocal2] = useState<any>();
  const [showUsersLocal1, setShowUsersLocal1] = useState(false);
  const [showUsersLocal2, setShowUsersLocal2] = useState(false);

  //Dynamic import with ASYNC AWAIT
  const userData = () => import("../utils/usersList.json");

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

  const removeUsersLocal1 = () => {
    setUsersLocal([]);
    setShowUsersLocal1(false);
  };

  const removeUsersLocal2 = () => {
    setUsersLocal2([]);
    setShowUsersLocal2(false);
  };

  useEffect(() => {
    console.log("UsersLocal rendering");
  });

  const userRendering = (userList: []) => {
    return userList?.length > 0
      ? userList?.map((user: any, index: number) => (
          <span key={index}>
            {user.name}
            {index === userList.length - 1 ? "" : ", "}
          </span>
        ))
      : "No user data at this time";
  };

  return (
    <>
      <div>
        <div>
          <button style={{ margin: ".2rem" }} onClick={handleUsersLocal1}>
            Load UsersLocal
          </button>
          <button onClick={removeUsersLocal1}>Remove UsersLocal</button>
        </div>
        {showUsersLocal1 ? userRendering(UsersLocal) : <></>}
      </div>
      <br />
      <div>
        <div>
          <button style={{ margin: ".2rem" }} onClick={handleUser2}>
            Load UsersLocal
          </button>
          <button onClick={removeUsersLocal2}>Remove UsersLocal</button>
        </div>
        {showUsersLocal2 ? userRendering(UsersLocal2) : <></>}
      </div>
      <br />
    </>
  );
};

export default UsersLocal;
