//Dynamic import within another PROMISE
export const getUserData = () => {
  return new Promise(async (resolve, reject) => {
    const data = async () => import("./usersList.json");
    if ((await data())?.default.length > 0) {
      resolve((await data()).default);
    } else {
      reject("No user data");
    }
  });
};
