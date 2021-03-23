/**
 * f(WD) = ⌊ ( Level Lv, MAIN × Job Job, Attribute / 1000 ) + WD ⌋
 * @param levelModMain
 * @param jobMod
 * @param wd
 * @returns
 */
const weaponDamage = (levelMod: any[], jobMod: number, wd: number) =>
  ~~((levelMod[2] * jobMod) / 1000 + wd);

/**
 * 80: f(HMP) = ⌊ 100 · ( HMP - 340 ) / 304 ⌋ + 100
 * 70: f(HMP) = ⌊ 100 · ( HMP - 292 ) / 264 ⌋ + 100
 *
 * @param {number} hmp
 */
const healingMagicPotency = (hmp: number, level: 70 | 80, levelMod: any[]) => {
  const mainMod = levelMod[2] as number;
  // todo: figure out how to get the divisor?
  if (![70, 80].includes(level)) {
    throw new Error("We don't support other levels yet.");
  }
  const d = level === 70 ? 264 : 304;
  return ~~((100 * (hmp - mainMod)) / d) + 100;
};
/**
 * f(DET) = ⌊ 130 · ( DET - LevelModLv, Main )/ LevelModLv, DIV + 1000 ⌋
 */
const determination = (det: number, levelMod: any[]) =>
  ~~(130 * (det - (levelMod[2] as number))) / (levelMod[4] as number) + 1000;

/**
 * f(SPD) = ⌊ 130 · ( SPD - LevelModLv, SUB )/ LevelModLv, DIV + 1000 ⌋
 * @param spd
 * @param level
 */
const speed = (spd: number, levelMod: any[]) =>
  ~~(130 * (spd - levelMod[3])) / levelMod[4] + 1000;

/**
 * f(CRIT) = ⌊ 200 · ( CRIT - LevelModLv, SUB )/ LevelModLv, DIV + 1400 ⌋
 * @param crit
 * @param levelMod
 */
const crit = (crit: number, levelMod: any[]) =>
  ~~(200 * (crit - levelMod[3])) / levelMod[4] + 1400;

export { weaponDamage, healingMagicPotency, determination, speed, crit };
