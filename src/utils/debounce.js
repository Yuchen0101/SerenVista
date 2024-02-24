export default function debounce(fn, delay) {
  let id = null;
  return function () {
    const args = arguments;
    const ctx = this;
    clearTimeout(id);
    id = setTimeout(() => {
      fn.apply(ctx, args);
    }, delay);
  };
}
