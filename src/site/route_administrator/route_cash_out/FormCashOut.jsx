import * as React from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  SimpleInput,
  TextArea,
} from "react_utils";

function FormCashOut({
  fields: initialValues = {},
  onChange = (form, setForm) => {},
  onSubmit = (form, cb) => {},
  className,
  children,
  ...props
}) {
  const [form, setForm] = useForm({
    formId: "form-cashOut",
    submitting: false,
    fields: {
      cashierName: "",
      comment: "",
      npkgs: 0,
    },
  });

  React.useEffect(() => {
    onChange(form, setForm);
  }, [form.fields]);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <form
        style={{ width: "100%", height: "100%" }}
        id={form.formId}
        className={className || ""}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export { FormCashOut };
