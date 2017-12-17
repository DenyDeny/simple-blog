import { ADD_POST } from '../constants/post'
import { loadState } from '../localStorage'

const initialState = loadState() || []
  
  export default function postList(state = initialState, action) {
  
    switch (action.type) {
      case ADD_POST:
        return state.concat([action.payload])
  
      default:
        return state
    }
  
}