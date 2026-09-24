/*
 * Site behavior (no libraries):
 *   - navigation menu toggle
 *   - back-to-top button
 *   - hero slideshow (homepage)
 *   - gallery lightbox (homepage)
 */
(function () {
  "use strict";

  /* ---------- Navigation ---------- */
  var nav = document.querySelector(".site-nav");
  if (nav) {
    var toggle = nav.querySelector(".nav-toggle");

    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    // Close after choosing a link or clicking elsewhere.
    nav.addEventListener("click", function (e) {
      if (e.target.closest(".nav-list a")) setOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    var onScroll = function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Hero slideshow (3.5s per slide, fading) ---------- */
  var slides = document.querySelectorAll(".slideshow .slide");
  if (slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove("is-active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("is-active");
    }, 3500);
  }


  /* ---------- Gallery lightbox ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
  var lightbox = document.querySelector(".lightbox");
  if (items.length && lightbox) {
    var image = lightbox.querySelector("img");
    var counter = lightbox.querySelector(".lightbox-counter");
    var index = 0;
    var lastFocus = null;

    var show = function (i) {
      index = (i + items.length) % items.length;
      image.src = items[index].dataset.full;
      image.alt = items[index].querySelector("img").alt;
      counter.textContent = index + 1 + " / " + items.length;
    };

    var open = function (i) {
      lastFocus = document.activeElement;
      show(i);
      lightbox.classList.add("is-open");
      lightbox.querySelector(".lightbox-close").focus();
    };

    var close = function () {
      lightbox.classList.remove("is-open");
      if (lastFocus) lastFocus.focus();
    };

    items.forEach(function (item, i) {
      item.addEventListener("click", function () {
        open(i);
      });
    });

    lightbox.querySelector(".lightbox-close").addEventListener("click", close);
    lightbox.querySelector(".lightbox-prev").addEventListener("click", function () {
      show(index - 1);
    });
    lightbox.querySelector(".lightbox-next").addEventListener("click", function () {
      show(index + 1);
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
  }
})();
