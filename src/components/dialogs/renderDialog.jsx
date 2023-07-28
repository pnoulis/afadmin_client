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
    <React.StrictMode>
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
      </>
    </React.StrictMode>,
  );

  // setTimeout(() => {
  //   ReactClient.createRoot(document.getElementById("dialog-render")).render(
  //     <React.StrictMode>
  //       <>
  //         <Dialog
  //           handleClose={(confirmed) => {
  //             setTimeout(() => {
  //               console.log(document.getElementById('dialog-render'))
  //               /* document.getElementById("dialog-render").remove(); */
  //               /* handleClose(confirmed); */
  //             }, 0);
  //           }}
  //           {...props}
  //         />
  //       </>
  //     </React.StrictMode>
  //   );
  // }, 1);
}

export { renderDialog };
