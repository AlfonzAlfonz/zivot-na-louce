export const trace = <T>(x: T): T => {
  console.log(x);
  return x;
};
