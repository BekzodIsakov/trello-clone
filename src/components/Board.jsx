import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';

import Column from './Column';
import NewColumn from './NewColumn';

const BoardBase = styled.main`
  display: flex; 
  align-items: flex-start;
  flex-flow: row nowrap;
  padding: 1rem 0.8rem;
  overflow-x: auto;
`;

const Board = () => {
  const state = useSelector((state) => state);
  const { columnOrder, columns } = state;

  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    const { draggableId, source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return true;
    }

    const sourceColumn = columns[source.droppableId];
    const destinationColumn = columns[destination.droppableId];

    if (sourceColumn === destinationColumn) {
      const newTaskIds = Array.from(sourceColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      dispatch({
        type: 'DROP_TASK',
        newState,
      });
    } else {
      const sourceTaskIds = Array.from(sourceColumn.taskIds);
      const destinationTaskIds = Array.from(destinationColumn.taskIds);
      sourceTaskIds.splice(source.index, 1);
      destinationTaskIds.splice(destination.index, 0, draggableId);

      const newSourceColumn = {
        ...sourceColumn,
        taskIds: sourceTaskIds,
      };

      const newDestinationColumn = {
        ...destinationColumn,
        taskIds: destinationTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newSourceColumn.id]: newSourceColumn,
          [newDestinationColumn.id]: newDestinationColumn,
        },
      };

      dispatch({
        type: 'DROP_TASK',
        newState,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardBase>
        {columnOrder.map((columnId) => {
          return <Column key={columnId} column={columns[columnId]} />;
        })}
        <NewColumn />
      </BoardBase>
    </DragDropContext>
  );
};

export default Board;
