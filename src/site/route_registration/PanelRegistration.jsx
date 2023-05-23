import {
  StylePanel,
  StylePanelHeader,
  PanelMain,
} from "/src/components/panels/index.js";

function PanelRegistration({ children }) {
  return (
    <StylePanel>
      <StylePanelHeader>panel header</StylePanelHeader>
      <PanelMain id="panel-registration-main">{children}</PanelMain>
    </StylePanel>
  );
}

export { PanelRegistration };
