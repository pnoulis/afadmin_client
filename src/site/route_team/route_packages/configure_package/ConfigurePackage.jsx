import * as React from "react";
import styled from "styled-components";

function ConfigurePackage({ className, ...props }) {
  return (
    <section className={className} {...props}>
      configure package
    </section>
  );
}

export { ConfigurePackage };
