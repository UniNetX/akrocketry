(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.querySelector("[data-nav-menu]");
  if (toggle && menu) {
    var mq = window.matchMedia("(max-width: 56rem)");

    function syncNavTabIndex() {
      var mobile = mq.matches;
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      menu.querySelectorAll("a").forEach(function (link) {
        if (mobile && !expanded) link.setAttribute("tabindex", "-1");
        else link.removeAttribute("tabindex");
      });
    }

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      menu.classList.toggle("is-open", open);
      syncNavTabIndex();
    }

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", function (e) {
      if (!menu.classList.contains("is-open")) return;
      if (toggle.contains(e.target) || menu.contains(e.target)) return;
      setOpen(false);
    });

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", syncNavTabIndex);
    } else {
      mq.addListener(syncNavTabIndex);
    }
    setOpen(false);
  }

  var heroImg = document.querySelector(".hero__photo");
  if (heroImg) {
    heroImg.addEventListener("load", function () {
      heroImg.classList.add("is-loaded");
    });
    heroImg.addEventListener("error", function () {
      heroImg.removeAttribute("src");
      heroImg.removeAttribute("alt");
      heroImg.style.display = "none";
    });
    if (heroImg.complete && heroImg.naturalWidth === 0) {
      heroImg.dispatchEvent(new Event("error"));
    }
  }

  document.querySelectorAll("img[data-gallery]").forEach(function (img) {
    img.addEventListener("error", function () {
      var hint = img.getAttribute("data-gallery") || "Photo";
      var div = document.createElement("div");
      div.className = "gallery-placeholder";
      div.textContent = hint;
      img.replaceWith(div);
    });
    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event("error"));
    }
  });
})();
