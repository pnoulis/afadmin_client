import * as React from "react";
import styled from "styled-components";
import { useForm, FormProvider, SimpleInput } from "react_utils";

const StyledForm = styled.form`
  grid-area: description;
  box-sizing: content-box;
  padding: 0 10px;
  width: 400px;
  height: 150px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
    height: 55px;
    padding: 0 6px;
    border-radius: var(--br-nl);
    border: 2px solid var(--black-base);
    font-size: var(--tx-sm);
    text-align: center;
    letter-spacing: 1.5px;
    outline: none;
    color: black;

    ${({ error }) => error && "border-color: var(--error-base)"}
  }

  .input::placeholder {
    color: var(--info-medium);
    opacity: 1;
  }
`;

const StyleError = styled.p`
  height: 20px;
  font-family: Roboto-Bold;
  text-transform: uppercase;
  font-size: var(--tx-sm);
  text-align: center;
  letter-spacing: 1.5px;
  color: var(--error-base);
`;

function FormNewGroupTeam({ done, className }) {
  const [form, setForm] = useForm({
    submitting: false,
    errors: {},
    fields: {
      nPlayers: "",
    },
  });

  React.useEffect(() => {
    if (!form.submitting) return;
    done(form.fields.nPlayers);
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
      </StyledForm>
    </FormProvider>
  );
}

export { FormNewGroupTeam };
