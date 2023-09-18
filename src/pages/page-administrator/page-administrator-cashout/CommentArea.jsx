import * as React from "react";
import styled, { css } from "styled-components";
import { TextArea } from "react_utils";
import BackgroundImage from "agent_factory.shared/ui/new-icons/cash-out-agent-watermark.png";

const StyledTextArea = styled.article`
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 700px;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: var(--tx-lg);
  letter-spacing: 1px;
  word-spacing: 5px;
  white-space: wrap;
  font-family: Saira;
  font-weight: 550;
  background-color: white;
  box-shadow: var(--sd-14), var(--sd-4);
  border-radius: var(--br-lg);
  padding: 25px 25px 25px 25px;
  position: relative;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;

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
      <TextArea autoFocus name="comment" className="textarea" placeholder=" " />
      <label htmlFor="comment">comments...</label>
    </StyledTextArea>
  );
}

export { CommentArea };
