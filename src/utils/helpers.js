function easing(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

export function doScroll(target, duration = 350, pos = 150) {
  const targetClient = target;
  const offset = pos || 130;
  if (targetClient != null) {
    const client = targetClient.getBoundingClientRect().top;
    const elementY = window.pageYOffset + client;
    const startingY = window.pageYOffset;
    const diff = elementY - startingY - offset;
    let start;
    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const time = timestamp - start;
      let percent = Math.min(time / duration, 1);
      percent = easing(percent);
      window.scrollTo(0, startingY + diff * percent);
      if (time < duration) {
        window.requestAnimationFrame(step);
      }
    });
  }
}

export const chunkingArr = (array = [], size = 2) => {
  const res = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    res.push(chunk);
  }
  return res;
};
