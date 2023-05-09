import * as React from "react";
import {
  ProvideStoreRegistration,
  useCtxRegistration,
} from "/src/stores/index.js";

function SomeSubComponent() {
  const ctx = useCtxRegistration();
  console.log(ctx);
  return (
    <div>
      <h1>Some sub component</h1>
      <div></div>
    </div>
  );
}

function RouteRegistration({ children }) {
  return <ProvideStoreRegistration>{children}</ProvideStoreRegistration>;
}

export default function ScratchStoreRegistration() {
  return (
    <div>
      <h1>scratch store registration</h1>
      <div>
        <RouteRegistration>
          <SomeSubComponent />
        </RouteRegistration>
      </div>
    </div>
  );
}
