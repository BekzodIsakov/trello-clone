import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Tag } from '../reusable-components';

const AssigneesBase = styled.div`
  width: 20rem;
  padding: 0;

  ul {
    width: 18rem;
    display: flex;
    flex-flow: row wrap;

    li {
      margin-bottom: 0.6rem;
    }
  }
`;

const Assignee = styled(Tag)``;

const Assignees = ({ assignees }) => {
  const { users } = useSelector((state) => state);

  const assigneesArray = assignees.map((user) => users[user]);

  return (
    <AssigneesBase>
      <ul>
        {assigneesArray.map((user) => (
          <Assignee as={'li'} key={user.id}>
            {user.name}
          </Assignee>
        ))}
      </ul>
    </AssigneesBase>
  );
};

export default Assignees;
