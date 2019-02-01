import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
    return(
        <div className="Smurfs">
            <div className="smurfs-cards-container">
                {props.smurfs.map(smurf => 
                    <Smurf 
                        key={smurf.name} 
                        smurf={smurf}
                        selectSmurf={props.selectSmurf}
                        updatingSmurf={props.updatingSmurf}
                        deleteSmurf={props.deleteSmurf}
                    />
                )}
            </div>
        </div>
    )
};

export default Smurfs;