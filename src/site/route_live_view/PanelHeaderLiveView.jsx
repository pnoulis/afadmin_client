import {
  PanelNavbar
} from '/src/site/site_wide/index.js';
import {
  liveView,
} from "/src/site/links.jsx";

import {
  ReactComponent as SummaryIcon
} from "agent_factory.shared/ui/icons/summary.svg";

function PanelHeaderLiveView() {
  return (
    <PanelNavbar items={[
      {
        ...liveView,
        Icon: <SummaryIcon/>
      }
    ]}/>
  );
}

export { PanelHeaderLiveView };
