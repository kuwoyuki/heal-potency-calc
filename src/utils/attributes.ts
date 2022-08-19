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
const healingMagicPotency = (hmp: number, level: number, levelMod: any[]) => {
  const mainMod = levelMod[2] as number;
  let M, D;
  // until level 60, M = Floor [ ( ( Level - 50 ) x 2.5 ) + 75 ], D = Base_DET
  // after level 60 SQEX most likely changes D to make the healing weaker than damage
  if (level <= 60) {
    M = ~~((level - 50) * 2.5 + 75);
    D = levelMod[2];
  } else if (level === 70) {
    M = 125;
    D = 330;
  } else if (level === 80) {
    M = 100;
    D = 304;
  } else if (level === 90) {
    M = 569;
    D = 1522;
  } else {
    throw new Error("no M / D values for this level");
  }
  return ~~((M * (hmp - mainMod)) / D) + 100;
};
/**
 * f(DET) = ⌊ 130 · ( DET - LevelModLv, Main )/ LevelModLv, DIV + 1000 ⌋
 */
const determination = (det: number, levelMod: any[]) =>
  ~~((130 * (det - (levelMod[2] as number))) / (levelMod[4] as number) + 1000);

/**
 * f(SPD) = ⌊ 130 · ( SPD - LevelModLv, SUB )/ LevelModLv, DIV + 1000 ⌋
 * @param spd
 * @param level
 */
const speed = (spd: number, levelMod: any[]) =>
  ~~((130 * (spd - levelMod[3])) / levelMod[4] + 1000);

/**
 * f(CRIT) = ⌊ 200 · ( CRIT - LevelModLv, SUB )/ LevelModLv, DIV + 1400 ⌋
 * @param crit
 * @param levelMod
 */
const crit = (crit: number, levelMod: any[]) =>
  ~~((200 * (crit - levelMod[3])) / levelMod[4] + 1400);

export { weaponDamage, healingMagicPotency, determination, speed, crit };
