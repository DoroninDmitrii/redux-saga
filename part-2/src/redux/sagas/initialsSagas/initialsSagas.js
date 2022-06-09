import { all, call, delay, fork, spawn } from 'redux-saga/effects'

// all starts all effects parallel and waits when completed

function* auth() {
  yield delay(2000);

  console.log('auth is okay')

  return true
}

function* loadUsers() {
  const request = yield call(fetch, 'https://swapi.dev/api/people');
  const data = yield call([request, request.json]);

  console.log('data', data);
}


export function* loadBasicData() {
  yield all([
    fork(auth),
    fork(loadUsers)
  ])
  
}
