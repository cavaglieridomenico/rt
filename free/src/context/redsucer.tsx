export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
  }
};
