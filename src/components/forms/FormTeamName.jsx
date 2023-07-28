import * as React from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  SimpleInput,
} from "react_utils";
import { generateRandomName } from "js_utils";

function Form({
  onChange = (form, setForm) => {},
  onSubmit = (form, cb) => {},
  className,
  children,
  ...props
}) {
  const [form, setForm] = useForm({
    formId: "form-team-name",
    randomName: generateRandomName(),
    submitting: false,
    fields: {
      teamName: "",
    },
  });

  React.useEffect(() => {
    onChange(form, setForm);
  }, [form, setForm, onChange]);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <form
        id={form.formId}
        className={className}
        onSubmit={(e) => {
          e.preventDefault();
          alert("to submit");
        }}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

function InputName({ className, ...props }) {
  const { randomName } = useFormContext();
  return (
    <SimpleInput
      className={className}
      name="teamName"
      placeholder={randomName}
      {...props}
    />
  );
}

function ButtonSubmit({ renderSubmit, className, children, ...props }) {
  const { formId } = useFormContext();

  return renderSubmit ? (
    renderSubmit({ type: "submit", form: formId })
  ) : (
    <button type="submit" form={formId} className={className} {...props}>
      {children || 'submit'}
    </button>
  );
}

export const FormTeamName = {
  Form,
  InputName,
  ButtonSubmit,
};
