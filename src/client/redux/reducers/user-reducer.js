import { Types } from '../constants/user-types';

const initialState = {
    items: ['1', '2', '3']
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}