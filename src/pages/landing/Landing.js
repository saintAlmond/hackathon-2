import React from 'react';
import  { useHistory } from 'react-router-dom';
import isa from '../../img/Isa.jpeg'; // gives image path
import pablo from '../../img/Pablo.jpeg'; // gives image path
import { Button } from '@material-ui/core';
import './Landing.css';
import { COVIDCHARTS } from '../../routes/routes';


const Landing = () => {

    const history = useHistory();

    return(
        <div className="container">
            <h1>Hackathon 2 - Team</h1>
            <div className="cards">
                <img src={isa} alt="menber of team" />
                <img src={pablo} alt="menber of team" />
            </div>
            <div></div>
            <Button onClick={() => history.push(COVIDCHARTS)} variant="outlined" color="primary">
            Go to Covid Graphics
            </Button>
        </div>
       
    );
}

export default Landing;