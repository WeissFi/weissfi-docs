# Fees

**WeissFi** provides a transparent fee structure to ensure users have full visibility into the costs associated with borrowing, repayments, liquidations, and redemptions. Below is a breakdown of all applicable fees.

---

## Borrowing Fees

### 📌 Borrowing Fee

- **0.75% fee** on the borrowed amount.
- Applied **each time** the borrower draws additional DORI from their Trove.
- The fee is **added to the debt**, not deducted from the borrowed amount.
- **100% → Allocated to the WeissFi team** for protocol sustainability.

### 💸 Upfront Interest Payment

- When opening a loan, borrowers must pay **7 days of interest upfront**.
- This interest is **added to the debt** at loan creation.
- Each time the borrower modifies their interest rate, another **7 days of interest** is added.
- Prevents abuse by ensuring commitment when adjusting rates.
- **100% → Distributed to Earners** in the Stability Pool.

---

## Interest Rate (Ongoing Borrowing Cost)

### 📈 Annual Interest Rate (User-Defined)

- Borrowers **set their own interest rate** when creating a loan.
- Interest **accrues over time** and is added to the outstanding debt.
- A higher interest rate reduces **redemption risk**, but increases borrowing cost.

### 🔁 Interest Rate Modifications

- Borrowers can **modify** their interest rate at any time.
- Each modification adds **7 days of interest (at the new rate)** to the debt.
- This mechanism prevents abuse and ensures fair compensation to liquidity providers.

**Interest Fee Distribution:**

- **75% → Stability Pool (Earners)**
- **25% → Liquidity Pool (Liquidity Providers)**

---

## Liquidation Fees

- If a borrower's **Loan-to-Value (LTV)** exceeds **90%**, their collateral is **automatically liquidated**.
- A **6% liquidation penalty** is applied to the borrower's collateral.
- The borrower keeps any remaining collateral after liquidation.

**Liquidation Fee Distribution:**

- **85% → Stability Pool (Earners)**
- **15% → WeissFi Team**

---

## Redemption Fees

- Redemptions occur when **DORI trades below $1**.
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
| **Borrowing Fee**          | 0.75% on each DORI draw, added to debt.                                     |
| **Upfront Interest**       | 7 days of interest paid upfront at loan creation or interest rate change.   |
| **Ongoing Interest**       | Set by the borrower, accrues over time.                                     |
| **Interest Modifications** | Each modification adds 7 days of interest to debt.                          |
| **Liquidation Penalty**    | 6% of collateral taken upon liquidation.                                    |
| **Liquidation Fee Split**  | 85% to Stability Pool, 15% to WeissFi team.                                 |
| **Redemption Fee**         | Minimum 0.5% + baseRate, adjusts dynamically based on demand.               |

---

**WeissFi** ensures full transparency and predictability, with **no hidden costs**. All fees are clearly defined, and borrowers remain in full control of their interest rates.
