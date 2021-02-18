let canvas = document.getElementById("board");

const GLOBALS = {
  randpos: 0,
  showTarget: false,
  canvasWidth: canvas.width,
  canvasHeight: canvas.height,
  targetWidth: 45,
  fourPointTarget: (45 / 1000) * canvas.width,
  threePointTarget: 3 * ((45 / 1000) * canvas.width),
  twoPointTarget: 5 * ((45 / 1000) * canvas.width),
  nodes: {
    seedInput: document.querySelector("#seed"),
    canvas: document.querySelector("#board"),
    ctx: document.querySelector("#board").getContext("2d"),
  },
  currentTeam: 1,
};
