export function sumMix(x: any[]): number {
  return x.reduce((a, b) => Number(a) + Number(b), 0)
}