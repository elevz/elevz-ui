export function getBgColor(color: any): string {
  if (typeof color === 'object') {
    return color.background;
  }
  return color;
}

export function attributeCSS(
  attr: string | Array<string>,
  value?: string | number | boolean | Array<string>,
  type?: string,
  defaultValue?: string
) {
  if (typeof value === 'undefined' || typeof value === 'boolean' && value === false) {
    return "";
  }
  if (typeof attr === "object") {
    let str = "";
    attr.forEach((item) => {
      str += parseAttribute(item, value, type, defaultValue);
    });
    return str;
  }
  return parseAttribute(attr, value, type, defaultValue)
}

export function parseAttribute(attr: string, value: any, type?: string, default_value?: string) {
  return `${attr}: ${getAttributeValue(value, type, default_value)};`;
}

export function getAttributeValue(value: any, type?: string, default_value?: any) {
  if (typeof value === 'boolean') {
    return default_value;
  }
  if (typeof value === 'number') {
    return type ? `${value}${type}` : value;
  }
  return `${value}`;
}