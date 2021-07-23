import { UserActionTypes } from '../actions';

const usersInitialState = {
    loadingUsers: false,
    data: [],
}


export function users(state = usersInitialState, action) {

    switch (action.type) {

        case UserActionTypes.REQUEST_USERS:

            return { ...state, loadingUsers: true };

        case UserActionTypes.FETCH_USERS_SUCCESS:
            debugger
            return { ...state, data: action.users, loadingUsers: false };

        case UserActionTypes.FETCH_USERS_ERROR:

            return { ...state, data: [], loadingUsers: false };

    }
    return state;

}