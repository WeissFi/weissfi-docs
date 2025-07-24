# Redemption Mode

## What Are Redemptions?

**Redemptions** are a key mechanism that helps maintain **DORI’s peg to $1** without relying on centralized assets or third parties.

A **redemption** allows a user to **swap DORI for SUI at face value** 

(1 DORI = $1 worth of SUI). When the price of DORI falls below $1, arbitrageurs can redeem DORI for SUI, reducing the DORI supply and helping restore its peg.

### How It Works:

1. The redeemer sends **DORI** to the protocol.  
2. In return, they receive **SUI**, minus a small redemption fee.  
3. Redemptions are processed from **borrowers with the lowest collateral ratio**.  

> ✅ This ensures **market-driven stability** and maintains the DORI peg.

---

## How Do Redemptions Affect Borrowers?

When a redemption occurs:

- A portion of the borrower's **SUI collateral** is used.
- Their **debt is reduced** proportionally.
- Borrowers **do not lose USD value** — the system adjusts both debt and collateral.

### Example:

|                | Before Redemption      | After Redemption       |
|----------------|------------------------|-------------------------|
| SUI Collateral | 10,000 SUI             | 9,500 SUI               |
| DORI Debt      | 5,000 DORI             | 4,750 DORI              |
| Fee            | 2.5% (SUI stays with borrower) | ✅ |

> 💡 Borrowers do not lose funds in USD terms — redemptions simply **rebalance debt and collateral**.

---

## Redemption Fees

- A **small fee** is applied to each redemption.
- The fee is based on the **amount redeemed** and **recent redemption volume**.
- **Starts at 0.5%** and **decays over time** if redemptions slow down.

> ✅ **Unlike other systems**, the **borrower keeps the fee**, making redemptions more fair.

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
