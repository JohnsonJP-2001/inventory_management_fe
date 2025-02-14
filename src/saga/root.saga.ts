import { all, fork } from "redux-saga/effects";
import UserSaga from "./user.saga";


export function* rootSaga() {
    yield all([
        fork(UserSaga),
    ]);
}