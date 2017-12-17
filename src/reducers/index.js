import { combineReducers } from 'redux'

import postList from './posts-reducer'

const reducer = combineReducers({
  postList
});

export default reducer