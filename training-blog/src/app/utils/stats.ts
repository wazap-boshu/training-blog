export const regressionLIne = (coordinates: { x: number, y: number }[]) => {
  const n = coordinates.length;
  const sigX = coordinates.reduce((acc, c) => acc + c.x, 0);
  const sigY = coordinates.reduce((acc, c) => acc + c.y, 0);
  const sigXX = coordinates.reduce((acc, c) => acc + c.x * c.x, 0);
  const sigXY = coordinates.reduce((acc, c) => acc + c.x * c.y, 0);
  const a = (n * sigXY - sigX * sigY) / (n * sigXX - Math.pow(sigX, 2));
  const b = (sigXX * sigY - sigXY * sigX) / (n * sigXX - Math.pow(sigX, 2));
  return { a, b };
}