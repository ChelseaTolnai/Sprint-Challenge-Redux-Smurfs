import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESSFUL,
  FETCHING_SMURFS_FAILED,

  ADDING_SMURF,
  ADDING_SMURF_SUCCESSFUL,
  ADDING_SMURF_FAILED,

  SELECT_SMURF,

  DELETING_SMURF,
  DELETING_SMURF_SUCCESSFUL,
  DELETING_SMURF_FAILED,
  
} from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
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

    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true,
        error: null,
      }
    case ADDING_SMURF_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        error: null,
      }
    case ADDING_SMURF_FAILED:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      }

    case SELECT_SMURF:
      return {
        ...state,
        smurfs: [action.payload],
        updatingSmurf: true
      }

    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true,
        updatingSmurf: true,
        error: null,
      }
    case DELETING_SMURF_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null,
      }
    case DELETING_SMURF_FAILED:
      return {
        ...state,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload,
      }

    default:
      return state;
  }
}

export default reducer;