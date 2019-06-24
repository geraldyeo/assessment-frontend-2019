import styled from 'styled-components';
import { StyledContainer } from '../../components/incident';

export const Container = styled(StyledContainer)`
  width: 40vw;
  min-width: 300px;
`;

export const Input = styled.input`
  appearance: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
`;

export const Button = styled.button`
  appearance: none;
  background-color: #2a9d8f;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  padding: 0.5rem 1rem;
`;

export const ErrorSpan = styled.span.attrs({
  'data-testid': 'error-message'
})`
  color: #e76f51;
  font-size: 0.875rem;
`;