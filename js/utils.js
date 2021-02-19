function copyStringToClipboard(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };

  document.body.appendChild(el);
  el.select();

  document.execCommand("copy");
  document.body.removeChild(el);
}

function copySeedURL() {
  const seed = GLOBALS.nodes.seedInput.value;
  const seedURL = `${window.location.origin}${window.location.pathname}?seed=${seed}`;
  copyStringToClipboard(seedURL);
}

function between(value, min, max) {
  return value >= min && value <= max;
}
