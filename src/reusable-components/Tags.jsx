import styled from 'styled-components';

export const TagsTitle = styled.h5`
  display: inline-block;
`;
export const Tag = styled.span`
  background-color: ${(props) => props.theme.colors.gray};
  font-size: 1.2rem;
  padding: 0.3rem 0.5rem;
  margin-left: 0.5rem;

  display: inline-block;
`;