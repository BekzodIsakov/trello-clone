import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { ColumnBase } from './Column';
import { Input, Button } from '../reusable-components';

const NewColumnBase = styled(ColumnBase)`
  height: max-content;
  padding: 1rem;
  cursor: context-menu;
`;

const NewColumn = () => {
  const [newTitle, setNewTitle] = useState('');

  const { columnOrder, columns } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setNewTitle(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (!newTitle) return;
    
    let columnsArray = Object.values(columns);
    let titlesArray = columnsArray.map((column) => column.title);
    if (titlesArray.includes(newTitle)) return;

    let column = `column-${columnOrder.length + 1}`;
    dispatch({
      type: 'ADD_LIST',
      title: newTitle,
      column,
    });
    setNewTitle('');
  };


  return (
    <NewColumnBase>
      <form>
        <Input
          type='text'
          placeholder='Enter list title...'
          value={newTitle}
          onChange={onChangeHandler}
        />
        <Button onClick={onClickHandler}>Add list</Button>
      </form>
    </NewColumnBase>
  );
};

export default NewColumn;
