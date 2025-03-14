export function calculateWinRate(wons: number, losts: number): number {
  return Math.round((wons / (wons + losts)) * 10000) / 100
}
