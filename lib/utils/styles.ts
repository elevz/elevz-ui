import { twMerge } from 'tailwind-merge';

export function combineClassName(...classes: Array<string | { [key: string]: any } | [boolean, string, string] | undefined>): string {
  let className = '';

  classes.forEach((item) => {
    if (!item) {
      return;
    }

    if (typeof item === 'string') {
      return className += ' ' + item;
    }

    if (item.constructor.name === 'Array') {
      if (!item[0] && !item[2]) {
        return;
      }

      return className += ' ' + (item[0] ? item[1] : item[2]);
    }

    if (item.constructor.name === 'Object') {
      for (const [key, value] of Object.entries(item)) {
        if (!!value) {
          className += ' ' + key;
        }
      }
    }
  });

  return twMerge(className.trim());
}