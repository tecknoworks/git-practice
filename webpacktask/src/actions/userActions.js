import UserService from '../services/userService';
import { responseToJson } from '../utils';

export const UserActionTypes = {
    REQUEST_USERS: "REQUEST_USERS",
    FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR: "FETCH_USERS_ERROR",
};



// Fetch Users

export function requestUsers(filters) {
    return {
        type: UserActionTypes.REQUEST_USERS,
    };
}

export function fetchUsersSuccess(users) {
    return {
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        users
    };
}

export function fetchUsersError(error) {
    return {
        type: UserActionTypes.FETCH_USERS_ERROR,
        error
    };
}

export function fetchUsers() {

    return dispatch => {
        dispatch(requestUsers());

        return UserService.fetchUsers()
            .then(response => responseToJson(response))
            .then(json => dispatch(fetchUsersSuccess(json)))
            .catch(error => {

                dispatch(fetchUsersError(error));
            });

    };

}