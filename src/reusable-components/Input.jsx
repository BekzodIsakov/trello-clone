import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  margin-bottom: 0.6rem;
  border: none;

  outline: none;
  cursor: text;
  font-family: 'Montserrat', arial;
  font-weight: 500;

  :focus {
    box-shadow: inset 0 0 0 0.2rem ${(props) => props.theme.colors.blue};
  }
  :placeholder-shown {
    cursor: pointer;
  }
`;

export default Input;