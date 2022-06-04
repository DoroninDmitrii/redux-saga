import {takeEvery} from "redux-saga/effects";

//take indicate to dispatch to wait define action
// takeevery creates and starts worker saga on every action dispatch
// takeLatest implement last call and previous would be cancel
// takeLeading implement first call and last is cancell 

async function getPeople() {
  const request = await fetch('https://swapi.dev/api/people');
  const data = await request.json();

  return data
}


export function* workerSaga() {
  const data = yield getPeople();
  console.log(data)
}

export function* watchClickSaga() {
  // yield take('CLICK')
  yield takeEvery('CLICK', workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga()
  console.log('Saga is ready!!!');
}
