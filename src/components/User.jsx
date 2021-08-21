import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import man_1 from '../assets/images/man_1.png';
import man_2 from '../assets/images/man_2.png';
import man_3 from '../assets/images/man_3.png';
import woman_1 from '../assets/images/woman_1.png';

const UserBase = styled.li`
  position: relative;
  width: 6rem;
  height: 6rem;
  margin-right: -1rem;
  background: linear-gradient(to right, #334d50, #cbcaa5);
  border: 0.1rem solid ${(props) => props.theme.colors.gray50};
  border-radius: 50%;
  font-size: 1rem;
  font-weight: bold;
  list-style-type: none;
  cursor: pointer;
  color: white;
  transition-duration: 500ms;
  user-select: none;
  background: ${(props) =>
    props.userId === 'user-1'
      ? `url(${man_1})`
      : props.userId === 'user-2'
      ? `url(${man_2})`
      : props.userId === 'user-3'
      ? `url(${man_3})`
      : `url(${woman_1})`};
  background-size: cover;

  /* :nth-child(1) {
    background:  url(${man_1});
    background-size: cover;
  }

  :nth-child(2) {
    background: url(${man_2});
    background-size: cover;
  }

  :nth-child(3) {
    background: url(${man_3});
    background-size: cover;
  }

  :nth-child(4) {
    background: url(${woman_1});
    background-size: cover;
  } */

  :hover {
    transform: translateX(-1rem);
  }

  span {
    background-color: #0000006e;
    color: ${(props) => props.theme.colors.gray50};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: inherit;
    padding: 0 0.5rem;
    opacity: 0;
    transition-duration: 500ms;
  }

  :hover span {
    opacity: 1;
  }
`;

const User = ({ user }) => {
  const { id, name, taskIds } = user;

  const { tasks } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    let tags = taskIds.map((task) => tasks[task].tags);
    let mergedTags = [];
    for (let i = 0; i < tags.length; i++) {
      mergedTags = [...mergedTags, ...tags[i]];
    }

    dispatch({
      type: 'ADD_TAGS',
      newTags: mergedTags,
    });
  };

  return (
    <UserBase userId={id} onClick={onClickHandler}>
      <span>{name}</span>
    </UserBase>
  );
};

export default User;
