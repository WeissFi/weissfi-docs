import React, {useState} from 'react';

export default function PointsCalculator() {
  const [debt, setDebt] = useState(1000);
  const [stake, setStake] = useState(1000);

  const vault = (debt * Math.pow(30, 1.7) * 0.002).toFixed(2);
  const staking = (stake * Math.pow(30, 1.4) * 1.2 * 0.005).toFixed(2);

  return (
    <div style={{border: '1px solid #ccc', padding: '1rem', marginTop: '1rem'}}>
      <div>
        <label>Debt ($)&nbsp;</label>
        <input type="number" value={debt} onChange={e => setDebt(Number(e.target.value))} />
      </div>
      <div style={{marginTop: '0.5rem'}}>
        <label>Staking ($)&nbsp;</label>
        <input type="number" value={stake} onChange={e => setStake(Number(e.target.value))} />
      </div>
      <p style={{marginTop: '0.5rem'}}>Monthly vault points: <strong>{vault}</strong></p>
      <p>Monthly staking points: <strong>{staking}</strong></p>
    </div>
  );
}
