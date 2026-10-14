(function () {
  var btn = document.getElementById("copy-email");
  var text = document.getElementById("email-text");
  function selectText() {
    try {
      var range = document.createRange();
      range.selectNodeContents(text);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } catch (e) {}
  }
  btn.addEventListener("click", function () {
    var done = function () {
      btn.textContent = "Copied";
      setTimeout(function () { btn.textContent = "Copy"; }, 1800);
    };
    try {
      navigator.clipboard.writeText(text.textContent.trim()).then(done, function () {
        selectText();
        btn.textContent = "Selected";
      });
    } catch (e) {
      selectText();
      btn.textContent = "Selected";
    }
  });
})();
