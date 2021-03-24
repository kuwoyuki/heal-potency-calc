import { useState } from "preact/hooks";
import classes from "./stats.module.css";
import { heal } from "../utils/healing";

const Signup = () => {
  const [state, setState] = useState({
    potency: 0,
    weaponDmg: 0,
    mnd: 0,
    det: 0,
    buffMod: 1,
    rollMod: 1,
    sps: 0,
    crit: 0,
  });
  const [critOn, setCritOn] = useState(false);
  const [hotOn, setHotOn] = useState(false);
  const [healing, setHealing] = useState(0);

  const handleChange = (e: any) => {
    const { name, value } = e.currentTarget;
    setState((p: any) => ({
      ...p,
      [name]: +value,
    }));
  };

  const handleSubmit = (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    if (!critOn) {
      setState((p) => ({ ...p, crit: 0 }));
    }
    if (!hotOn) {
      setState((p) => ({ ...p, sps: 0 }));
    }

    console.debug(state);

    setHealing(
      ~~heal(
        state.potency,
        80,
        "WHM",
        state.weaponDmg,
        state.mnd,
        state.det,
        state.buffMod,
        state.rollMod,
        state.sps,
        state.crit
      )
    );
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <div className={classes.flexOuter}>
          <div>
            <label>potency</label>
            <input
              type="number"
              name="potency"
              value={state.potency}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>WD</label>
            <input
              type="number"
              name="weaponDmg"
              value={state.weaponDmg}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>MND</label>
            <input
              type="number"
              name="mnd"
              value={state.mnd}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>DET</label>
            <input
              type="number"
              name="det"
              value={state.det}
              onChange={handleChange}
            />
          </div>
          {hotOn && (
            <div>
              <label>SpS</label>
              <input
                type="number"
                name="sps"
                value={state.sps}
                onChange={handleChange}
              />
            </div>
          )}
          {critOn && (
            <div>
              <label>Crit</label>
              <input
                type="number"
                name="crit"
                value={state.crit}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <p>Flags</p>
            <div className={classes.flexInner}>
              <div>
                <input
                  type="checkbox"
                  id="isHot"
                  onClick={() => setHotOn((p) => !p)}
                />
                <label for="isHot">HoT</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="isCrit"
                  onClick={() => setCritOn((p) => !p)}
                />
                <label for="isCrit">Crit</label>
              </div>
            </div>
          </div>

          <input type="submit" value="Calculate" />
        </div>
      </form>

      <h3>
        {state.potency} potency is{" "}
        <span className={classes.highlight}>{healing}</span>{" "}
        {hotOn ? "HoT" : "direct healing"}
      </h3>
    </div>
  );
};
export default Signup;
