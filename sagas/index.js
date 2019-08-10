import { put, takeLatest, all } from 'redux-saga/effects';
import { itemReceived } from '../actions/index';

function* fetchNews() {
  try {
    const json = yield fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=00913a65-6cff-4b20-b7e1-57d6a7e34167')
        .then(response => {
          return response.json()
        });
    yield put(itemReceived(json.data));
  } catch (err) {
    console.log(err)
  }
}
function* actionWatcher() {
     yield takeLatest('GET_ITEM', fetchNews)
}
export default function* rootSaga() {
   yield all([
    actionWatcher(),
   ]);
}