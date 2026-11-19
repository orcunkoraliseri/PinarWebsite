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
    const fitsInline =
      inner.scrollWidth <= inner.clientWidth &&
      inner.scrollWidth <= header.clientWidth;

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
  const controls = document.querySelector(".header-controls");
  if (controls) {
    ro.observe(controls);
  }

  // Initial measurement pass
  lastHeaderWidth = 0;
  updateNavLayout();
}

// Preserve current section hash when switching between English and Turkish pages.
for (const langLink of document.querySelectorAll("[data-lang-link]")) {
  langLink.addEventListener("click", () => {
    if (!window.location.hash || !(langLink instanceof HTMLAnchorElement)) {
      return;
    }
    const url = new URL(langLink.href, window.location.href);
    url.hash = window.location.hash;
    langLink.href = url.href;
  });
}

// Native modal plate zoom lightbox with closedby="any" fallback
const lightbox = document.querySelector("#plate-lightbox");
if (lightbox instanceof HTMLDialogElement) {
  const stage = lightbox.querySelector(".lightbox-stage");
  const lightboxImg = lightbox.querySelector(".lightbox-img");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");

  for (const trigger of document.querySelectorAll("[data-lightbox-trigger]")) {
    trigger.addEventListener("click", () => {
      const img = trigger.querySelector("img");
      const figure = trigger.closest("figure");
      const caption = figure?.querySelector("figcaption");
      if (!(img instanceof HTMLImageElement) || !(lightboxImg instanceof HTMLImageElement)) {
        return;
      }

      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt;
      if (stage) {
        stage.classList.toggle("is-drawing", Boolean(figure?.classList.contains("plate-figure--drawing")));
      }
      if (lightboxCaption) {
        lightboxCaption.textContent = caption?.dataset.fullCaption || caption?.textContent || "";
      }
      lightbox.showModal();
    });
  }

  lightbox.addEventListener("close", () => {
    lightbox.returnValue = "";
    if (lightboxImg instanceof HTMLImageElement) {
      lightboxImg.removeAttribute("src");
    }
  });

  if (!("closedBy" in HTMLDialogElement.prototype)) {
    const isOutsideDialog = (e) => {
      const rect = lightbox.getBoundingClientRect();
      return (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      );
    };

    let pressedOutside = false;
    lightbox.addEventListener("pointerdown", (e) => {
      pressedOutside = isOutsideDialog(e);
    });
    lightbox.addEventListener("pointerup", (e) => {
      if (pressedOutside && isOutsideDialog(e)) {
        lightbox.close();
      }
      pressedOutside = false;
    });
  }
}
