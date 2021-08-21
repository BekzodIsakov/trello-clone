import React from 'react';
import styled from 'styled-components';

import { Title as StyledTitle } from './AssignTask';
import Assignees from './Assignees';

const AssigneesBoardBase = styled.div`
  margin-top: 0.6rem;
  display: grid;
  grid-template-columns: max-content 1fr;
`;

const Title = styled(StyledTitle)`
  padding-top: 0.3rem;
`;

const AssigneesBoard = ({ assignees }) => {
  return (
    <AssigneesBoardBase>
      <Title>Assigned to:</Title>
      <Assignees assignees={assignees} />
    </AssigneesBoardBase>
  );
};

export default AssigneesBoard;
