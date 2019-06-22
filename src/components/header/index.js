import React    from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 10vw;
  min-width: 120px;
`;

const StyledNavLink = styled(NavLink)`
  color: #264653;
  text-decoration: none;
  &.active {
    color: #2a9d8f
  }
`;

export const Header = () => {
  return (
    <Container>
      <StyledNavLink exact strict to="/">
        Home
      </StyledNavLink>
      <StyledNavLink to='/create'>Create</StyledNavLink>
    </Container>
  )
}

export default Header