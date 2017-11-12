import { createEpicMiddleware, combineEpics } from 'redux-observable';

export const PING = 'PING';
export const PONG = 'PONG';
export const BEEP = 'BEEP';
export const BOOP = 'BOOP';

const pingEpic = (action$) => {
  console.log('pingEpic');
  return (
    action$.ofType(PING)
      .delay(1000) // Asynchronously wait 1000ms then continue
      .mapTo({ type: PONG })
  );
};

const beepEpic = (action$) => {
  console.log('action$', action$)
  return (
    action$.ofType(BEEP)
      .delay(1000) // Asynchronously wait 1000ms then continue
      .mapTo({ type: BOOP, foo: 'bar' })
  );
};


const rootEpic = combineEpics(pingEpic, beepEpic);

const epicMiddleware = createEpicMiddleware(rootEpic);

export default epicMiddleware;
