import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESSFUL,
  FETCHING_SMURFS_FAILED,
} from '../actions'

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
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
        smurfs: [],
        fetchingSmurfs: true,
        error: null,
      }
    case FETCHING_SMURFS_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null,
      }
    case FETCHING_SMURFS_FAILED:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: false,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;