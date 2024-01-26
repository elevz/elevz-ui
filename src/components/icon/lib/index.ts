import type { IconComponent } from "../icon-types";
import * as arrows from "./arrow";
import * as chevron from "./chevron";
import * as logo from "./logo";
import * as general from "./general";
import * as operators from "./operators";

function parseName(str: string) {
  let name = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === ch.toUpperCase()) {
      name += `${i > 0 ? '-' : ''}${ch.toLowerCase()}`
      continue;
    }
    name += ch;
  }
  return name;
}

function transformObj(items: {}) {
  const obj: any = {};

  Object.keys(items).map((key) => {
    obj[parseName(key)] = items[key as keyof typeof items];
  });

  return obj;
}

const icons: Record<string, IconComponent> = {
  ...transformObj(arrows),
  ...transformObj(chevron),
  ...transformObj(general),
  ...transformObj(logo),
  ...transformObj(operators),
}

export default icons;