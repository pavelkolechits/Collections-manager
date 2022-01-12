import { ACTIONS } from "../constants";
import { takeEvery, call, put } from "@redux-saga/core/effects";

function* getUsers() {
  try {
    const result = yield call(() => fetch("https://shielded-shore-81654.herokuapp.com/api/users"));

    const request = yield result.json();

    yield put({ type: ACTIONS.GET_USERS_REQUEST_SUCCESS, request });
  } catch (e) {
    console.log(e);
  }
}

function* registration(action) {
  try {

     const body = JSON.stringify({
        name: action.name,
        email: action.email,
        password: action.password,
      });

    yield call(() =>
      fetch("https://shielded-shore-81654.herokuapp.com/api/registration", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: body,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

export function* getNewsWatcher() {
  yield takeEvery(ACTIONS.GET_USERS, getUsers);
  yield takeEvery(ACTIONS.REGISTRATION, registration);
}
