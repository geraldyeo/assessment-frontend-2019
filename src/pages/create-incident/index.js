import React, {useContext} from 'react';
import cuid from 'cuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {createOneIncident} from '../../lib/incidents/actions';
import {IncidentContext} from '../../lib/incidents/reducer';
import * as ui from './styled';

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



export const CreateIncident = () => {
  const {dispatch} = useContext(IncidentContext);
  const initialValues = { title: '', assignee: '', status: false };
  const handleSubmit = (formValues, { resetForm }) => {
    if (formValues.title && formValues.assignee) {
      dispatch(createOneIncident({
        ...formValues,
        key: cuid(),
      }));
      resetForm(initialValues);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={IncidentSchema}
      onSubmit={handleSubmit}
    >
      {({values}) => (
        <ui.Container resolved={values.status} data-testid="create-incident-container">
          <Form>
            <p>
              <Field
                name="title"
                render={({field}) => (
                <label htmlFor="title">Title:{' '}
                  <ui.Input {...field} placeholder="title" data-testid="title-inp" />
                </label>)}
              />{' '}
              <ErrorMessage name="title" component={ui.ErrorSpan} />
            </p>
            <p>
              <Field
                name="assignee"
                render={({ field }) => (
                  <label htmlFor="assignee">Assignee:{' '}
                    <ui.Input {...field} placeholder="assignee" data-testid="assignee-inp" />
                  </label>)}
              />{' '}
              <ErrorMessage name="assignee" component={ui.ErrorSpan} />
            </p>
            <p>
              <Field
                name="status"
                render={({ field }) => (
                  <label htmlFor="status">Resolved?{' '}
                    <input type="checkbox" {...field} checked={field.value} data-testid="status-cb" />
                  </label>)}
              />
            </p>
            <br />
            <ui.Button type="submit" data-testid="submit-incident">Submit</ui.Button>
          </Form>
        </ui.Container>
      )}
    </Formik>
  );
}

export default CreateIncident;