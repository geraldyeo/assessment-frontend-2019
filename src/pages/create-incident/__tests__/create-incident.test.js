import React from 'react';
import { fireEvent, render, cleanup, waitForElement, waitForDomChange, act } from '@testing-library/react';
import 'jest-dom/extend-expect';
import { CreateIncident } from '../index';
import { IncidentProvider } from '../../../lib/incidents/reducer'



afterEach(cleanup);

describe('CreateIncident component', () => {
  test('submitting empty form should display errors', async () => {
    const {getByTestId, getAllByTestId, container} = render(<CreateIncident />, {wrapper: IncidentProvider});
    // check all form inputs are there
    expect(getByTestId('create-incident-container')).toBeDefined();
    expect(getByTestId('title-inp')).toBeDefined();
    expect(getByTestId('assignee-inp')).toBeDefined();
    expect(getByTestId('status-cb')).toBeDefined();
    expect(getByTestId('submit-incident')).toBeDefined();
    // submit empty form
    fireEvent.click(getByTestId('submit-incident'));
    const errorMessages = await waitForElement(() => getAllByTestId('error-message'), {container});
    expect(errorMessages).toHaveLength(2);
  });

  test('checking resolve checkbox should change card color', async () => {
    const {getByTestId} = render(<CreateIncident />, {wrapper: IncidentProvider});
    const incident = getByTestId('create-incident-container');
    // initial bgcolor
    expect(window.getComputedStyle(incident).backgroundColor).toMatchSnapshot();
    fireEvent.click(getByTestId('status-cb'));

    expect(window.getComputedStyle(incident).backgroundColor).toMatchSnapshot();
  });

  test('submitting completed form should reset form', async () => {
    const {getByTestId, container} = render(<CreateIncident />, {wrapper: IncidentProvider});
    const titleInp = getByTestId('title-inp');
    const assigneeInp = getByTestId('assignee-inp');
    const submitBtn = getByTestId('submit-incident');

    fireEvent.change(titleInp, {target:{value:'Second Event'}});
    expect(titleInp.value).toBe('Second Event');

    fireEvent.change(assigneeInp, {target:{value:'User'}});
    expect(assigneeInp.value).toBe('User');

    fireEvent.click(submitBtn);
    const mutated = await waitForDomChange({container});
    expect(mutated).toHaveLength(2);
    expect(titleInp.value).toBe('');
    expect(assigneeInp.value).toBe('');
  });
});