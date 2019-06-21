import React                              from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CreateIncident }                 from './pages/CreateIncident'
import { Home }                           from './pages/Home'
import { Header }                         from './components/Header'
import { IncidentProvider } from './lib/incidents/reducer';

function App () {
  return (
    <Router>
      <IncidentProvider>
        <div className="App">
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
