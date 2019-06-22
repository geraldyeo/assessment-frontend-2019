import React, { useContext }        from 'react'
import { Incident } from '../../components/incident';
import { IncidentContext } from '../../lib/incidents/reducer';

export const Home = () => {
  const {state:{incidents}} = useContext(IncidentContext);
  return (
    <div>
      {incidents.map(({key, title, assignee, status}) => (
        <Incident
          key={key}
          title={title}
          assignee={assignee}
          status={status}
        />
      ))}
    </div>
  )
}

export default Home;