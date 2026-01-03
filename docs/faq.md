# FAQ

Find answers to the most common questions about WeissFi.

---

## General Questions

<details>
<summary><strong>What is WeissFi?</strong></summary>

WeissFi is a decentralized finance (DeFi) protocol built on the **Sui blockchain** that allows users to **borrow DORI** against their collateral (currently SUI) while setting their **own interest rates**.

It also enables users to **earn yield** through Stability Pools, all while benefiting from **transparent and efficient liquidations**.

</details>

<details>
<summary><strong>Why use WeissFi instead of traditional lending platforms?</strong></summary>

WeissFi introduces **user-controlled interest rates**, **efficient liquidations**, and **no fixed repayment schedules** — giving borrowers and depositors **full control** over their financial strategies.

</details>

---

## Borrowing

<details>
<summary><strong>How do I borrow with WeissFi?</strong></summary>

1. **Deposit collateral** (currently SUI)
2. **Choose how much DORI** you want to borrow (keep an eye on your **Loan-to-Value ratio**)
3. **Set your preferred interest rate** — higher rates lower your **risk of redemption**
4. **Confirm & sign** the transaction to receive DORI in your wallet
5. **Manage your loan** anytime via the dashboard

</details>

<details>
<summary><strong>What is LTV?</strong></summary>

**LTV (Loan-to-Value)** is the ratio of borrowed DORI to the USD value of your collateral.

- A **higher LTV** increases the **risk of liquidation**
- A **lower LTV** provides more **security**

</details>

<details>
<summary><strong>What is the Liquidation Price?</strong></summary>

The **Liquidation Price** is the price at which your **collateral is no longer sufficient** to cover your loan, triggering liquidation.

If the price of **your collateral falls below this level**, your position may be liquidated.

</details>

<details>
<summary><strong>What happens if I'm liquidated?</strong></summary>

- If your **LTV exceeds 83.33%** (120% MCR), your collateral is **automatically liquidated**
- Your **debt is repaid**
- Your **collateral is transferred** (at a discount) to **Stability Pool depositors**

</details>

<details>
<summary><strong>Can I repay early?</strong></summary>

Yes — just go to the **dashboard** and click **Repay Loan**.

- You can **repay any amount, at any time**
- There is **no fixed repayment schedule**

</details>

<details>
<summary><strong>Can I change my interest rate?</strong></summary>

**Yes!** You can adjust your interest rate **at any time** in the dashboard.

</details>

---

## Earning

<details>
<summary><strong>How do I earn with WeissFi?</strong></summary>

By depositing **DORI into Stability Pools**, you earn:

- **Protocol Interest** – Borrower-paid interest is split **85% to sDORI holders** and **15% to gDORI holders (Stability Pool)**
- **Liquidation Bonus** – When a borrower is liquidated, Stability Pool depositors receive collateral at a **10% discount**
- **Redistribution Fee** – If the Stability Pool is empty, a **20% fee** applies when debt is redistributed to other borrowers

</details>

<details>
<summary><strong>Can I withdraw at any time?</strong></summary>

**Yes.** You can withdraw your DORI at any time — **no lockups, no delays**.

</details>

<details>
<summary><strong>What are Stability Pools?</strong></summary>

**Stability Pools** are decentralized liquidity pools where users **deposit DORI** to earn rewards from:

- **Borrower interest payments**
- **Liquidation events**

Each Stability Pool is **tied to a specific collateral type**, allowing you to choose your **preferred risk exposure**.

</details>

---

## Redemptions

<details>
<summary><strong>What are redemptions?</strong></summary>

**Redemptions** ensure that **DORI maintains its $1 peg** by allowing users to **swap DORI for collateral at face value**.

- If DORI falls below $1, **arbitrageurs redeem DORI for collateral**, reducing supply and helping restore the peg
- Redemptions **start with borrowers paying the lowest interest rates**

</details>

<details>
<summary><strong>What happens if my loan is redeemed?</strong></summary>

- Your **debt is reduced**, and an **equivalent amount of collateral** is used to repay the redeemer
- You **do not lose USD value** — your **debt and collateral adjust proportionally**
- The **protocol collects a redemption fee** (0.5% + dynamic rate) from your collateral, while the redeemer receives the remaining amount

</details>

<details>
<summary><strong>Can I protect myself from redemptions?</strong></summary>

**Yes!**

- **Set a higher interest rate** to move further down the redemption queue
- **Monitor DORI price** — if DORI is trading **above $1**, redemptions do **not occur**

</details>

<details>
<summary><strong>Is there a fee during redemptions?</strong></summary>

Yes — a **small fee (0.5% + dynamic rate)** is deducted from the borrower's collateral when someone redeems DORI.

- The fee is **effectively paid by you as the borrower** through a deduction from your collateral
- This makes redemptions **fairer** than in other systems

</details>

---

## Protocol

<details>
<summary><strong>What happens if DORI trades below or above $1?</strong></summary>

- If **DORI trades below $1**, **redemptions increase** to reduce supply and bring the price back to peg
- If **DORI trades above $1**, **borrowers lower their interest rates**, increasing borrowing and restoring the peg

</details>

<details>
<summary><strong>Is WeissFi fully on-chain?</strong></summary>

**Yes!** All transactions, borrowing mechanics, and liquidations are **fully on-chain**, with **no centralized control**.

</details>
