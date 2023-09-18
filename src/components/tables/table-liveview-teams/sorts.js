const statesMap = {
  unregistered: 0,
  registered: 1,
  merged: 2,
  playing: 3,
};

function stateComparator(a, b) {
  const ak = statesMap[a.state];
  const bk = statesMap[b.state];
  if (bk < ak) {
    return -1;
  } else if (bk > ak) {
    return 1;
  } else {
    return 0;
  }
}

function descendingComparator(a, b, key) {
  const ak = a[key] ?? "0";
  const bk = b[key] ?? "0";
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
