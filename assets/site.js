"use strict";

// Core content, navigation, and disclosures also work without JavaScript.
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("primary-navigation");
const mobileViewport = window.matchMedia("(max-width: 1100px)");

if (menuToggle && navigation) {
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
  document.documentElement.classList.add("js");
  menuToggle.hidden = false;
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const sectionLinks = navigation ? [...navigation.querySelectorAll('a[href^="#"]')] : [];
const sections = sectionLinks.map((link) => document.getElementById(link.hash.slice(1))).filter(Boolean);
let locationScheduled = false;

function updateLocation() {
  locationScheduled = false;
  if (!sections.length) return;
  const marker = mobileViewport.matches ? 110 : 150;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) current = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) {
    current = sections[sections.length - 1];
  }
  for (const link of sectionLinks) {
    if (link.hash === "#" + current.id) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

function scheduleLocation() {
  if (locationScheduled) return;
  locationScheduled = true;
  window.requestAnimationFrame(updateLocation);
}

window.addEventListener("scroll", scheduleLocation, { passive: true });
window.addEventListener("resize", scheduleLocation);
window.addEventListener("load", scheduleLocation);
if ("ResizeObserver" in window) {
  const main = document.querySelector("main");
  if (main) new ResizeObserver(scheduleLocation).observe(main);
}

const filters = document.querySelector(".project-filters");
const projectList = document.getElementById("project-list");
const projectCount = document.getElementById("project-count");
const projects = projectList ? [...projectList.querySelectorAll(".project")] : [];
const filterButtons = filters ? [...filters.querySelectorAll("button[data-filter]")] : [];

function setFilter(area) {
  if (!projectList || !filterButtons.some((button) => button.dataset.filter === area)) return;
  let visibleCount = 0;
  for (const project of projects) {
    project.hidden = area !== "all" && project.dataset.area !== area;
    if (!project.hidden) visibleCount += 1;
  }
  for (const button of filterButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.filter === area));
  }
  projectList.dataset.filtered = String(area !== "all");
  if (projectCount) {
    projectCount.textContent = area === "all" ? "Showing all " + visibleCount + " projects" : "Showing " + visibleCount + " project";
  }
  scheduleLocation();
}

if (filters && projects.length) {
  for (const button of filterButtons) button.addEventListener("click", () => setFilter(button.dataset.filter));
  filters.hidden = false;
}

// A project linked from the hero, toolkit, or browser history must never stay hidden.
function revealLinkedProject(hash) {
  let id;
  try { id = decodeURIComponent(hash.slice(1)); } catch { return null; }
  const target = document.getElementById(id);
  if (target && target.closest(".project[hidden]")) {
    setFilter("all");
    return target;
  }
  return null;
}

document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (anchor) revealLinkedProject(anchor.hash);
});
window.addEventListener("hashchange", () => {
  const revealed = revealLinkedProject(window.location.hash);
  if (revealed) window.requestAnimationFrame(() => revealed.scrollIntoView({ block: "start" }));
  scheduleLocation();
});
revealLinkedProject(window.location.hash);
scheduleLocation();
