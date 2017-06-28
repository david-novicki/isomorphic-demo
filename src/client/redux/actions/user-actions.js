import { Types } from '../constants/user-types';
import Request from 'axios';

export function getUser() {
    // return {
    //     type: Types.USER
    // }
    //https://randomuser.me/api/
    return async function (dispatch, getState) {
        let results = await Request.get('https://randomuser.me/api/');
        //console.log(results.data.results);
        dispatch({
            type: Types.USER, 
            payload: results.data.results
        })
    }
}
