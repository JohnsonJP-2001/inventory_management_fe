import { UserListType } from "../interface/users.interface"
import { GET_USER_LIST, SET_USER_LIST } from "./users.actionType"


// Interfaces for get user list  - start

export interface getUserList {
    type: typeof GET_USER_LIST
}

// Interfaces for get user list - end

// Interfaces for set user list  - start

export interface setUserListPayload {
    userList: UserListType[]
}

export interface setUserList {
    type: typeof SET_USER_LIST,
    payload: setUserListPayload
}

// Interfaces for set user list - end

export type UsersActions = getUserList | setUserList