import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Landing from './pages/landing/Landing';
import CovidCharts from './pages/covidCharts/CovidCharts';
import { COVIDCHARTS } from './routes/routes';

const  App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Landing/>
          </Route>
          <Route exact path={COVIDCHARTS}>
            <CovidCharts/>
          </Route>
        </Switch>
      </BrowserRouter>
		
    </div>
  );
}

export default App;