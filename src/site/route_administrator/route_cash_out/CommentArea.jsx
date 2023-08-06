import * as React from "react";
import styled, { css } from "styled-components";
import { TextArea, useFormContext } from "react_utils";

const StyledTextArea = styled.article`
  width: 600px;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-size: var(--tx-lg);
  letter-spacing: 1px;
  word-spacing: 5px;
  white-space: wrap;
  font-family: Roboto-Regular;
  background-color: var(--grey-light);
  border-radius: var(--br-lg);
  padding: 25px 25px 25px 25px;

  ${({ holder }) =>
    holder &&
    css`
      cursor: pointer;
      text-transform: capitalize;
      font-size: var(--tx-xxl);
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  .textarea {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`;

function CommentArea({ placeholder = "comments...", ...props }) {
  const {
    fields: { comment },
  } = useFormContext();
  const [tx, setTx] = React.useState(comment?.length > 1 ? true : false);

  React.useEffect(() => {
    if (!comment) {
      setTx(false);
    }
  }, [comment]);

  return (
    <StyledTextArea
      holder={!tx}
      onClick={() => !comment && setTx((prev) => !prev)}
      {...props}
    >
      {tx ? (
        <TextArea name="comment" className="textarea" />
      ) : (
        <p>{placeholder}</p>
      )}
    </StyledTextArea>
  );
}

export { CommentArea };
