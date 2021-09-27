import { all, put, call, takeEvery } from 'redux-saga/effects';
import { GET_ORG, setOrg } from './joinOrgReducer';
import { fetchOrg } from '../config/axiosClient';

function* fetchOrgData() {
  const json = yield call(fetchOrg);
  yield put(setOrg(json.data));
}

export default function* organizationSaga() {
  yield all([takeEvery(GET_ORG, fetchOrgData)]);
}
