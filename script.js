// Conditionally load the Popover API polyfill only when native support is missing.
if (!Object.hasOwn(HTMLElement.prototype, "popover")) {
  import("https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js");
}

const header = document.querySelector(".site-header");
const inner = document.querySelector(".header-inner");
const menu = document.querySelector("#site-menu");

if (header && inner && menu) {
  let lastHeaderWidth = header.clientWidth;

  const updateNavLayout = () => {
    const currentWidth = header.clientWidth;
    const isCurrentlyWide = header.classList.contains("is-wide");

    // Avoid toggling back to inline on shrink when already collapsed.
    if (!isCurrentlyWide && currentWidth <= lastHeaderWidth && lastHeaderWidth !== 0) {
      lastHeaderWidth = currentWidth;
      return;
    }
    lastHeaderWidth = currentWidth;

    const wasOpen = menu.matches(":popover-open, .\\:popover-open");

    header.classList.add("is-measuring", "is-wide");
    const fitsInline = inner.scrollWidth <= inner.clientWidth;

    if (fitsInline) {
      menu.removeAttribute("popover");
    } else {
      header.classList.remove("is-wide");
      menu.setAttribute("popover", "auto");
      if (wasOpen && typeof menu.showPopover === "function") {
        try {
          menu.showPopover();
        } catch {
          // Ignore if polyfill has not finished upgrading.
        }
      }
    }

    requestAnimationFrame(() => {
      header.classList.remove("is-measuring");
    });
  };

  const ro = new ResizeObserver(() => {
    updateNavLayout();
  });

  ro.observe(header);
  ro.observe(menu);

  // Initial measurement pass
  lastHeaderWidth = 0;
  updateNavLayout();
}
