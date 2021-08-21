import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task';
import NewTask from './NewTask';
import { useState } from 'react';

export const ColumnBase = styled.div`
  display: inline-grid;
  grid-template-rows: max-content minmax(0.01rem, 1fr) max-content;
  min-width: 30rem;
  max-width: 30rem;
  max-height: 100%;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: ${(props) => props.theme.colors.gray};
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
  const [tasksArray, setTasksArray] = useState(column.taskIds);

  const { tasks, columns, selectedTag } = useSelector((state) => state);
  let { id, title, taskIds } = column;

  useEffect(() => {
    if (typeof selectedTag === 'object') {
      let newTaskIds = [];

      taskIds.map((taskId) => {
        if (tasks[taskId].tags.includes(selectedTag[0])) {
          newTaskIds.push(taskId);
        }
      });
      setTasksArray(newTaskIds);
    } else {
      setTasksArray(taskIds);
    }
  }, [selectedTag]);

  useEffect(() => {
    setTasksArray(taskIds);
  }, [columns]);

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
            {
              // To show tasks by tag name use tasksArray state instead of taskIds on line below
              // tasksArray.map((taskId, index) => {
              //   return <Task key={taskId} task={tasks[taskId]} index={index} />;
              // })
              taskIds.map((taskId, index) => {
                return <Task key={taskId} task={tasks[taskId]} index={index} />;
              })
            }
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      <NewTask column={id} />
    </ColumnBase>
  );
};

export default Column;
