import React, { useContext }        from 'react'
import { Incident } from '../../components/incident';
import { HomeLayout, IssuesContent } from '../../layouts/home';
import { IncidentContext } from '../../lib/incidents/reducer';

const renderIncident = ({ key, title, assignee, status }) => (
  <Incident
    key={key}
    title={title}
    assignee={assignee}
    status={status}
  />
);

export const Home = () => {
  const {state:{incidents}} = useContext(IncidentContext);
  return (
    <HomeLayout>
      <IssuesContent>
        <p>Open Issues</p>
        {incidents.filter(i => !i.status).map(renderIncident)}
      </IssuesContent>
      <IssuesContent resolved>
        <p>Resolved Issues</p>
        {incidents.filter(i => i.status).map(renderIncident)}
      </IssuesContent>
    </HomeLayout>
  )
}

export default Home;