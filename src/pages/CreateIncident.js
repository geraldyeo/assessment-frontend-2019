import React, {useContext, useState} from 'react';
import cuid from 'cuid';
import {createOneIncident} from '../lib/incidents/actions';
import {IncidentContext} from '../lib/incidents/reducer';

export const CreateIncident = () => {
  const {dispatch} = useContext(IncidentContext);
  const [formValues, setFormValues] = useState({});
  const handleChange = (k, v) => setFormValues({ ...formValues, [k]: v });
  const handleSubmit = e => {
    e.preventDefault();
    const { title, assignee } = formValues;
    if (title && assignee) {
      dispatch(createOneIncident({
        ...formValues,
        status: formValues.status === 'on' ? 'Resolved' : 'Open',
        key: cuid(),
      }));
      setFormValues({ title: '', assignee: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input name="title" value={formValues.title} onChange={e => handleChange('title', e.target.value)}></input>
      </label>
      <label>
        Assignee:
        <input name="assignee" value={formValues.assignee} onChange={e => handleChange('assignee', e.target.value)}></input>
      </label>
      <label>
        Resolved:
        <input name="status" type="checkbox" checked={formValues.status} onChange={e => handleChange('status', e.target.value)}></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}