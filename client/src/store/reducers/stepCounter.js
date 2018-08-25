const INCREMENT = "stepCounter/INCREMENT";
const DECREMENT = "stepCounter/DECREMENT";

const initState = {
  counter: 0
};

export default function stepCounterReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
