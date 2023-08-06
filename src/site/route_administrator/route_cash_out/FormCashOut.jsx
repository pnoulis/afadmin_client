import * as React from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  SimpleInput,
  TextArea,
} from "react_utils";
import { session } from "/src/services/session.js";

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
      ...initialValues,
    },
  });

  const commentRef = React.useRef(null);
  commentRef.current = form.fields.comment;

  React.useEffect(() => {
    if (!form.submitting) return;
    onSubmit(form.fields, (err) => {
      if (!err) {
        setForm("reset");
      }
    });
  }, [form.submitting]);

  React.useEffect(() => {
    return () => {
      if (session.loggedIn) {
        session.set("comment", commentRef.current);
      }
    };
  }, []);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <form
        style={{ width: "100%", height: "100%" }}
        id={form.formId}
        className={className || ""}
        onSubmit={(e) => {
          e.preventDefault();
          setForm("setSubmit", true);
        }}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export { FormCashOut };
