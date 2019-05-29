import { combineReducers } from 'redux';
import LibraryRedycer from './LibraryReducer'

export default combineReducers({
    libraries: LibraryRedycer
});