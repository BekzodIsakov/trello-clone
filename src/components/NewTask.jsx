import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Input, Button } from '../reusable-components';

const NewTaskBase = styled.div`
  margin-top: 0.6rem;
`;

const NewTask = ({ column }) => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();
    if (!content) return;

    const { tasks, columns } = state;

    const tasksArray = Object.values(tasks);
    const task = `task-${tasksArray.length + 1}`;
    const tagsArray = tags.split(' ');

    const newTask = {
      id: task,
      content,
      tags: tagsArray,
      assignees: [],
    };

    let taskIds = columns[column].taskIds.slice();
    let newTaskIds = [...taskIds, task];

    let newState = {
      ...state,
      tasks: {
        ...state.tasks,
        [task]: newTask,
      },
      columns: {
        ...columns,
        [column]: {
          ...columns[column],
          taskIds: newTaskIds,
        },
      },
    };

    dispatch({
      type: 'ADD_TASK',
      newState,
    });

    setContent('');
    setTags('');
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onChangeTags = (e) => {
    setTags(e.target.value);
  };

  return (
    <NewTaskBase>
      <form>
        <Input
          value={content}
          placeholder={'Enter title for this card...'}
          onChange={onChangeContent}
        />
        <Input
          value={tags}
          placeholder={'Add tags...'}
          onChange={onChangeTags}
        />
        <Button onClick={onClickHandler}>Add task</Button>
      </form>
    </NewTaskBase>
  );
};

export default NewTask;
