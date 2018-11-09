var expr = "";

function compute(expr) {
  var parsed = expr.replace("÷", "/").replace("×", "*");
  var res;
  try {
    res = eval(parsed);
    return parseFloat(res.toFixed(8)).toString(10);
  } catch (e) {
    return false;
  }
};

function update() {
  $("#expr").text(expr);
  var res = compute(expr);
  if (res === false) {
    $("#ans").text("");
  } else {
    $("#ans").text("= " + res);
  }
}

// ÷×
function pressButton() {
  var btn = this.innerHTML;
  if (btn === "AC") {
    expr = "";
  } else if (btn === "CE") {
    expr = expr.slice(0, -1);
  } else if (btn === "=") {
    var res = compute(expr);
    if (res === false) {
      $("out")
        .css("outline", "3px solid rgba(255,0,0,0.6)")
        .animate({
          outlineColor: "rgba(255,0,0,0.0)"
        }, 1000);
    } else {
      expr = res;
    }
  } else {
    expr += btn;
  }
  update();
}



$("td").on("click", pressButton);

