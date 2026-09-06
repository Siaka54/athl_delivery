(function () {
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: true,
      theme: prefersDark ? "dark" : "default",
      securityLevel: "loose",
      flowchart: { curve: "basis" }
    });
  }

  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  function setActive() {
    var scrollPos = window.scrollY + 90;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section;
      }
    });
    links.forEach(function (link) {
      var isActive = current && link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("active", !!isActive);
    });
  }

  document.addEventListener("scroll", setActive, { passive: true });
  window.addEventListener("load", setActive);
})();
