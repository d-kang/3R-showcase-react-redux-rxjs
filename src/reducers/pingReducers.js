import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export const pingReducer = (state = initialState.ping, action) => {
  switch (action.type) {
    case types.PING:
      return { isPinging: true };
    case types.PONG:
      return { isPinging: false };
    default:
      return state;
  }
};

const myNextStateExample = {
  isBeeping: true,
  someArr: [],
  foo: 'ooooo',
}

export const beepReducer = (state = initialState.beep, action) => {
  switch (action.type) {
    case types.BEEP:
      return myNextStateExample;
    case types.BOOP:
      return {
        isBeeping: false,
        someArr: action.foo,
        foo: action.foo,
      };
    default:
      return state;
  }
};
