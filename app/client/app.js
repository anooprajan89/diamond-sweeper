
global.startApp = function (container) {
  console.log("Here is the container:", container);
}


$(".reset, .reply").click(function () {
  var $nodes = $(".diamondsweeper-board").find(".cell");
  shuffle($nodes, "cell");
  $(".diamondsweeper-board").append($nodes);
  $(".cell").addClass("unknown");
  $(".cell").removeClass("found");
  totalCount();
  totalDiamond();
  $(".success-wrap").removeClass("show");
});


//Shuffle the cards
function shuffle(nodes, switchableSelector) {
  var length = nodes.length;
  var switchable = nodes.filter("." + switchableSelector);
  var switchIndex = [];

  $.each(switchable, function (index, item) {
    switchIndex[index] = $(item).index();
  });

  var switchLength = switchIndex.length;
  var randomPick, randomSwap;

  for (var index = length; index > 0; index--) {
    randomPick = switchIndex[Math.floor(Math.random() * switchLength)];
    randomSwap = nodes[index - 1];
    if ($(randomSwap).hasClass(switchableSelector)) {
      nodes[index - 1] = nodes[randomPick];
      nodes[randomPick] = randomSwap;
    }
  }
  return nodes;
}

// Open boxes
$(".cell").click(function () {

  var indexClicked = $(this).index();
  var indexPrev = $(this).index() - 1;
  var indexNext = $(this).index() + 1;
  var indexTop = $(this).index() - 8;
  var indexBottom = $(this).index() + 8;

  $(".cell").removeClass("diamond-right diamond-left diamond-top diamond-bottom");

  if ($(".cell").eq(indexClicked).hasClass('diamond')) {
    $(".cell").eq(indexClicked).addClass("found");
  } else {
    if ($(".cell").eq(indexNext).hasClass('diamond') && !$(".cell").eq(indexNext).hasClass('found')) {
      $(".cell").eq(indexClicked).addClass('diamond-right');
    } else if ($(".cell").eq(indexPrev).hasClass('diamond') && !$(".cell").eq(indexPrev).hasClass('found')) {
      $(".cell").eq(indexClicked).addClass('diamond-left');
    } else if ($(".cell").eq(indexTop).hasClass('diamond') &&
      !$(".cell").eq(indexTop).hasClass('found') &&
      !(indexClicked >= 0 && indexClicked <= 7)) {
      $(".cell").eq(indexClicked).addClass('diamond-top');
    } else if ($(".cell").eq(indexBottom).hasClass('diamond') &&
      !$(".cell").eq(indexBottom).hasClass('found') &&
      !(indexClicked >= 57 && indexClicked <= 64)) {
      $(".cell").eq(indexClicked).addClass('diamond-bottom');
    } else {

    }
  }


  $(".cell").click(function () {
    if ($(this).hasClass('diamond')) {
      $(this).addClass("found");
    }
  });

  $(this).removeClass("unknown");

  if ($(".found").length >= 8) {
    $(".success-wrap").addClass("show");
  }
  totalCount(); // Count of total cell opened
  totalDiamond(); // Count of diamond found 
});


$(document).ready(function () {
  totalCount();
  totalDiamond();
})

function totalCount() {
  var count = $(".diamondsweeper-board").find(".unknown").length;
  $(".total-value").text(64 - count);
  $(".final-point").text(count);
}

function totalDiamond() {
  var foundCount = 0;
  foundCount = $(".diamondsweeper-board").find(".found").length;
  $(".total-diamond").text(foundCount);
}