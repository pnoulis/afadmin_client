import { NavLink } from "react-router-dom";

const home = {
  path: "/",
  label: "home",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/" {...props}>
      {children}
    </NavLink>
  ),
};

const registration = {
  path: "/registration/player",
  label: "registration",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/registration/player" {...props}>
      {children}
    </NavLink>
  ),
};

const registrationPlayer = {
  path: "/registration/player",
  label: "register player",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/registration/player" {...props}>
      {children}
    </NavLink>
  ),
};

const registrationWristband = {
  path: "/registration/player/wristband",
  label: "register wristband",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/registration/player/wristband" {...props}>
      {children}
    </NavLink>
  ),
};

const registrationHistory = {
  path: "/registration/player/history",
  label: "players",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/registration/player/history" {...props}>
      {children}
    </NavLink>
  ),
};

const merge = {
  path: "/merge",
  label: "merge",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/merge" {...props}>
      {children}
    </NavLink>
  ),
};

const liveView = {
  path: "/liveView",
  label: "live view",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/merge" {...props}>
      {children}
    </NavLink>
  ),
};

const groupParty = {
  path: "/groupParty",
  label: "group party",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/groupParty" {...props}>
      {children}
    </NavLink>
  ),
};

const teamPackages = (teamId) => ({
  path: `${teamId}/packages`,
  label: "team packages",
  asComponent: ({ children, ...props }) => (
    <Navlink to={`${teamId}/packages`} {...props}>
      {children}
    </Navlink>
  ),
});

export {
  home,
  registration,
  registrationPlayer,
  registrationWristband,
  registrationHistory,
  merge,
  liveView,
  groupParty,
  teamPackages,
};
