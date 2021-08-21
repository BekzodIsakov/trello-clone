import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Tag as StyledTag } from '../reusable-components';

const TagsBoardBase = styled.div`
  display: flex;
  align-content: flex-start;
  flex-flow: row wrap;
  width: 20rem;
  height: 100%;
  padding: 1rem 0.5rem 0.4rem;
  margin-right: 5rem;
  background-color: ${(props) => props.theme.colors.white};

  overflow-y: auto;
`;

const Tag = styled(StyledTag)`
  margin-bottom: 0.6rem;
  cursor: pointer;

  :first-child {
    font-weight: 600;
  }
`;

const TagsBoard = () => {
  const state = useSelector((state) => state);
  const { tags } = state;

  const dispatch = useDispatch();

  const removeSelectedTag = () => {
    dispatch({
      type: 'REMOVE_SELECTED_TAG',
    });
  };

  const selectTag = (tag) => {
    dispatch({
      type: 'SELECT_TAG',
      newSelectedTag: [tag],
    });
  };

  return (
    <TagsBoardBase>
      <Tag onClick={removeSelectedTag}>All</Tag>
      {tags.map((tag, index) => (
        <Tag onClick={() => selectTag(tag)} key={index}>
          {tag}
        </Tag>
      ))}
    </TagsBoardBase>
  );
};

export default TagsBoard;
