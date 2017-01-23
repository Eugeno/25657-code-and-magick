'use strict';

window.renderStatistics = function (ctx, names, times) {
  var boardWidth = 420;
  var boardHeight = 270;
  var boardMarginTop = 10;
  var boardMarginLeft = 100;

  /* draw board shadow */
  ctx.fillStyle = 'rgba(0,0,0,.7)';
  ctx.fillRect(boardMarginLeft + 10, boardMarginTop + 10, boardWidth, boardHeight);

  /* draw board */
  ctx.fillStyle = '#fff';
  ctx.fillRect(boardMarginLeft, boardMarginTop, boardWidth, boardHeight);

  /* type caption */
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', boardMarginLeft + 20, boardMarginTop + 20 + 10);
  ctx.fillText('Список результатов:', boardMarginLeft + 20, boardMarginTop + 20 * 2 + 10);

  var maxBarHeight = 150;
  var barWidth = 40;
  var max = -1;

  var i;
  var time;
  /* find max score */
  for (i = 0; i < times.length; i++) {
    time = times[i].toFixed(0);
    if (time > max) {
      max = time;
    }
  }

  /* how much points in one pixel */
  var step = max / maxBarHeight;

  /* draw results */
  for (i = 0; i < times.length; i++) {
    time = times[i].toFixed(0);
    var name = names[i];

    var barHeight = (time / step).toFixed(0);

    var winnerColor = '#f00';
    var randomSaturation = (Math.random() * 90 + 10).toFixed(0); // avoid grey

    if (name === 'Вы') {
      ctx.fillStyle = winnerColor;
    } else {
      ctx.fillStyle = 'hsl(240,' + randomSaturation + '%,50%)';
    }

    var paddingLeft = 50;
    var paddingBottom = 20;
    var space = 40;

    /* draw bar */
    ctx.fillRect((boardMarginLeft + paddingLeft) + i * (space + barWidth), boardHeight - paddingBottom - barHeight, barWidth, barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(name, (boardMarginLeft + paddingLeft) + i * (space + barWidth), boardHeight);
    ctx.fillText(time, (boardMarginLeft + paddingLeft) + i * (space + barWidth), boardHeight - paddingBottom - barHeight - 10); // avoid stack
  }
};
