import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  Button as StyledButton,
  Input as StyledInput,
  TagsTitle,
} from '../reusable-components';

const AssignTaskBase = styled.div`
  margin-top: 0.6rem;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
`;

const SearchBox = styled.form`
  display: inline-grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 0.6rem;
  height: 3.2rem;
`;

const Title = styled(TagsTitle)`
  margin-right: 0.6rem;
`;

const Input = styled(StyledInput)`
  background-color: ${(props) => props.theme.colors.gray};
`;

const Button = styled(StyledButton)`
  height: 3.2rem;
`;

const AssignTask = ({ taskId }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const InputRef = useRef();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const usersArray = Object.values(state.users);

  const getUser = (e) => {
    setSelectedUser(e.target.value);
  };

  const assignTask = (e) => {
    e.preventDefault();
    if (!selectedUser) return;

    let userId;
    usersArray.map((user) => {
      if (user.name === selectedUser) {
        userId = user.id;
      }
    });

    let { taskIds } = state.users[userId];
    let newTaskIds;

    if (!taskIds.includes(taskId)) {
      newTaskIds = [...taskIds, taskId];
      console.log(newTaskIds);

      let newState = {
        ...state,
        users: {
          ...state.users,
          [userId]: {
            ...state.users[userId],
            taskIds: newTaskIds,
          },
        },
      };

      console.log(newState);

      dispatch({
        type: 'ASSIGN_TASK',
        newState,
      });
    }

    InputRef.current.value = '';
  };

  return (
    <AssignTaskBase>
      <Title>Assign to:</Title>
      <SearchBox>
        <Input ref={InputRef} list='users' name='user' onChange={getUser} />
        <datalist id='users'>
          {usersArray.map((user) => (
            <option value={user.name} key={user.id} />
          ))}
        </datalist>
        <Button onClick={assignTask}>Done</Button>
      </SearchBox>
    </AssignTaskBase>
  );
};

export default AssignTask;
