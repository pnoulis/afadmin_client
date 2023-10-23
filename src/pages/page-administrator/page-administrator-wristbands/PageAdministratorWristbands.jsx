import * as React from 'react';
import styled from 'styled-components';

function PageAdministratorWristbands() {
  return (
    <StyledPageAdministratorWristbands>
      page administrator wristbands
    </StyledPageAdministratorWristbands>
  );
}

const StyledPageAdministratorWristbands = styled('div')`
  padding: 25px 50px 25px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`



export { PageAdministratorWristbands };
