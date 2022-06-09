import { all, call, spawn } from 'redux-saga/effects'
import { loadBasicData } from './initialsSagas/initialsSagas';




export default function* rootSaga() {
  // yield spawn(saga1)
  // yield spawn(saga2) 
  // yield spawn(saga3) 
  const sagas = [loadBasicData];

  const retrySagas = yield sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    })
  })
  yield all(retrySagas)
}
