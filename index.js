export function autofocus(node, options) {
  if (!options || !options.visibilityChangeOnly) {
    node.focus();
  }

  function focusOnVisibilityChange() {
    if (document.visibilityState === "visible") {
      node.focus();
    }
  }

  document.addEventListener("visibilitychange", focusOnVisibilityChange);

  return {
    destroy() {
      document.removeEventListener("visibilitychange", focusOnVisibilityChange);
    },
  };
}
