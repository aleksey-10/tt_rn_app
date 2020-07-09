import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchList } from '../api/api';
import { FETCH_GALLERY, setGallery, setLoading } from './actions';

function* sagaGetGallery() {
  yield put(setLoading(true));

  const payload = yield call(fetchList);

  yield put(setGallery(payload));

  yield put(setLoading(false));
}

export function* sagaWatcher() {
  yield takeEvery(FETCH_GALLERY, sagaGetGallery);
}
