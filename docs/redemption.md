# Redemption Mode

## What Are Redemptions?

**Redemptions** are a key mechanism that helps maintain **DORI's peg to $1** without relying on centralized assets or third parties.

A **redemption** allows a user to **swap DORI for collateral at face value**

(1 DORI = $1 worth of collateral). When the price of DORI falls below $1, arbitrageurs can redeem DORI for collateral, reducing the DORI supply and helping restore its peg.

<div style={{display: 'flex', justifyContent: 'center', margin: '2rem 0'}}>
  <div style={{display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
    <div style={{background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)', padding: '1rem 1.5rem', borderRadius: '1rem', color: 'white', textAlign: 'center', minWidth: '120px'}}>
      <div style={{fontSize: '1.5rem'}}>💵</div>
      <div style={{fontWeight: 'bold'}}>DORI</div>
      <div style={{fontSize: '0.8rem', opacity: 0.8}}>You Send</div>
    </div>
    <div style={{fontSize: '2rem', color: '#8b5cf6'}}>→</div>
    <div style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', padding: '1rem 1.5rem', borderRadius: '1rem', color: 'white', textAlign: 'center', minWidth: '120px'}}>
      <div style={{fontSize: '1.5rem'}}>🔄</div>
      <div style={{fontWeight: 'bold'}}>WeissFi Protocol</div>
      <div style={{fontSize: '0.8rem', opacity: 0.8}}>Processes Redemption</div>
    </div>
    <div style={{fontSize: '2rem', color: '#ec4899'}}>→</div>
    <div style={{background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', padding: '1rem 1.5rem', borderRadius: '1rem', color: 'white', textAlign: 'center', minWidth: '120px'}}>
      <div style={{fontSize: '1.5rem'}}>🔷</div>
      <div style={{fontWeight: 'bold'}}>SUI / haSUI / xBTC</div>
      <div style={{fontSize: '0.8rem', opacity: 0.8}}>You Receive</div>
    </div>
  </div>
</div>

### Key Features

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>
  <div style={{background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.75rem', padding: '1rem'}}>
    <div style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>💱</div>
    <div style={{fontWeight: 'bold', color: '#166534'}}>1:1 Face Value</div>
    <div style={{fontSize: '0.875rem', color: '#15803d'}}>1 DORI = $1 of collateral</div>
  </div>
  <div style={{background: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: '0.75rem', padding: '1rem'}}>
    <div style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>📊</div>
    <div style={{fontWeight: 'bold', color: '#7c3aed'}}>Peg Stability</div>
    <div style={{fontSize: '0.875rem', color: '#8b5cf6'}}>Maintains DORI at $1</div>
  </div>
  <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.75rem', padding: '1rem'}}>
    <div style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>🎯</div>
    <div style={{fontWeight: 'bold', color: '#1d4ed8'}}>Arbitrage Opportunity</div>
    <div style={{fontSize: '0.875rem', color: '#3b82f6'}}>Profit when DORI < $1</div>
  </div>
  <div style={{background: '#fefce8', border: '1px solid #fef08a', borderRadius: '0.75rem', padding: '1rem'}}>
    <div style={{fontSize: '1.25rem', marginBottom: '0.5rem'}}>🔐</div>
    <div style={{fontWeight: 'bold', color: '#a16207'}}>Decentralized</div>
    <div style={{fontSize: '0.875rem', color: '#ca8a04'}}>No centralized assets needed</div>
  </div>
</div>

### How It Works:

1. The redeemer sends **DORI** to the protocol.
2. In return, they receive **collateral** (the redemption fee is deducted from the borrower's collateral).
3. Redemptions are processed from **borrowers with the lowest collateral ratio**.

> This ensures **market-driven stability** and maintains the DORI peg.

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
