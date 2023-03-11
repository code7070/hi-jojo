import { Client } from "@notionhq/client";

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

export const notionConnection = new Client({ auth: process.env.notion_key });

export const arrayGrouping = (array = [], key = "", group = "") => {
  let grouped = [];

  array.map((i) => {
    const sameKey = grouped.find((g) => g[key] === i[key]);
    const indexSame = sameKey ? grouped.findIndex((g) => g[key] === i[key]) : 0;

    if (!sameKey) {
      grouped.push({ [key]: i[key], [group]: [i] });
    } else {
      grouped[indexSame][group] = [...grouped[indexSame][group], i];
    }
  });
  return grouped;
};

export const getNotion = {
  dbValues: (propertiesField) => {
    const properties = propertiesField;

    if (!properties) return null;

    const type = properties.type;
    const target = properties[type];
    let value = null;

    if (type === "select") value = target.name;
    else if (target) {
      const hasLength = target.length > 0;
      value = hasLength ? target[0].plain_text : null;
    }

    return value;
  },
};
