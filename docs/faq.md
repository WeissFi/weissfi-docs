# FAQ 

# General Questions

### What is WeissFi?

WeissFi is a decentralized finance (DeFi) protocol built on the **Sui blockchain** that allows users to **borrow DORI** against their SUI holdings while setting their **own interest rates**.  
It also enables users to **earn yield** through Stability Pools, all while benefiting from **transparent and efficient liquidations**.

---

### Why use WeissFi instead of traditional lending platforms?

WeissFi introduces **user-controlled interest rates**, **efficient liquidations**, and **no fixed repayment schedules** — giving borrowers and depositors **full control** over their financial strategies.

---

# Borrowing FAQ

### How do I borrow with WeissFi?

1. **Deposit SUI** as collateral.  
2. **Choose how much DORI** you want to borrow (keep an eye on your **Loan-to-Value ratio**).  
3. **Set your preferred interest rate** — higher rates lower your **risk of redemption**.  
4. **Confirm & sign** the transaction to receive DORI in your wallet.  
5. **Manage your loan** anytime via the dashboard.

---

### What is LTV?

**LTV (Loan-to-Value)** is the ratio of borrowed DORI to the USD value of your collateral.

- 📈 A **higher LTV** increases the **risk of liquidation**.  
- 📉 A **lower LTV** provides more **security**.

---

### What is the Liquidation Price?

The **Liquidation Price** is the price at which your **collateral is no longer sufficient** to cover your loan, triggering liquidation.

- If the price of **SUI falls below this level**, your position may be liquidated.

---

### What happens if I'm liquidated?

- If your **LTV exceeds 91%**, your collateral is **automatically liquidated**.  
- Your **debt is repaid**.  
- Your **collateral is transferred** (at a discount) to **Stability Pool depositors**.

---

### Can I repay early?

Yes — just go to the **dashboard** and click **Repay Loan**.

- You can **repay any amount, at any time**.  
- There is **no fixed repayment schedule**.

---

# Earning FAQ

### How do I earn with WeissFi?

By depositing **DORI into Stability Pools**, you earn:

- **Interest Payments** – Borrowers pay interest, and **50% of that is distributed to depositors**.
- **Liquidation Gains** – When a borrower is liquidated, depositors receive their **SUI collateral at a ~2.5% discount**.

---

### Can I withdraw at any time?

**Yes.**  
You can withdraw your DORI at any time — **no lockups, no delays**.

---

### What are Stability Pools?

**Stability Pools** are decentralized liquidity pools where users **deposit DORI** to earn rewards from:

- **Borrower interest payments**
- **Liquidation events**

Each Stability Pool is **tied to a specific collateral** (e.g., **SUI**), allowing you to choose your **preferred risk exposure**.

---

# Redemptions FAQ

### What are redemptions?

**Redemptions** ensure that **DORI maintains its $1 peg** by allowing users to **swap DORI for SUI at face value**.

- If DORI falls below $1, **arbitrageurs redeem DORI for SUI**, reducing supply and helping restore the peg.
- Redemptions **start with borrowers paying the lowest interest rates**.

---

### What happens if my loan is redeemed?

- Your **debt is reduced**, and an **equivalent amount of collateral** is used to repay the redeemer.
- You **do not lose USD value** — your **debt and collateral adjust proportionally**.
- You **keep a small redemption fee** (e.g. ~0.5%) from the redeemer.

---

### Can I protect myself from redemptions?

**Yes!**

- **Set a higher interest rate** to move further down the redemption queue.
- **Monitor DORI price** — if DORI is trading **above $1**, redemptions do **not occur**.

---

### Is there a fee during redemptions?

Yes — a **small fee (~0.5%)** is applied when someone redeems DORI for SUI.

- The fee is **not paid by you**, but is **retained in your Trove** (borrower position).
- This makes redemptions **fairer** than in other systems.

---
# Additional Questions

### Can I change my interest rate?

**Yes!**  
You can adjust your interest rate **at any time** in the dashboard.

---

### What happens if DORI trades below or above $1?

- If **DORI trades below $1**, **redemptions increase** to reduce supply and bring the price back to peg.
- If **DORI trades above $1**, **borrowers lower their interest rates**, increasing borrowing and restoring the peg.

---

### Is WeissFi fully on-chain?

**Yes!**  
All transactions, borrowing mechanics, and liquidations are **fully on-chain**, with **no centralized control**.
