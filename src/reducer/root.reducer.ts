import { combineReducers } from "redux";
import usersReducer from "./users.reducer";

const rootReducer = combineReducers({
    usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;