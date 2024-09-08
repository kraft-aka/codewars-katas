export function descendingOrder(n: number): number {
  return Number(String(n).split('').sort((a, b) => Number(b) - Number(a)).join(''))
}