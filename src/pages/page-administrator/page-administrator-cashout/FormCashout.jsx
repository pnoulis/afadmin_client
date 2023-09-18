import * as React from "react";
import { useForm, FormProvider } from "react_utils";
import { isFunction } from "js_utils/misc";

function FormCashout({
  fields: initialValues = {},
  onChange,
  onSubmit,
  className,
  style,
  children,
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

  React.useEffect(() => {
    if (!form.submitting) return;
    if (isFunction(onSubmit)) {
      onSubmit(form.fields, (err) => {
        if (!err) {
          setForm("reset");
        } else {
          setForm("setSubmit", false);
        }
      });
    }
  }, [form.submitting]);

  return (
    <FormProvider value={{ ...form, setForm }}>
      <form
        style={style}
        id={form.formId}
        className={className}
        onSubmit={function (e) {
          e.preventDefault();
          setForm("setSubmit", true);
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export { FormCashout };
