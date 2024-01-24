export function getBgColor(color: any): string {
  if (typeof color === 'object') {
    return color.background;
  }
  return color;
}

export function parseAttributes<T extends Record<string, any>, P extends Record<string, any>>(attributes: T, props: P) {
  let str = '';

  Object.keys(attributes).map((key) => {
    const item = attributes[key as keyof typeof attributes];
    str += `${attributeCSS(item.attribute, props[key as keyof typeof props], item.value, item.type)}`;
  });

  return str;
}

export function attributeCSS(
  attr: string | Array<string>,
  value?: string | number | boolean | Array<string>,
  defaultValue?: string,
  type?: string,
) {
  if ((typeof value === 'undefined') || (typeof value === 'boolean' && value === false)) {
    return "";
  }
  if (typeof attr === "object") {
    let str = "";
    attr.forEach((item) => {
      str += parseAttribute(item, value, defaultValue, type);
    });
    return str;
  }
  return parseAttribute(attr, value, defaultValue, type)
}

export function parseAttribute(attr: string, value: any, default_value?: string, type?: string) {
  return `${attr}: ${getAttributeValue(value, default_value, type)};`;
}

export function getAttributeValue(value: any, default_value?: any, type?: string,) {
  if (typeof value === 'boolean') {
    return default_value;
  }
  if (typeof value === 'number') {
    return type ? `${value}${type}` : value;
  }
  return `${value}`;
}