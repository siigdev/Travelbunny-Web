import authReducer from './auth_reducer/authReducer';
import tripReducer from './trip_reducer/tripReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    trip: tripReducer
})

export default rootReducer;