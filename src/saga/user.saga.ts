import { GET_USER_LIST } from "../actions/users.actionType";
import { getUserList } from "../actions/users.interface";
import { getAllUserListApi } from "../api/user.api";

import { ResponseGenerator } from "./saga.interface";
import { takeLatest, all, call, put } from "redux-saga/effects";

function* GetAllUserList(action: getUserList) {
    try {
        const response: ResponseGenerator = yield call(getAllUserListApi);
        if (response?.status === 200) {
            // yield put(setLatestMessagesList({ data: response?.data }));
        }
    } catch (e) {
        console.log("saga=====>getChatResponseSaga", e)
        return e;
    }
}

function* UserSaga() {
    yield all([takeLatest(GET_USER_LIST, GetAllUserList)]);
}

export default UserSaga;