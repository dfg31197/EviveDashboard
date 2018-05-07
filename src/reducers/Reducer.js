import { combineReducers } from 'redux';
import MetaInfoReducer from './dashboard/MetaInfoReducer';
import miscReducer from './dashboard/miscReducer';
export default combineReducers({
  metaInfo: MetaInfoReducer,
  misc: miscReducer,
});
