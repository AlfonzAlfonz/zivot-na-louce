export const only = <T>(a: T | T[]) => Array.isArray(a) ? a[0] : a;
