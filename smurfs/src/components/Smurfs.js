import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
    return(
        <div className="Smurfs">
            <div className="smurfs-cards-container">
                {props.smurfs.map(smurf => 
                    <Smurf key={smurf.name} smurf={smurf}/>
                )}
            </div>
        </div>
    )
};

export default Smurfs;