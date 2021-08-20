import React from 'react';
import styled from 'styled-components';
import TagsBoard from './TagsBoard';
import UsersBoard from './UsersBoard';

const HeaderBase = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 10rem;
  background-color: ${(props) => props.theme.colors.gray50};
  background: rgba(114, 152, 166, 0.24);
  padding: 0.4rem;
`;

const Header = () => {
  return (
    <HeaderBase>
      <TagsBoard />
      <UsersBoard />
    </HeaderBase>
  );
};

export default Header;
