import * as React from "react";
import styled, { css } from "styled-components";
import { TextArea } from "react_utils";

const StyledTextArea = styled.article`
  width: 600px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: var(--tx-lg);
  letter-spacing: 1px;
  word-spacing: 5px;
  white-space: wrap;
  font-family: Saira;
  font-weight: 550;
  background-color: var(--grey-light);
  border-radius: var(--br-lg);
  padding: 25px 25px 25px 25px;
  position: relative;

  .textarea {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  label {
    display: none;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    opacity: 0.4;
  }

  .textarea:placeholder-shown ~ label {
    display: initial;
  }
`;

function CommentArea({ className, style }) {
  return (
    <StyledTextArea className={className} style={style}>
      <TextArea name="comment" className="textarea" placeholder=" " />
      <label htmlFor="comment">comments...</label>
    </StyledTextArea>
  );
}

export { CommentArea };
