import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const Smurf = props => {
  return (
    <div className="Smurf">
      <Card body inverse color="primary">
        <CardTitle><h4>{props.smurf.name}</h4></CardTitle>
        <CardText>{props.smurf.height} tall</CardText>
        <CardText>{props.smurf.age} smurf years old</CardText>
      </Card>
    </div>
  );
};

export default Smurf;

