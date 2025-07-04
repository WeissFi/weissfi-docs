import React, { useState } from "react";
import "./PointsCalculator.css";

export default function PointsCalculator() {
  const [debt, setDebt] = useState(1000);
  const [stake, setStake] = useState(1000);
  const [liquidity, setLiquidity] = useState(1000);

  const vault = (debt * Math.pow(30, 1.7) * 0.002).toFixed(2);
  const staking = (stake * Math.pow(30, 1.4) * 1.2 * 0.005).toFixed(2);
  const flowx = (liquidity * Math.pow(30, 2) * 0.015).toFixed(2);

  return (
    <div className="points-calculator">
      <h2>Points Calculator</h2>

      <div className="input-group">
        <label>Vault Debt ($)</label>
        <input
          type="number"
          value={debt}
          onChange={(e) => setDebt(Number(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>Staked $WEIS</label>
        <input
          type="number"
          value={stake}
          onChange={(e) => setStake(Number(e.target.value))}
        />
      </div>

      <div className="input-group">
        <label>FlowX Liquidity ($)</label>
        <input
          type="number"
          value={liquidity}
          onChange={(e) => setLiquidity(Number(e.target.value))}
        />
      </div>

      <div className="results">
        <p>Vault points/month: <strong>{vault}</strong></p>
        <p>Staking points/month: <strong>{staking}</strong></p>
        <p>FlowX points/month: <strong>{flowx}</strong></p>
      </div>
    </div>
  );
}
