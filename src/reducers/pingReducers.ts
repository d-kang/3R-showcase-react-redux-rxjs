import * as types from '../actions/actionTypes';
import { initialState } from './initialState';

export const pingReducer = (state = initialState.ping, action: object) => {
  switch (action.type) {
    case types.PING:
      return { isPinging: true };
    case types.PONG:
      return { isPinging: false };
    default:
      return state;
  }
};


export const beepReducer = (state = initialState.beep, action: object) => {
  switch (action.type) {
    case types.BEEP:
      return {
        isBeeping: true,
        someArr: [],
        foo: 'ooooo',
      };
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
