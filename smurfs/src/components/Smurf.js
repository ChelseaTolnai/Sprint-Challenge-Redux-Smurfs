import React from 'react';
import { Card, CardTitle, CardText, Button } from 'reactstrap';

const Smurf = props => {
  return (
    <div className="Smurf">
      <Card>
        <CardTitle><h4>{props.smurf.name}</h4></CardTitle>
        <CardText>{props.smurf.height} tall</CardText>
        <CardText>{props.smurf.age} smurf years old</CardText>
        {props.updatingSmurf 
        ? <Button onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</Button>
        : <Button onClick={() => props.selectSmurf(props.smurf)}>Edit</Button>
        }
      </Card>
    </div>
  );
};

export default Smurf;

