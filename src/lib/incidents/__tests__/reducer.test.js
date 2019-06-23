import {createOneIncident} from '../actions';
import {initialState, reducer} from '../reducer';

describe('Incident Reducer', () => {
  test('calling reducer with unknown action returns current state', () => {
    expect(reducer(initialState, {type: 'UNKOWN'})).toBe(initialState);
  });

  test('calling reducer with createOneIncident action adds to state', () => {
    const payload = { key: 'bcg_2', title: 'Second incident', assignee: 'Admin', status: false };
    expect(reducer(initialState, createOneIncident(payload))).toMatchSnapshot();
  });
});