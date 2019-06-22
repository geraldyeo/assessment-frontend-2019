import React, { memo } from 'react'

export const Incident = memo(({title, assignee, status}) => (
  <div style={{ border: '1px solid black' }}>
    <p>{title}</p>
    <p>Assignee: {assignee}</p>
    <p>Status: {status}</p>
  </div>
));