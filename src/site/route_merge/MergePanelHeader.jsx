import { PanelNavbar } from "/src/site/site_wide/index.js";
import { merge } from "/src/site/links.jsx";

import { ReactComponent as MergeTeamIcon } from "agent_factory.shared/ui/icons/merge_team.svg";

const mergePanelNavbar = [
  {
    ...merge,
    Icon: <MergeTeamIcon />,
  },
];

function MergePanelHeader() {
  return <PanelNavbar items={mergePanelNavbar} />;
}

export { MergePanelHeader };
