import React                              from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CreateIncident }                 from './pages/create-incident'
import { Home }                           from './pages/home'
import { Header }                         from './components/header'
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
