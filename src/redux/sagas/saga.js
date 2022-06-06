import { takeEvery, take, put, call, fork} from "redux-saga/effects";

//take indicate to dispatch to wait define action (take is block effect)
// takeevery creates and starts worker saga on every action dispatch (block because inside used fork + take)
// takeLatest implement last call and previous would be cancel
// takeLeading implement first call and last is cancell
// put calls dispatch with action and transfer to store
// call implements function. If function returns promise it stope saga and waiting prosime is resolve (call is block effect because he waits result)
// fork is not blocked method and its main for parallel between sagas

async function swapiGet(pattern) {
  const request = await fetch(`https://swapi.dev/api/${pattern}`);
  const data = await request.json();

  return data
}

//first variant
// export function* workerSaga() {
//   const people = yield call(swapiGet, 'people');
//   const planets = yield call(swapiGet, 'planets');

//   yield put({ type: 'SET_PEOPLE', payload: people.results })
//   yield put({ type: 'SET_PLANETS', payload: planets.results })
// }

//second variant
export function* loadPeoples() {
  const people = yield call(swapiGet, 'people');
  yield put({ type: 'SET_PEOPLE', payload: people.results })
}

export function* loadPlanets() {
  const planets = yield call(swapiGet, 'planets');
  yield put({ type: 'SET_PLANETS', payload: planets.results })
}

export function* workerSaga() {
  yield fork(loadPeoples)
  yield fork(loadPlanets)
}

export function* watchLoadDataSaga() {
  yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga() {
  yield fork(watchLoadDataSaga)
  console.log('Saga is ready!!!');
}
