import * as React from "react";
import styled from "styled-components";
import { useForm, FormProvider, SimpleInput } from "react_utils";

const StyledForm = styled.form`
  grid-area: description;
  box-sizing: content-box;
  padding: 0 10px;
  height: 150px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 550px;
  margin: auto;
  gap: 20px;

  .submit {
    padding: 15px 20px;
    cursor: pointer;
    background-color: var(--primary-strong);
    border-radius: var(--br-nl);
    color: white;
    font-family: NoirPro-Regular;
    font-size: var(--tx-nl);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-align: center;
  }
`;

const StyledSimpleInput = styled(SimpleInput)`
  all: unset;
  display: block;
  box-sizing: border-box;
  width: 90%;
  min-height: 60px;
  height: max-content;
  pointer-events: none;
  position: relative;
  text-align: center;
  font-family: Roboto-Bold;
  text-transform: uppercase;
  color: var(--info-medium);

  .input {
    pointer-events: auto;
    width: 100%;
    height: 70px;
    background-color: var(--grey-light);
    padding: 0 6px;
    border-radius: var(--br-nl);
    border: 2px solid inherit;
    font-size: var(--tx-sm);
    text-align: center;
    letter-spacing: 1.5px;
    outline: none;
    color: black;

    ${({ error }) => error && "border-color: var(--error-base)"}
  }

  .input::placeholder {
    opacity: 1;
  }
`;

const StyleError = styled.p`
  width: 90%;
  height: 20px;
  font-family: Roboto-Bold;
  text-transform: uppercase;
  font-size: var(--tx-sm);
  text-align: center;
  letter-spacing: 1.5px;
  color: var(--error-base);
`;

function FormGroupTeamSize({ onSubmit, className }) {
  const [form, setForm] = useForm({
    submitting: false,
    errors: {},
    fields: {
      nPlayers: 0,
    },
  });

  React.useEffect(() => {
    if (!form.submitting) return;
    onSubmit(form.fields.nPlayers);
    setForm('reset');
  }, [form.submitting]);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <StyledForm
        id="form-new-group-team"
        className={className}
        onSubmit={(e) => {
          e.preventDefault();
          if (/^[1-9][0-9]*/.test(form.fields.nPlayers)) {
            setForm("setSubmit", true);
          } else {
            setForm("setErrors", {
              nPlayers: "Wrong number of players",
            });
          }
        }}
      >
        <StyledSimpleInput
          error={form.errors.nPlayers}
          name="nPlayers"
          placeholder="number of players"
        />
        <StyleError>{form.errors.nPlayers}</StyleError>
        <button className="submit" type="submit" form="form-new-group-team">
          new group party
        </button>
      </StyledForm>
    </FormProvider>
  );
}

export { FormGroupTeamSize };
