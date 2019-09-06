import React from "react";
import styled from "styled-components";
const Commands = () => {
  return (
    <CommandStyles>
      <div className="buttons">
        <div className="button" onClick={() => this.handleManualMove("n")}>
          N
        </div>
      </div>
    </CommandStyles>
  );
};

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
    width: 5%;
    background: #eee;
    height: 100%;
    .button {
      font-size: 2.4rem;
      color: #333;
      font-weight: 700;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
`;
