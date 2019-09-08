import styled from 'styled-components';

const Button = styled.button`
  text-transform: capitalize;
  font-size: 16px;
  font-family: "nato_sansregular";
  font-weight: 400;
  background-color: transparent;
  padding: 5px 15px;
  color: #fff;
  border: 0;
  &:focus{
    outline: none;
  }
  &:hover{
    color: var(--mainDark);
  }
`;

export default Button;