import { getValue } from './value';

const NESTED_KEY_RE = /^(\w+)\[(\d+)\]\.(\w+)/;

export async function transform(raw) {
  const data = {};

  for (const name in raw) {
    const match = name.match(NESTED_KEY_RE);
    const value = await getValue(raw[name]);
    const key = match === null ? name : match[1];

    if (match === null) {
      data[key] = value;
    } else {
      const index = parseInt(match[2], 10);
      const prop = match[3];

      if (data[key] === undefined) {
        data[key] = [];
      }

      if (data[key][index] === undefined) {
        data[key][index] = {};
      }

      data[key][index][prop] = value;
    }
  }

  for (const name in data) {
    if (Array.isArray(data[name])) {
      data[name] = data[name].filter((value) => value !== undefined);
    }
  }

  return data;
}
