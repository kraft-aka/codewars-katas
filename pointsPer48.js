// NBA full 48 minutes average

function pointsPer48(ppg, mpg) {
  return ppg && mpg ? Math.round((10 * (48 * ppg)) / mpg) / 10 : 0;
}
