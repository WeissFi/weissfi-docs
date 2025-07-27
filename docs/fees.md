# Fees

**WeissFi** provides a transparent fee structure to ensure users have full visibility into the costs associated with borrowing, repayments, liquidations, and redemptions. Below is a breakdown of all applicable fees.

---

## Borrowing Fees

### 📌 Borrowing Fee

- **0.75% fee** on the borrowed amount.
- Applied when **opening a vault** and when **updating the interest rate**.
- The fee is **added to the debt**, not deducted from the borrowed amount.
- **100% → Allocated to the WeissFi team** for protocol sustainability.

### 💸 Upfront Interest Payment

- When opening a vault or updating interest rates, borrowers must pay **15 days of average protocol interest upfront**.
- This interest is **added to the debt** at vault creation or rate modification.
- Prevents abuse by ensuring commitment when adjusting rates.
- **80% → Distributed to Earners** in the Stability Pool, **20% → Liquidity Providers/NFT Stakers**.

---

## Interest Rate (Ongoing Borrowing Cost)

### 📈 Annual Interest Rate (User-Defined)

- Borrowers **set their own interest rate** when creating a loan.
- Interest **accrues over time** and is added to the outstanding debt.
- A higher interest rate reduces **redemption risk**, but increases borrowing cost.

### 🔁 Interest Rate Modifications

- Borrowers can **modify** their interest rate at any time.
- Each interest rate modification adds **15 days of interest (at the new rate)** to the debt.
- This mechanism prevents abuse and ensures fair compensation to liquidity providers.

**Interest Fee Distribution:**

- **80% → Stability Pool (Earners)**
- **20% → Liquidity Providers/NFT Stakers (Farming)**

---

## Liquidation Fees

- If a borrower's **Loan-to-Value (LTV)** exceeds **83.33%** (120% MCR), their collateral is **automatically liquidated**.
- A **10% liquidation penalty** is applied to the borrower's collateral.
- The borrower keeps any remaining collateral after liquidation.

**Liquidation Fee Distribution:**

- **100% → Stability Pool (Earners)**
- **0% → WeissFi Team** (WeissFi team currently takes no fees on liquidation)

---

## Redemption Fees

- Redemptions occur when **DORI depegs** and creates arbitrage opportunities.
- Fees are based on a dynamic variable called **`baseRate`**.

### Redemption Fee Formula:

- `baseRate` increases with each redemption and **decays exponentially** over time (half-life of 6 hours).
- High redemption demand → higher fees.  
- Low redemption demand → fees gradually reduce.

> Borrowers affected by redemptions **do not lose value** in USD terms — their **debt is reduced proportionally**.

---

## Summary Table

| **Fee Type**               | **Details**                                                                 |
|----------------------------|------------------------------------------------------------------------------|
| **Borrowing Fee**          | 0.75% on vault creation and interest rate updates, added to debt.           |
| **Upfront Interest**       | 15 days of average protocol interest paid upfront at vault creation or interest rate change. |
| **Ongoing Interest**       | Set by the borrower, accrues over time.                                     |
| **Interest Modifications** | Each modification adds 15 days of interest + 0.75% fee to debt.             |
| **Liquidation Penalty**    | 10% of collateral taken upon liquidation.                                   |
| **Liquidation Fee Split**  | 100% to Stability Pool, 0% to WeissFi team.                                 |
| **Redemption Fee**         | 0.5% base + dynamic rate that halves every 6 hours to protect against large redemptions. |

---

**WeissFi** ensures full transparency and predictability, with **no hidden costs**. All fees are clearly defined, and borrowers remain in full control of their interest rates.
