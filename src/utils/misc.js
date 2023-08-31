function toggleClicks() {
  const d = document.getElementsByTagName("body")[0];
  if (d.style.pointerEvents === "none") {
    d.style.pointerEvents = "auto";
  } else {
    d.style.pointerEvents = "none";
  }
}

export { toggleClicks };
