import { ACTIONS } from "../constants";
import { takeEvery, call, put } from "@redux-saga/core/effects";

function* getAllUsers() {
  try {
    const result = yield call(() => fetch("https://shielded-shore-81654.herokuapp.com/api/users"));
    const request = yield result.json();
    console.log(request);
    yield put({ type: ACTIONS.GET_ALL_USERS_REQUEST_SUCCESS, request });
  } catch (e) {
    console.log(e);
  }
}
function* getUser(action) {
  try {
    console.log("works", action);
    const body = JSON.stringify({
      _id: action.id,
    });
    const result = yield call(() =>
      fetch("https://shielded-shore-81654.herokuapp.com/api/get-user", {
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
      item: action.item,
      _id: action.id,
    });

    const result = yield call(() =>
      fetch("https://shielded-shore-81654.herokuapp.com/api/data-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: body,
      })
    );
    const request = yield result.json();
    console.log(request);
  } catch (e) {
    console.log(e);
  }
}
function* createCollection(action) {
  function getID() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
  try {
    const body = JSON.stringify({
      collectionName: action.collectionName,
      description: action.description,
      _id: action.id,
      img: action.dataImg,
      collectionId: getID()
    });
    console.log(body);

    const result = yield call(() =>
      fetch("https://shielded-shore-81654.herokuapp.com/api/create-collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: body,
      })
    );
    const request = yield result.json();
    console.log(request);
    console.log(action, "create collection");
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
