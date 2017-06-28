import { Types } from '../constants/user-types';

const initialState = {
    items: ['1', '2', '3'],
    users: []
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case Types.USER:
            return {...state, users: action.payload}
        default:
            return state;
    }
}