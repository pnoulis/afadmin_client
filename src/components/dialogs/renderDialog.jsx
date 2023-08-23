import { smallid } from "js_utils/uuid";
import * as React from "react";
import * as ReactClient from "react-dom/client";

function renderDialog(target, Dialog, props = {}, handleClose = () => {}) {
  if (typeof props === "function") {
    handleClose = props;
    props = {};
  }

  const id = smallid();

  const container = document.createElement("article");
  container.setAttribute("id", id);
  if (target == null) {
    document.getElementsByTagName("body")[0].appendChild(container);
  } else {
    document.getElementById(target).appendChild(container);
  }

  const root = ReactClient.createRoot(document.getElementById(id));
  root.render(
    <>
      <Dialog
        handleClose={function (...args) {
          setTimeout(() => {
            root.unmount();
            document.getElementById(id).remove();
            handleClose(...args);
          }, 1);
        }}
        {...props}
      />
    </>,
  );
}

export { renderDialog };
