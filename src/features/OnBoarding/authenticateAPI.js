import {all, call, put, takeLatest} from 'redux-saga/effects'
import { login, loginSuccess, loginFailure } from './authenticationSlice';
import { postRequest } from 'config/axiosClient'


function* loginAPI(action) {
  try {
    const response = yield call(() => postRequest('login', action.payload));
    yield put(loginSuccess(response.data));
  } catch (e) {
    yield put(loginFailure());
  }
}


export default function* rootSaga() {
  yield all([takeLatest(login, loginAPI)]);
}
