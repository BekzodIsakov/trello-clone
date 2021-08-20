import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task';
import NewTask from './NewTask';

export const ColumnBase = styled.div`
  min-width: 30rem;
  max-width: 30rem;
  max-height: 100%;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: ${(props) => props.theme.colors.gray};
  
  display: inline-grid;
  grid-template-rows: max-content minmax(.01rem, 1fr) max-content;
  `;

const ColumnTitle = styled.h3`
  padding: 1rem 0.8rem;
  font-size: 1.4rem;
  user-select: none;
`;

const TaskList = styled.div`
  overflow-y: auto;
  cursor: pointer;
`;


// snapshot properties
// const drappableSnapshot = {
//   isDraggingOver: true,
//   draggingOverWith: 'task-1',
// }

const Column = ({ column }) => {
  const { tasks } = useSelector((state) => state);
  const { id, title, taskIds } = column;

  return (
    <ColumnBase>
      <ColumnTitle>{title}</ColumnTitle>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {taskIds.map((taskId, index) => {
              return <Task key={taskId} task={tasks[taskId]} index={index} />;
            })}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      <NewTask column={id} />
    </ColumnBase>
  );
};

export default Column;
