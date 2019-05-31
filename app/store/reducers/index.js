/**
 * Created by guoshuyu on 2017/11/7.
 */

import {combineReducers} from 'redux';
import user from "./user"


export default combineReducers({
    user: user
});

export function clear(state) {
    state().event.received_events_data_list = [];
    state().repository.trend_repos_data_list = [];
}