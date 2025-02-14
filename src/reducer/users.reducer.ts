import { SET_USER_LIST } from "../actions/users.actionType";
import { UsersActions } from "../actions/users.interface";
import { UserListType } from "../interface/users.interface";

interface UsersInitialState {
    userList: UserListType[]
}

const initialState: UsersInitialState = {
    userList: []
};

export default (state = initialState, action: UsersActions) => {
    switch (action.type) {
        case SET_USER_LIST:
            return {
                ...state,
                userList: action.payload.userList,
            };

        default:
            return {
                ...state,
            };
    }
};