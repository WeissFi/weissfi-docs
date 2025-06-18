# Vault Drop Campaign

The **Vault Drop Campaign** is a special WeissFi launch event rewarding borrowers who keep their vaults active.

Each week, **5 vaults** are randomly selected to receive **10,000 bonus Points** — powered by **Switchboard randomness**, an on-chain, verifiable randomness oracle on Sui.

---

## 🎁 What is a Vault Drop?

Every Friday, WeissFi distributes bonus Points to randomly selected vaults.  
Each selected vault receives **10,000 Points**, added directly to their Points total.

You don’t need to do anything except keep your vault open and active.

---

## ✅ How to Be Eligible

You are **automatically eligible** if:

- You have an open vault with **at least $100 in active debt**
- Your vault has been open for **at least 24 hours**
- You have not closed or reset your vault during the week

No registration or staking is required.

---

## 🎯 Weekly Rewards

- **Number of winners:** 5 vaults per week  
- **Reward per winner:** `10,000 WeissFi Points`

These Points count toward future airdrops, protocol incentives, and leaderboard rankings.

---

## 🔐 How Are Winners Chosen?

We use [**Switchboard**](https://switchboard.xyz) — a decentralized, on-chain randomness oracle on Sui — to ensure:

- ✅ Fairness
- ✅ Transparency
- ✅ Full verifiability

### Selection Process

1. **Vault Snapshot**: Every Friday at 17:30 UTC, eligible vaults are recorded.
2. **Randomness Fetch**: At 18:00 UTC, randomness is pulled from Switchboard.
3. **Seed Generation**: seed = sha256("weissfi-vaultdrop-week-X" + randomness)

4. **Winner Selection**:  
Using the seed, we randomly select **5 vaults** from the eligible list (optionally weighted).
5. **Result Publication**:  
All selection data and winners are published for transparency.
6. **Point Distribution**:  
Each winner receives `10,000 Points` on-chain.

---

## 📊 Selection Weights

Vaults are chosen randomly, but vaults with longer and larger debt positions may have slightly higher odds.

We use a weight formula:

weight = √(debtAmountInUSD × activeDays)


---

## 📅 Weekly Timeline

| Time (UTC)   | Action                             |
|--------------|------------------------------------|
| 17:30 Friday | Vault snapshot                     |
| 18:00 Friday | Randomness pulled from Switchboard |
| 18:01 Friday | 5 winners selected & rewarded      |
| 18:10 Friday | Results published in dashboard     |

---

## 📣 Transparency & Verification

WeissFi will publish each week:

- ✅ The Switchboard round and randomness used
- ✅ The final seed
- ✅ The list of eligible vaults
- ✅ The 5 selected winners
- ✅ Proof of Points distribution

Anyone can verify the process was fair.

---

## 🧠 Summary

- Borrow at least $100 and keep your vault open
- Every Friday, 5 vaults are rewarded with **10,000 Points**
- Winners are picked using **Switchboard randomness**
- Nothing to claim — rewards are automatic

> Vault Drop is available only during the launch campaign. Don’t miss your chance to win and boost your Points.