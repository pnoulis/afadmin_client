import { PanelNavbar } from "/src/app/site_wide/index.js";
import {
  registrationPlayer,
  registrationWristband,
  registrationHistory,
} from "/src/app/links.jsx";

import { ReactComponent as PlayerIcon } from "agent_factory.shared/ui/icons/add_player.svg";
import { ReactComponent as WristbandIcon } from "agent_factory.shared/ui/icons/wristband.svg";
import { ReactComponent as SummaryIcon } from "agent_factory.shared/ui/icons/summary.svg";

const registrationPanelNavbar = [
  {
    ...registrationPlayer,
    Icon: <PlayerIcon />,
  },
  {
    ...registrationWristband,
    Icon: <WristbandIcon />,
  },
  {
    ...registrationHistory,
    Icon: <SummaryIcon />,
  },
];

function RegistrationPanelHeader() {
  return <PanelNavbar items={registrationPanelNavbar} />;
}

export { RegistrationPanelHeader };
