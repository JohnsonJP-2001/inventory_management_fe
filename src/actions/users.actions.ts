import { GET_USER_LIST, SET_USER_LIST } from "./users.actionType";
import { getUserList, setUserList, setUserListPayload } from "./users.interface";

export const GetUsetList = (): getUserList => ({
    type: GET_USER_LIST
});

export const SetUserList = (payload: setUserListPayload): setUserList => ({
    type: SET_USER_LIST,
    payload
});