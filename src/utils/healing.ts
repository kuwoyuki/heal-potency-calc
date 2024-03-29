import {
  determination,
  healingMagicPotency,
  weaponDamage,
  speed,
  crit as critFn,
} from "./attributes";
import { jobMods, levelMods } from "./mods";

const findJobMod = (job: string) =>
  jobMods.find(([, x]) => (x as string).startsWith(job));

const heal = (
  pot: number,
  level: number,
  job: string,
  wd: number,
  hmp: number,
  det: number,
  buffMod = 1,
  rollMod = 0.97,
  sps = 0,
  crit = 0
) => {
  const jobMod = findJobMod(job)![8];
  const levelMod = levelMods[level - 1];
  if (typeof jobMod !== "number") {
    throw new Error("Invalid job");
  }
  const h1 = ~~(
    ~~(
      (pot *
        healingMagicPotency(hmp, level, levelMod) *
        determination(det, levelMod)) /
      100
    ) / 1000
  );
  const h2 =
    ~~(
      (~~(
        ~~(~~(h1 * (sps ? speed(sps, levelMod) : 1000)) / 1000) *
        weaponDamage(levelMod, jobMod, wd)
      ) /
        100) *
      130
    ) / 100; // 1.3 is Maim and Mend / Magick and Mend trait
  return ~~(
    ~~((~~(h2 * rollMod) * (crit ? critFn(crit, levelMod) : 1000)) / 1000) *
    buffMod
  );
};

export { heal };
