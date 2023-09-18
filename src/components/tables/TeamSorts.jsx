import { isNumber } from "js_utils/misc";

const statesMap = {
  unregistered: 0,
  registered: 1,
  merged: 2,
  playing: 3,
};

function stateComparator(a, b) {
  if (statesMap[b.state] < statesMap[a.state]) {
    return -1;
  } else if (statesMap[b.state] > statesMap[a.state]) {
    return 1;
  } else {
    return 0;
  }
}

function timeComparator(a, b) {
  // minutes to milliseconds
}


function rosterComparator(a, b) {
  const aln = a.roster?.size ?? a.roster.length;
  const bln = b.roster?.size ?? b.roster.length;
  if (aln > bln) {
    return -1;
  } else if (aln < bln) {
    return 1;
  } else {
    return 0;
  }
}

function pkgsComparator(a, b) {
  const aln = a.packages.length;
  const bln = b.packages.length;
  if (aln > bln) {
    return -1;
  } else if (aln < bln) {
    return 1;
  } else {
    return 0;
  }
}

function descendingComparator(a, b, key) {
  let ak = a[key] ?? "0";
  let bk = b[key] ?? "0";
  if (bk < ak) {
    return -1;
  } else if (bk > ak) {
    return 1;
  } else {
    return 0;
  }
}

function orderClause(order, key, comparator) {
  return order === "desc"
    ? (a, b) => comparator(a, b, key)
    : (a, b) => -comparator(a, b, key);
}

function getComparator(order, key) {
  switch (key) {
    case "state":
      return orderClause(order, key, stateComparator);
    default:
      return orderClause(order, key, descendingComparator);
  }
}

function stableSort(ar, compareFn) {
  return [...ar].sort(compareFn);
}

export { getComparator, stableSort };
