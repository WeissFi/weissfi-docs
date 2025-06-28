# Borrow

## How Does Borrowing Work?

**WeissFi** enables users to borrow the **DORI** stablecoin against their **SUI** holdings with **user-defined interest rates**. Unlike traditional DeFi lending platforms, WeissFi gives borrowers **full control** over the interest they pay, making it a flexible and capital-efficient borrowing solution.

### Unlike traditional lending platforms, WeissFi lets you:

- **Instant Liquidity** – Borrow DORI immediately against your SUI holdings while maintaining exposure to the asset.
- **Choose your interest rate** – You decide the interest rate for your loan, allowing for optimal financial planning.
- **Efficient Liquidations** – WeissFi utilizes Stability Pools to absorb liquidated debt, protecting borrowers from sudden liquidations.
- **No Fixed Repayment Schedule** – Repay your loan at any time, as long as you maintain a healthy Loan-To-Value (LTV) ratio.
- **No Counterparty Risk** – WeissFi is a fully decentralized protocol running on the Sui blockchain.
- **Avoid Unpredictable Interest Hikes** – Unlike traditional lending platforms where interest rates fluctuate based on external governance or algorithmic adjustments, WeissFi allows borrowers to set their own interest rate.

---

## How to Borrow (Step-by-Step)

### Step 1: Enter the Collateral Amount

- Enter the amount of **SUI** you want to use as collateral.
- Your collateral determines how much **DORI** you can borrow.

### Step 2: Choose Loan Amount

- Enter the amount of **DORI** you wish to borrow.
- Monitor:
  - **LTV (Loan-to-Value Ratio)**
  - **Liquidation Price**

> - **LTV** measures how much you borrow relative to your collateral. A higher LTV means higher risk.  
> - **Liquidation Price** is the SUI price at which your loan will be liquidated if your collateral becomes insufficient.

### Step 3: Select Your Interest Rate

- Set the interest rate you’re willing to pay.
- Lower rates reduce your borrowing cost but **increase redemption risk**.

> **Redemption Risk**: If the DORI peg falls below $1, users can redeem DORI for your collateral at a 5% discount.

### Step 4: Review & Sign

- Check the loan summary:
  - ✅ Collateral
  - ✅ Loan amount
  - ✅ Interest rate
  - ✅ Total Debt = Loan Value + (0.75% Borrowing Fee) + (7-Day Interest Rate)
- Click **Confirm & Sign** to finalize your loan.
- You receive **DORI** directly in your wallet and can use it immediately.

---

## Glossary

### Loan-to-Value (LTV) Ratio

**Definition**: The ratio between the amount of **DORI borrowed** and the **deposited collateral** (in USD).

$$
LTV = \left(\frac{\text{Borrowed DORI (USD)}}{\text{Collateral Value (USD)}}\right) \times 100
$$

**Example**:

- SUI Price: $3.9674  
- Collateral: 2,000 SUI  
- Collateral Value: 2,000 × 3.9674 = **$7,934.80**  
- Borrowed Amount: 2,000 DORI

$$
LTV = \left(\frac{2,000}{7,934.80}\right) \times 100 = 25.20\%
$$

> 🔺 Higher LTV = Higher liquidation risk.

---

### Liquidation Price

**Definition**: The SUI price at which your collateral is no longer sufficient to cover your borrowed DORI.

$$
\text{Liquidation Price} = \frac{\text{Borrowed Amount} \times 1.19}{\text{Collateral Deposited}}
$$

**Example**:

- SUI Price: $3.9674  
- Collateral: 2,000 SUI  
- Borrowed Amount: 2,000 DORI  
- Max LTV = 80%

$$
\text{Liquidation Price} = \frac{2,000 \times 1.19}{2,000} = 1.19
$$

> If the price of SUI drops below **$1.19**, your position will be liquidated.

---

### Redemption Mode 

If DORI loses its $1 peg, holders can **redeem DORI for SUI** via the redemption mechanism.

- Affects **only** the borrowers with the **lowest collateralization ratio**.
- The redeemer reduces the **debt** of the least collateralized borrowers.
- Borrowers lose **some collateral**, but **their debt is reduced** by the same amount.

> - ❌ No additional fees for redemption  
> - ⚠️ Lower rates = higher chance of redemption  
> - ✅ Higher rates = safer from redemption

[→ learn more about redemption mode](/docs/redemption)

---

## To Summarize

- ✅ **Keep your LTV low** to avoid liquidation.  
- ⚖️ **Choose a balanced interest rate** to minimize redemption risk.  
- 📊 **Manage your loan anytime via the dashboard**.

> **Start borrowing today** and take advantage of decentralized finance on Sui.
