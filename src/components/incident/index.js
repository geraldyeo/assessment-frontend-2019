import React, { memo } from 'react';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: ${({ resolved }) => resolved ? '#d8edea' : '#fbf4e3'};
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 1rem;
  padding: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Incident = memo(({title, assignee, status}) => (
  <StyledContainer resolved={status}>
    <p>{title}</p>
    <p>Assignee: {assignee}</p>
    <p>Status: {status ? 'Resolved' : 'Open'}</p>
  </StyledContainer>
));