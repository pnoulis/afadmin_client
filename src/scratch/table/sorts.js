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

function descendingComparator(a, b, key) {
  if (b[key] < a[key]) {
    return -1;
  } else if (b[key] > a[key]) {
    return 1;
  } else {
    return 0;
  }
}

function getComparator(order, key) {
  switch (key) {
    case "state":
      return order === "desc"
        ? (a, b) => stateComparator(a, b)
        : (a, b) => -stateComparator(a, b, key);
    default:
      return order === "desc"
        ? (a, b) => descendingComparator(a, b, key)
        : (a, b) => -descendingComparator(a, b, key);
  }
}

function stableSort(ar, compareFn) {
  return ar.toSorted(compareFn);
}

export { getComparator, stableSort };
