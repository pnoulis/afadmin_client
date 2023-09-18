import * as React from "react";
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

const login = {
  path: "/login",
  label: "login",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/login" {...props}>
      {children}
    </NavLink>
  ),
};

const registration = {
  path: "/registration/player",
  label: "registration",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/registration" {...props}>
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

const groupParty = {
  path: "/groupParty",
  label: "group party",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/groupParty" {...props}>
      {children}
    </NavLink>
  ),
};

const liveView = {
  path: "/live-view",
  label: "live view",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/liveView" {...props}>
      {children}
    </NavLink>
  ),
};

const liveViewTeams = {
  path: "/liveView",
  label: "live teams",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/liveView" {...props}>
      {children}
    </NavLink>
  ),
};

const teamPackages = (teamId) => ({
  path: `${teamId}`,
  label: "team packages",
  asComponent: ({ children, ...props }) => (
    <NavLink to={`/${teamId}`} {...props}>
      {children}
    </NavLink>
  ),
});

const administrator = {
  path: "/administrator",
  label: "administration",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/administrator" {...props}>
      {children}
    </NavLink>
  ),
};

const administratorCashout = {
  path: "/administrator",
  label: "cash out",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/administrator" {...props}>
      {children}
    </NavLink>
  ),
};

const administratorHistory = {
  path: "/administrator/history",
  label: "history",
  asComponent: ({ children, ...props }) => (
    <NavLink to="administrator/history" {...props}>
      {children}
    </NavLink>
  ),
};

const administratorStatistics = {
  path: "/administrator/statistics",
  label: "statistics",
  asComponent: ({ children, ...props }) => (
    <NavLink to="administrator/statistics" {...props}>
      {children}
    </NavLink>
  ),
};

const administratorMissions = {
  path: "/administrator/missions",
  label: "missions",
  asComponent: ({ children, ...props }) => (
    <NavLink to="administrator/missions" {...props}>
      {children}
    </NavLink>
  ),
};

const administratorRooms = {
  path: "/administrator/rooms",
  label: "rooms",
  asComponent: ({ children, ...props }) => (
    <NavLink to="administrator/rooms" {...props}>
      {children}
    </NavLink>
  ),
};

const scoreboard = {
  path: "/scoreboard",
  label: "scoreboard",
  asComponent: ({ children, ...props }) => (
    <NavLink to="/scoreboard" {...props}>
      {children}
    </NavLink>
  ),
};

function team(teamId) {
  return {
    path: teamId ? `${teamId}` : "/:teamId",
    asComponent: ({ children, ...props }) => (
      <NavLink to={teamId ? teamId : "/:teamId"} {...props}>
        {children}
      </NavLink>
    ),
  };
}

export {
  home,
  login,
  registration,
  registrationPlayer,
  registrationWristband,
  registrationHistory,
  merge,
  groupParty,
  liveView,
  liveViewTeams,
  teamPackages,
  administrator,
  administratorCashout,
  administratorRooms,
  administratorStatistics,
  administratorMissions,
  administratorHistory,
  scoreboard,
  team,
};
