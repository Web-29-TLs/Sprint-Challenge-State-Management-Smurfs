import React, { useEffect } from 'react';
import {connect} from 'react-redux';

//actions
import {getSmurfs, deleteSmurfs} from '../actions';



const Smurfs = props => {
    console.log('props from smurfs', props)

    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <div>
            <h1>Here are the smurfs, I guess? </h1>
            {props.smurf && props.smurf.map(s => (
                <div key = {s.id} className = 'smurf-card'>
                    <h4>{s.name}</h4>
                    <p>Age: {s.age}</p>
                    <p>Height: {s.height}</p>
                    <button onClick = {() => props.deleteSmurfs(s.id)}>delete</button>
                    {/* <NewSmurfForm /> */}
                </div>
                
            ))}
            
            {/* {props.smurf && <p>{props.smurf.name}</p>}
            {props.smurf && <p>Age: {props.smurf.age}</p>}
            {props.smurf && <p>Height: {props.smurf.height}</p>} */}
            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        smurf: state.smurf, 
        isFetching: state.isFetching, 
        error: state.error, 
        newSmurf: state.newSmurf
    }
}

export default connect(mapStateToProps, {getSmurfs, deleteSmurfs})(Smurfs);