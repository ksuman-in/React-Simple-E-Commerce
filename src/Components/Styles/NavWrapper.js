import styled from "styled-components";

const NavWrapper = styled.nav`
  .nav-item a {
    color: #fff;
    text-transform: uppercase;
    &:hover {
      text-decoration: none;
      color: var(--mainBlack);
    }
  }
`;

export default NavWrapper;
