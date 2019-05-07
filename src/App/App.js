import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Dropdown from "./components/Dropdown";

const AppGlobaleStyle = createGlobalStyle`
  html { height: 100%; }
  body {
    margin: 0;
    padding: 0;
    font-family: "Xing Sans","Trebuchet MS",Verdana,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20rem;
  min-height: 100vh;
`;

function App() {
  return (
    <Container>
      <AppGlobaleStyle />
      <Dropdown />
    </Container>
  );
}

export default App;
