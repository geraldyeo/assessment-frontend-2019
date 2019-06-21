import React, { useContext }        from 'react'
import { Incident } from '../components/Incident'
import {IncidentContext} from '../lib/incidents/reducer';

export function Home () {
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