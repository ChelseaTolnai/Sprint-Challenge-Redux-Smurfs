import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESSFUL,
  FETCHING_SMURFS_FAILED,
} from '../actions'

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurf: false,
  //  addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
   error: null
 }

function reducer (state = initialState , action) {
  switch(action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingFriends: true,
        fetchedSmurf: false,
        error: null,
      }
    case FETCHING_SMURFS_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        fetchingFriends: false,
        fetchedSmurf: true,
        error: null,
      }
    case FETCHING_SMURFS_FAILED:
      return {
        ...state,
        fetchingFriends: false,
        fetchedSmurf: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;