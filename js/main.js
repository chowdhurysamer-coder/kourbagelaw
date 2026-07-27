// Mobile menu + footer year
(function () {
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("mainNav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    var links = nav.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    }
  }
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
