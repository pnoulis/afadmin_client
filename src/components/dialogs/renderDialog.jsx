import * as React from "react";
import * as ReactClient from "react-dom/client";

function renderDialog(target, Dialog, props = {}, handleClose = () => {}) {
  if (typeof props === "function") {
    handleClose = props;
    props = {};
  }

  if (document.getElementById("dialog-render")) {
    return;
  }

  const container = document.createElement("article");
  container.setAttribute("id", "dialog-render");
  if (target == null) {
    document.getElementsByTagName("body")[0].appendChild(container);
  } else {
    document.getElementById(target).appendChild(container);
  }
  setTimeout(() => {
    ReactClient.createRoot(document.getElementById("dialog-render")).render(
      <React.StrictMode>
        <>
          <Dialog
            handleClose={(confirmed) => {
              setTimeout(() => {
                document.getElementById("dialog-render").remove();
                handleClose(confirmed);
              }, 0);
            }}
            {...props}
          />
        </>
      </React.StrictMode>
    );
  }, 1);
}

export { renderDialog };
