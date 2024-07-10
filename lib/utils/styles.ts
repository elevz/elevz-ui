export function combineClassName(...classes: Array<string | { [key: string]: any } | [boolean, string] | undefined>): string {
  let className = '';

  classes.forEach((item) => {
    if (!item) {
      return;
    }

    if (typeof item === 'string') {
      return className += ' ' + item;
    }

    if (item.constructor.name === 'Array') {
      if (!item[0]) {
        return;
      }
      return className += ' ' + item[1];
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

export function setCSSVariable(variable: string, value: string) {
  const root = document.documentElement;
  root.style.setProperty(variable, value);
}

export function generateCSSFile(colors: Record<string, any>) {
  let cssVariables = '';
  for (const [key, value] of Object.entries(colors)) {
    const cssVar = `--ez-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
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