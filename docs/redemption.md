# Redemption Mode

## What Are Redemptions?

**Redemptions** are a key mechanism that helps maintain **DORI’s peg to $1** without relying on centralized assets or third parties.

A **redemption** allows a user to **swap DORI for collateral at face value** 

(1 DORI = $1 worth of collateral). When the price of DORI falls below $1, arbitrageurs can redeem DORI for collateral, reducing the DORI supply and helping restore its peg.

### How It Works:

1. The redeemer sends **DORI** to the protocol.  
2. In return, they receive **collateral** (the redemption fee is deducted from the borrower's collateral).  
3. Redemptions are processed from **borrowers with the lowest collateral ratio**.  

> ✅ This ensures **market-driven stability** and maintains the DORI peg.

---

## How Do Redemptions Affect Borrowers?

When a redemption occurs:

- A portion of the borrower's **collateral** is used.
- Their **debt is reduced** proportionally.
- Borrowers **do not lose USD value** — the system adjusts both debt and collateral.

### Example:

|                | Before Redemption      | After Redemption       |
|----------------|------------------------|-------------------------|
| Collateral     | 10,000 units           | 9,500 units             |
| DORI Debt      | 5,000 DORI             | 4,750 DORI              |
| Fee            | 0.5% + dynamic (deducted from borrower's collateral) | ✅ |

> 💡 Borrowers do not lose funds in USD terms — redemptions simply **rebalance debt and collateral**.

---

## Redemption Fees

- A **small fee** is applied to each redemption.
- The fee is based on the **amount redeemed** and **recent redemption volume**.
- **Starts at 0.5%** and **decays over time** if redemptions slow down.

### How the Fee Works:
- When someone redeems $1000 DORI with a 0.5% fee:
  - Protocol deducts 0.5% ($5) from the borrower's collateral
  - Redeemer receives $995 worth of collateral  
  - Protocol keeps the $5 fee
  - **Borrower effectively pays the fee** through reduced collateral

> ✅ The **protocol collects a small fee from the borrower's collateral**, while the redeemer receives slightly less than face value.

> 💡 If DORI is trading **at or above $1**, redemptions are **unlikely** to occur.

---

## How to Protect Yourself from Redemptions

The risk of being redeemed depends on:

- **Your Interest Rate** – Borrowers with the **lowest rates** are redeemed first.
- **The Price of DORI** – If DORI is **equal or above $1**, redemptions are **not profitable**.

### To reduce your redemption risk:

- 📈 **Set a higher interest rate** – This moves you **further down** the redemption queue.
- 🧠 **Monitor redemption activity** – Stay informed on how much DORI is being redeemed.

---

## To Summarize

- 🔄 Redemptions keep DORI stable and are only triggered **when DORI < $1**.
- ✅ Borrowers **don’t lose value in USD terms** — only collateral and debt are adjusted.
- 📊 By understanding how redemptions work, you can **strategically manage borrowing** and minimize risk.
