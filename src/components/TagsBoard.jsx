import React from 'react';
import { useSelector } from 'react-redux';
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
  cursor: default;
`;

const TagsBoard = () => {
  const state = useSelector((state) => state);
  const { tags } = state;

  return (
    <TagsBoardBase>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </TagsBoardBase>
  );
};

export default TagsBoard;
