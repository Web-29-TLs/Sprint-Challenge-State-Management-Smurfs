import axios from 'axios';

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const SEND_SMURFS_START = "SEND_SMURFS_START";
export const SEND_SMURFS_SUCCESS = "SEND_SMURFS_SUCCESS";
export const SEND_SMURFS_FAILURE = "SEND_SMURFS_FAILURE"; 

export const DELETE_SMURF_SUCCESS = "DELETE_SMURFS_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURFS_FAILURE";
export const DELETE_SMURF_START = "DELETE_SMURFS_START";

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START})
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: FETCH_SMURFS_FAILURE, payload: err.res})
        })
}

export const sendSmurfs = (smurf) => dispatch => {
    dispatch({type: SEND_SMURFS_START})
    axios   
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log('res from sendSmurf action', res)
            dispatch({type: SEND_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('err from sendSmurfs', err)
            dispatch({type: SEND_SMURFS_FAILURE, payload: err.message})
        })
}

export const deleteSmurfs = (smurfid) => dispatch => {
    dispatch({type: FETCH_SMURFS_START})
    axios
        .delete(`http://localhost:3333/smurfs/${smurfid}`)
        .then(res => {
            console.log('in the edit action', res)
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('in the edit action', err)
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: err })
        })
}

// doing it this way will require a refresh of the page to show the new list of smurfs
// export const deleteSmurfs = (smurfid) => dispatch => {
//     dispatch({type: DELETE_SMURF_START})
//     axios
//         .delete(`http://localhost:3333/smurfs/${smurfid}`)
//         .then(res => {
//             console.log('in the edit action', res)
//             dispatch({type: DELETE_SMURF_SUCCESS, payload: res.data})
//         })
//         .catch(err => {
//             console.log('in the edit action', err)
//             dispatch({ type: DELETE_SMURF_FAILURE, payload: err })
//         })
// }