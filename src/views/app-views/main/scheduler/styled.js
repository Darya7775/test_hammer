import styled, { css } from "styled-components";

const list = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SchedulerStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ListItem = styled.ul`
  ${list};

  display: flex;
  overflow-x: scroll;
`;

export const ItemImage = styled.li`
  &:hover {
    box-shadow: 0px 0px 15px #000000;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    padding: 10px;
  }
`;

export const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListSavedSpreads = styled.ul`
  ${list};

  height: 100px;
  overflow-y: scroll;

  display: grid;
  gap: 5px;
`;
