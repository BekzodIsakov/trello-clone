import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import User from './User';

const UsersBoardBase = styled.div`
  display: flex;
  align-items: center;
  min-width: 30rem;
  padding: 1rem;
  margin-right: 10rem;
  border-radius: 0.3rem;
  overflow-x: auto;

  ul {
    display: flex;
  }
`;

const UsersBoard = () => {
  const { users } = useSelector((state) => state);
  const usersArray = Object.values(users);

  return (
    <UsersBoardBase>
      <ul>
        {usersArray.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </ul>
    </UsersBoardBase>
  );
};

export default UsersBoard;
