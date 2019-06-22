import React                              from 'react'
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CreateIncident }                 from './pages/create-incident'
import { Home }                           from './pages/home'
import { Header }                         from './components/header'
import { IncidentProvider } from './lib/incidents/reducer';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
  
  body {
    font-family: 'Open Sans', san-serif;
    font-size: 100%;
  }
`;

function App () {
  return (
    <Router>
      <IncidentProvider>
        <div className="App">
          <GlobalStyles />
          <Header />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateIncident} />
          </div>
        </div>
      </IncidentProvider>
    </Router>
  )
}

export default App
