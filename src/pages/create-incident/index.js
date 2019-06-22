import React, {useContext} from 'react';
import styled from 'styled-components';
import cuid from 'cuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledContainer } from '../../components/incident';
import {createOneIncident} from '../../lib/incidents/actions';
import {IncidentContext} from '../../lib/incidents/reducer';

const IncidentSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  assignee: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  status: Yup.boolean(),
});

const Container = styled(StyledContainer)`
  width: 40vw;
  min-width: 300px;
`;

export const CreateIncident = () => {
  const {dispatch} = useContext(IncidentContext);
  const initialValues = { title: '', assignee: '', status: false };
  const handleSubmit = (formValues, { resetForm }) => {
    dispatch(createOneIncident({
      ...formValues,
      // status: formValues.status ? 'Resolved' : 'Open',
      key: cuid(),
    }));
    resetForm(initialValues);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={IncidentSchema}
        onSubmit={handleSubmit}
      >
        {({values}) => (
          <Container resolved={values.status}>
            <Form>
              <p>
                <Field
                  name="title"
                  render={({field}) => (
                  <label htmlFor="title">Title:{' '}
                    <input {...field} placeholder="title" />
                  </label>)}
                />
                <ErrorMessage name="title" component="div" />
              </p>
              <p>
                <Field
                  name="assignee"
                  render={({ field }) => (
                    <label htmlFor="assignee">Assignee:{' '}
                      <input {...field} placeholder="assignee" />
                    </label>)}
                />
                <ErrorMessage name="assignee" component="div" />
              </p>
              <p>
                <Field
                  name="status"
                  render={({ field }) => (
                    <label htmlFor="status">Resolved?{' '}
                      <input type="checkbox" {...field} checked={field.value} />
                    </label>)}
                />
              </p>
              <br />
              <button type="submit">Submit</button>
            </Form>
          </Container>
        )}
      </Formik>
    </div>
  );
}

export default CreateIncident;