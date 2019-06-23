import {createOneIncident} from '../actions';

describe('Incident Actions', () => {
  test('createOneIncident should return an action object', () => {
    const payload = { key: 'bcg_1', title: 'First incident', assignee: 'Admin', status: true };
    expect(createOneIncident(payload)).toMatchSnapshot();
  });
});