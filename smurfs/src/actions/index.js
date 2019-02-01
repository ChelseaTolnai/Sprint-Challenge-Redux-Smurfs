import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESSFUL = "FETCHING_SMURFS_SUCCESSFUL";
export const FETCHING_SMURFS_FAILED = "FETCHING_SMURFS_SUCCESSFUL";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => console.log(res))
    // .then(res => dispatch({ type: FETCHING_SMURFS_SUCCESSFUL, payload: res.data }))
    .catch(err => console.log(err))
    // .catch(err => dispatch({ type: FETCHING_SMURFS_FAILED, payload: err }));
};
