import styled from 'styled-components';

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.colors.blue50};
  color: ${(props) => props.theme.colors.white};
  transition: background 85ms;

  :active {
    background-color: ${(props) => props.theme.colors.blue100};
  }
`;

export default Button;