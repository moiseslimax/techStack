import { combineReducers } from 'redux';
import LibraryRedycer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'

export default combineReducers({
    libraries: LibraryRedycer,
    selectedLibraryId: SelectionReducer
});