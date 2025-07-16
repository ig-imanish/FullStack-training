function generateId() {
  return Math.floor(Math.abs(Math.random() * 999999999 - 1000000000 + 1));
}
export { generateId };