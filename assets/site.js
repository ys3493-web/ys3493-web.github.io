"use strict";

// Content and navigation remain available when JavaScript is disabled.
document.documentElement.classList.add("js");

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("primary-navigation");
const mobileViewport = window.matchMedia("(max-width: 760px)");

if (menuToggle && navigation) {
  menuToggle.hidden = false;
  const closeMenu = ({ returnFocus = false } = {}) => {
    navigation.dataset.open = "false";
    menuToggle.setAttribute("aria-expanded", "false");
    if (returnFocus) menuToggle.focus();
  };
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    navigation.dataset.open = String(!isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu({ returnFocus: true });
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  mobileViewport.addEventListener("change", () => closeMenu());
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Highlight the visible section without changing browser history.
if ("IntersectionObserver" in window && navigation) {
  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of sectionLinks) {
        if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    }
  }, { rootMargin: "-12% 0px -65% 0px", threshold: 0 });
  for (const link of sectionLinks) {
    const section = document.getElementById(link.hash.slice(1));
    if (section) observer.observe(section);
  }
  const about = document.getElementById("about");
  if (about) observer.observe(about);
}
