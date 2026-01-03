# Fees

**WeissFi** provides a transparent fee structure to ensure users have full visibility into the costs associated with borrowing, repayments, liquidations, and redemptions. Below is a breakdown of all applicable fees.

---

## Borrowing Fees

### 📌 Borrowing Fee

- **0% fee** on the borrowed amount.
- No fee is applied when opening a vault or updating the interest rate.

### 💸 Upfront Interest Payment

- When opening a vault or updating interest rates, borrowers must pay **15 days of average protocol interest upfront**.
- This interest is **added to the debt** at vault creation or rate modification.
- Prevents abuse by ensuring commitment when adjusting rates.
- **85% → sDORI holders**, **15% → gDORI holders (Stability Pool)**.

---

## Interest Rate (Ongoing Borrowing Cost)

### 📈 Annual Interest Rate (User-Defined)

- Borrowers **set their own interest rate** when creating a loan.
- Interest **accrues over time** and is added to the outstanding debt.
- A higher interest rate reduces **redemption risk**, but increases borrowing cost.

### 🔁 Interest Rate Modifications

- Borrowers can **modify** their interest rate at any time.
- Each interest rate modification adds **15 days of average protocol interest (at the new rate)** to the debt.
- This mechanism prevents abuse and ensures fair compensation to liquidity providers.

**Interest Fee Distribution:**

- **85% → sDORI holders**
- **15% → gDORI holders (Stability Pool)**

---

## Liquidation Fees

- If a borrower's **Loan-to-Value (LTV)** exceeds **83.33%** (120% MCR), their collateral is **automatically liquidated**.
- A **10% liquidation bonus** is applied — Stability Pool depositors receive collateral at a 10% discount.
- The borrower keeps any remaining collateral after liquidation.

**Liquidation Distribution:**

- **100% → Stability Pool (gDORI holders)**

---

## Redistribution Fees

- If the **Stability Pool is empty** during a liquidation, the debt and collateral are **redistributed** to other active borrowers.
- A **20% redistribution fee** is applied to the redistributed collateral.

**Redistribution Distribution:**

- Remaining borrowers absorb the debt proportionally
- The 20% fee compensates them for taking on additional risk

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
| **Borrowing Fee**          | 0% – No borrowing fee.                                                      |
| **Upfront Interest**       | 15 days of average protocol interest paid upfront at vault creation or interest rate change. |
| **Ongoing Interest**       | Set by the borrower, accrues over time.                                     |
| **Interest Split**         | 85% to sDORI holders, 15% to gDORI holders (Stability Pool).                |
| **Liquidation Bonus**      | 10% bonus — Stability Pool depositors receive collateral at a 10% discount. |
| **Redistribution Fee**     | 20% fee when debt is redistributed to other borrowers (if Stability Pool is empty). |
| **Redemption Fee**         | 0.5% base + dynamic rate that halves every 6 hours. |

---

**WeissFi** ensures full transparency and predictability, with **no hidden costs**. All fees are clearly defined, and borrowers remain in full control of their interest rates.
