import React from 'react';
import styled, { css } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import { TagsTitle, Tag} from '../reusable-components';

const TaskBase = styled.div`
  padding: 0.8rem;
  margin-bottom: 0.6rem;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray300};
  border-radius: 0.3rem;
  cursor: inherit;

  ${(props) =>
    props.isDragging &&
    css`
      box-shadow: 0px 6px 19px -4px rgba(184, 184, 184, 0.72);
    `}
`;

const Container = styled.div`
  margin-top: 1rem;
`;

// snapshot properties
// const draggableSnapshot = {
//   isDragging: true,
//   draggingOver: 'column-1',
// }

const Task = ({ task, index }) => {
  const { id, content, tags } = task;
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <TaskBase
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {content}
          <Container>
            <TagsTitle>Tags:</TagsTitle>
            {tags.map((tag, index) => {
              return <Tag key={index}>{tag}</Tag>;
            })}
          </Container>
        </TaskBase>
      )}
    </Draggable>
  );
};

export default Task;
