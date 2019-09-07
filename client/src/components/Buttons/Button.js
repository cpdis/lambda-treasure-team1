import React from "react";
import styled from "styled-components";
const Button = props => {
  let { title, task } = props;
  return (
    <Buttons className="button" onClick={task}>
      {title}
    </Buttons>
  );
};

export default Button;

const Buttons = styled.button`
  font-size: 2.4rem;
  color: #333;
  font-weight: 700;
  width: 100%;
  border: 1px dashed black;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
