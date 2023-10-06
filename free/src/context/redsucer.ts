import type { Context2State, Context2Dispatch } from "../typings/context";

export const reducer = (state: Context2State, action: Context2Dispatch) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + payload,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - payload,
      };
  }
};
