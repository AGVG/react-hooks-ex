import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const ListElement = styled.li`
  border: 1px solid black;
  padding: 1rem 0.5rem;
`;

const listElements = [
  { value: "1st", label: "1st" },
  { value: "2nd", label: "2nd" },
  { value: "3rd", label: "3rd" },
  { value: "4th", label: "4th" }
];

const List = ({ onClick }) => (
  <Container>
    {listElements.map(({ value, label }) => (
      <ListElement onClick={onClick(value)} key={label}>
        {value}
      </ListElement>
    ))}
  </Container>
);

export default List;
