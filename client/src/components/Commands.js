import React, { Component } from "react";
import styled from "styled-components";

class Commands extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CommandStyles>
        <div className="buttons">
          <Buttons onClick={() => this.props.move("n")}>N</Buttons>
          <Buttons onClick={() => this.props.move("s")}>S</Buttons>
          <Buttons onClick={() => this.props.move("e")}>E</Buttons>
          <Buttons onClick={() => this.props.move("w")}>W</Buttons>
        </div>
      </CommandStyles>
    );
  }
}

export default Commands;

const CommandStyles = styled.div`
  width: 100%;
  background: #1c1b1b;
  height: 60px;
  display: flex;
  align-items: center;

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const Buttons = styled.button`
  font-size: 2.4rem;
  color: #fff;
  font-weight: 700;
  width: 100%;
  background: #595958;
  border: 1px dashed black;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    color: #e64a02;
    background: #292828;
  }
`;
