# Points System

The **WeissFi Points System** rewards users for borrowing and staking. The longer you keep debt open or your DORI staked, the faster your points grow — with different formulas for each activity.

Points are used to measure user contribution and may be used in future reward distributions or protocol incentives.

---

## 📊 Summary

- $1,000 of **vault debt** and $1,000 **staked** both earn points — but vault debt compounds faster over time.
- Below are example point gains for both actions:

### Vault Points (Example with $1,000 Debt)

| Duration | Points Earned |
|----------|----------------|
| 1 day    | 2              |
| 7 days   | 75             |
| 30 days  | 827            |
| 90 days  | 4,440          |

### Staking Points (Example with $1,000 Staked)

| Duration | Points Earned |
|----------|----------------|
| 1 day    | 6              |
| 7 days   | 112            |
| 30 days  | 659            |
| 90 days  | 2,301          |

---

## 🔢 Vault Points Formula

vaultPoints = doc.vaultPoints + (lastDebtValue / 1e9) × (vaultDays)^1.7 × 0.002

**Variables:**

- `doc.vaultPoints`: previously accumulated points  
- `lastDebtValue`: your vault debt (scaled to dollars using 1e9)  
- `vaultDays`: number of active borrowing days  
- `0.002`: vault multiplier  
- `1.7`: exponential growth factor  

**Simplified (with $1,000 debt):**

vaultPoints = 2 × (days)^1.7

---

## 🔢 Staking Points Formula

stakingPoints = doc.stakingPoints + (lastStakingValue / 1e9) × (stakingDays)^1.4 × 1.2 × 0.005


**Variables:**

- `doc.stakingPoints`: previously accumulated staking points  
- `lastStakingValue`: amount staked (scaled to dollars using 1e9)  
- `stakingDays`: number of staking days  
- `1.2 × 0.005`: staking multiplier  
- `1.4`: exponential growth factor  

**Simplified (with $1,000 staked):**

stakingPoints = 6 × (days)^1.4


---

## ⚖️ Vault vs Staking Comparison

- **Staking** gives higher points **early**.
- **Vaults** outperform over **longer durations**.
- Use staking for quick boosts, vaults for long-term compounding.

---

## 🔁 Points Accumulation

- Points **accumulate over time** and are saved on-chain.
- You can pause and resume borrowing or staking — accumulation continues from the last known state.

---

## 🧠 To Summarize

- Vaults reward **long-term borrowing** with exponential point scaling.
- Staking is ideal for **short-to-medium-term** yield optimization.
- The formulas are deterministic and scale with time and value.
- Points may unlock **future rewards, governance rights**, or **boosted yields**.

> 📈 Optimize your strategy to maximize your total points and climb the WeissFi leaderboard.

