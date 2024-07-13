export function generateId() {
  return Math.random().toString(36).substring(2, 11);
}

export function getRandomNumber(min: number = 0, max: number = 1): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}