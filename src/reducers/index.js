import authReducer from './auth_reducer/authReducer';
import tripReducer from './trip_reducer/tripReducer'
import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer/modalsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    trip: tripReducer,
    modals: modalsReducer
})

export default rootReducer;