export function getBgColor(color: any): string {
  if(typeof color === 'object'){
    return color.background;
  }
  return color;
}