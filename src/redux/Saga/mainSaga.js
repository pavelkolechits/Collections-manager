import { ACTIONS } from "../constants";
import { takeEvery, call, put } from "@redux-saga/core/effects";

function* getAllUsers() {
  try {
    const result = yield call(() => fetch("https://shielded-shore-81654.herokuapp.com/api/users"));
    const request = yield result.json();

    yield put({ type: ACTIONS.GET_ALL_USERS_REQUEST_SUCCESS, request });
  } catch (e) {
    console.log(e);
  }
}
function* getUser(action) {
  try {
    const body = JSON.stringify({
      _id: action.id,
    });
    const result = yield call(() =>
      fetch("https://shielded-shore-81654.herokuapp.com/api/get_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: body,
      })
    );
    const request = yield result.json();

    yield put({ type: ACTIONS.GET_USER_REQUEST_SUCCESS, request });
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

    const result = yield call(() =>
      fetch("https://shielded-shore-81654.herokuapp.com/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: body,
      })
    );

    const request = yield result.json();
    yield put({ type: ACTIONS.GET_DATA_OF_NEW_USER, request });
  } catch (e) {
    console.log(e);
  }
}
function* logIn(action) {
  try {
    const body = JSON.stringify({
      email: action.email,
      password: action.password,
    });

    const result = yield call(() =>
      fetch("https://shielded-shore-81654.herokuapp.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: body,
      })
    );
    const request = yield result.json();
    yield put({ type: ACTIONS.GET_USER_DATA, request });
  } catch (e) {
    console.log(e);
  }
}
function* sendItem(action) {
  try {
    const body = JSON.stringify({
      collectionId: action.item.collectionId,
      item: action.item.item,
      _id: action.item.id,
      itemId: getID(),
    });

    const result = yield call(() =>
      fetch("https://shielded-shore-81654.herokuapp.com/api/data_item/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      })
    );
    const request = yield result.json();

    yield put({ type: ACTIONS.GET_USER, id: action.item.id });
  } catch (e) {
    console.log(e);
  }
}

function getID() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function* createCollection(action) {
  try {
    const body = JSON.stringify({
      collectionName: action.collectionName,
      description: action.description,
      _id: action.id,
      img: action.dataImg,
      collectionId: getID(),
    });

    const result = yield call(() =>
      fetch("https://shielded-shore-81654.herokuapp.com/api/create_collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: body,
      })
    );
    const request = yield result.json();

    yield put({ type: ACTIONS.GET_USER, id: action.id });
  } catch (e) {
    console.log(e);
  }
}

export function* watcher() {
  yield takeEvery(ACTIONS.GET_ALL_USERS, getAllUsers);
  yield takeEvery(ACTIONS.REGISTRATION, registration);
  yield takeEvery(ACTIONS.LOGIN, logIn);
  yield takeEvery(ACTIONS.SEND_ITEM, sendItem);
  yield takeEvery(ACTIONS.CREATE_COLLECTION, createCollection);
  yield takeEvery(ACTIONS.GET_USER, getUser);
}
