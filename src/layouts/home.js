import styled from 'styled-components';

export const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: [open] 1fr [resolved] 1fr;
  grid-column-gap: 1rem;
`;

export const IssuesContent = styled.div`
  grid-column: ${({ resolved }) => resolved ? 'resolved' :'open'};
`;
