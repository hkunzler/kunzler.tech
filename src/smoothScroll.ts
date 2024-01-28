const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

export const smoothScroll = (elementY: number, duration: number) => {
  const startingY = window.pageYOffset;
  const diff = elementY - startingY;
  let start: number;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    const easing = easeInOutCubic(percent);

    window.scrollTo(0, startingY + diff * easing);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};
