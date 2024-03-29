import { t_mstom } from "agent_factory.shared/utils/misc.js";
import { formatTime } from "/src/utils/index.js";

const teamDataMap = {
  name: {
    name: "name",
    label: "name",
  },
  state: {
    name: "state",
    label: "status",
    gval: function (src) {
      return src?.state.name ?? src.state;
    },
  },
  roster: {
    name: "roster",
    label: "players",
    gval: function (src) {
      return src.roster?.size ?? src.roster?.length;
    },
  },
  points: {
    name: "points",
    label: "points",
    gval: function (src) {
      return src.points;
    },
  },
  packages: {
    name: "packages",
    label: "total packages",
    gval: function (src) {
      return src.packages.length;
    },
  },
  totalPkgsCost: {
    name: "totalPkgsCost",
    label: "total packages cost",
    gval: function (src) {
      let cost = 0;
      for (let i = 0; i < src.packages.length; i++) {
        cost += src.packages[i].cost;
      }
      return cost;
    },
  },
  activePkgName: {
    name: "activePkgName",
    label: "active package",
    gval: function (src) {
      return src.activePackage?.name;
    },
  },
  activePkgType: {
    name: "activePkgType",
    label: "active package type",
    gval: function (src) {
      return src.activePackage?.type;
    },
  },
  activePkgCost: {
    name: "activePkgCost",
    label: "active package cost",
    gval: function (src) {
      return src.activePackage?.cost;
    },
  },
  activePkgAmount: {
    name: "activePkgAmount",
    label: "active package amount",
    gval: function (src) {
      return src.activePackage?.amount;
      const apkg = src.activePackage;
      if (!apkg) {
        return "";
      } else if (apkg.type === "mission") {
        return apkg.amount;
      } else if (apkg.type === "time") {
        return Math.ceil(t_mstom(apkg.amount));
      } else {
        throw new Error(`Unrecognized package type: ${apkg.type}`);
      }
    },
  },
  activePkgRemainder: {
    name: "activePkgRemainder",
    label: "active package remainder",
    gval: function (src) {
      return src.activePackage?.remainder;
      const apkg = src.activePackage;
      if (!apkg) {
        return "";
      } else if (apkg.type === "mission") {
        return apkg.remainder;
      } else if (apkg.type === "time") {
        return Math.ceil(t_mstom(apkg.remainder));
      } else {
        throw new Error(`Unrecognized package type: ${apkg.type}`);
      }
    },
  },
  activePkgTimeStart: {
    name: "activePkgTimeStart",
    label: "active package start time",
    gval: function (src) {
      return src.activePackage?.t_start;
      const apkg = src.activePackage;
      if (!apkg) {
        return "";
      }

      const { hour, minute, second, literal } = formatTime(apkg.t_start);
      return `${hour}${literal}${minute}${literal}${second}`;
    },
  },
};

export { teamDataMap };
