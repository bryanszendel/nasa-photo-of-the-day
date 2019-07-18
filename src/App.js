import React from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import { Container } from "semantic-ui-react"

function App() {
  return (
    <Container className="App">
      <CardContainer />
    </Container>
  );
}

export default App;
