(function () {
  var C = window.AK_CONFIG || {};

  function mount(slotName, iframeSrc, title, directUrl) {
    var el = document.querySelector('[data-embed="' + slotName + '"]');
    if (!el) return;

    var url = typeof iframeSrc === "string" ? iframeSrc.trim() : "";

    if (url) {
      var frame = document.createElement("div");
      frame.className = "embed-frame";
      var iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.title = title;
      iframe.loading = "lazy";
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      frame.appendChild(iframe);
      el.appendChild(frame);

      if (directUrl && String(directUrl).trim()) {
        var p = document.createElement("p");
        p.className = "embed-alt-link";
        var a = document.createElement("a");
        a.href = directUrl.trim();
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = "Open in a new tab instead";
        p.appendChild(a);
        el.appendChild(p);
      }
    } else {
      el.classList.add("embed-slot--empty");
      el.innerHTML =
        '<div class="embed-placeholder" role="status">' +
        "<p><strong>Embed not configured yet.</strong> Paste the Google Form iframe <code class=\"inline-code\">src</code> into <code class=\"inline-code\">js/config.js</code> as <code class=\"inline-code\">chmsFormEmbedUrl</code>.</p>" +
        "<p>Until then, reach the club via <a href=\"contact.html\">Contact</a> or <a href=\"index.html#join\">Band</a>.</p>" +
        "</div>";
    }
  }

  mount(
    "chms-form",
    C.chmsFormEmbedUrl,
    "Community House Middle School rocketry program interest form",
    C.chmsFormDirectUrl
  );
})();
