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

  return className.trim();
}

export function generateCSSFile(colors: Record<string, any>) {
  let cssVariables = '';
  for (const [key, value] of Object.entries(colors)) {
    const cssVar = `--ez-${key.replace('_', '-')}`;
    cssVariables += `  ${cssVar}: ${value};\n`;
  }
  return cssVariables;
}

export function generateCSSVariables(colors: Record<string, any>) {
  const styleSheet = document.createElement('style');
  styleSheet.setAttribute('data-ez-css-variables', 'true');
  styleSheet.setAttribute('type', 'text/css');
  document.head.appendChild(styleSheet);

  styleSheet.innerText = `*{\n ${generateCSSFile(colors)} }`
}

export function toggleTheme() {
  const htmlElement = document.documentElement;

  if (htmlElement.classList.contains('ez-dark')) {
    htmlElement.classList.remove('ez-dark');
  } else {
    htmlElement.classList.add('ez-dark');
  }
}