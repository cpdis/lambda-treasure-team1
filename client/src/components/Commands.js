import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Buttons/Button";
import UpdateCommands from "./withCommands";
class Commands extends Component {
  render() {
    const { move } = this.props;
    return (
      <CommandStyles>
        <div className="buttons">
          <Button task={move} title={"N"} />
          <Button task={move} title={"S"} />
          <Button task={move} title={"E"} />
          <Button task={move} title={"W"} />
        </div>
      </CommandStyles>
    );
  }
}

export default Commands;

const CommandStyles = styled.div`
  width: 100%;
  background: #ddd;
  height: 60px;
  display: flex;
  align-items: center;

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    background: #eee;
    height: 100%;
  }
`;
