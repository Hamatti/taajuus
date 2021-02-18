function clearCanvas() {
  document.getElementById("score_display").innerHTML = "";
  GLOBALS.nodes.ctx.clearRect(0, 0, GLOBALS.canvasWidth, GLOBALS.canvasHeight);
}

function drawTargets(x) {
  posx = calculatePosition(x);
  GLOBALS.nodes.ctx.beginPath();
  GLOBALS.nodes.ctx.fillStyle = "#FFC107";
  GLOBALS.nodes.ctx.fillRect(
    posx - GLOBALS.twoPointTarget / 2,
    0,
    GLOBALS.twoPointTarget,
    150
  );
  GLOBALS.nodes.ctx.stroke();

  GLOBALS.nodes.ctx.beginPath();
  GLOBALS.nodes.ctx.fillStyle = "#1E88E5";
  GLOBALS.nodes.ctx.fillRect(
    posx - GLOBALS.threePointTarget / 2,
    0,
    GLOBALS.threePointTarget,
    150
  );
  GLOBALS.nodes.ctx.stroke();

  GLOBALS.nodes.ctx.beginPath();
  GLOBALS.nodes.ctx.fillStyle = "#D81B60";
  GLOBALS.nodes.ctx.fillRect(
    posx - GLOBALS.fourPointTarget / 2,
    0,
    GLOBALS.fourPointTarget,
    150
  );
  GLOBALS.nodes.ctx.stroke();
}

function drawGuess() {
  clearCanvas();
  drawTargets(GLOBALS.randpos);

  var guess = document.getElementById("guess").value;
  GLOBALS.nodes.ctx.beginPath();
  GLOBALS.nodes.ctx.fillStyle = "#d42838";
  GLOBALS.nodes.ctx.fillRect(calculatePosition(guess) - 2, 0, 4, 150);
  GLOBALS.nodes.ctx.stroke();

  score(GLOBALS.randpos, guess);
}

function showTargets() {
  if (GLOBALS.showTarget) {
    clearCanvas();
  } else {
    drawTargets(GLOBALS.randpos);
  }
  GLOBALS.showTarget = !GLOBALS.showTarget;
}
