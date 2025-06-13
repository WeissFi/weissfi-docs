# Redemption Mode

## What Are Redemptions?

**Redemptions** are a key mechanism that helps maintain **WEIS’s peg to $1** without relying on centralized assets or third parties.

A **redemption** allows a user to **swap WEIS for SUI at face value** (1 WEIS = $1 worth of SUI). When the price of WEIS falls below $1, arbitrageurs can redeem WEIS for SUI, reducing the WEIS supply and helping restore its peg.

### How It Works:

1. The redeemer sends **WEIS** to the protocol.  
2. In return, they receive **SUI**, minus a small redemption fee.  
3. Redemptions are processed from **borrowers with the lowest collateral ratio**.  

> ✅ This ensures **market-driven stability** and maintains the WEIS peg.

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
| WEIS Debt      | 5,000 WEIS             | 4,750 WEIS              |
| Fee            | 2.5% (SUI stays with borrower) | ✅ |

> 💡 Borrowers do not lose funds in USD terms — redemptions simply **rebalance debt and collateral**.

---

## Redemption Fees

- A **small fee** is applied to each redemption.
- The fee is based on the **amount redeemed** and **recent redemption volume**.
- **Starts at 0.5%** and **decays over time** if redemptions slow down.

> ✅ **Unlike other systems**, the **borrower keeps the fee**, making redemptions more fair.

> 💡 If WEIS is trading **at or above $1**, redemptions are **unlikely** to occur.

---

## How to Protect Yourself from Redemptions

The risk of being redeemed depends on:

- **Your Interest Rate** – Borrowers with the **lowest rates** are redeemed first.
- **The Price of WEIS** – If WEIS is **above $1**, redemptions are **not profitable**.

### To reduce your redemption risk:

- 📈 **Set a higher interest rate** – This moves you **further down** the redemption queue.
- 🧠 **Monitor redemption activity** – Stay informed on how much WEIS is being redeemed.

---

## To Summarize

- 🔄 Redemptions keep WEIS stable and are only triggered **when WEIS < $1**.
- ✅ Borrowers **don’t lose value in USD terms** — only collateral and debt are adjusted.
- 📊 By understanding how redemptions work, you can **strategically manage borrowing** and minimize risk.
