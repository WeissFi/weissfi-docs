# sDORI

## Introduction

**sDORI** is the yield-accruing version of the DORI stablecoin within the WeissFi protocol. It represents a proportional share of DORI held in the WeissFi Savings Pool and increases in value through an exchange-rate mechanism.

Users can deposit DORI into the Savings module to receive sDORI, and redeem sDORI back into DORI at any time at the current exchange rate. sDORI is non-rebasing, fully backed, and always redeemable for its underlying DORI value.

---

## Current Design (V1)

### Architecture Overview

sDORI is implemented as:

- **A non-rebasing share token**
- **Backed 1:1 by DORI** inside the Savings Pool
- **Value growth driven by protocol interest flows**

The Savings Pool contract manages:

- Total DORI held
- Total sDORI minted
- The exchange rate (dori_per_sdori)
- Reward distributions
- Deposit / redeem logic

**No locking period, no deposit fees, no withdrawal fees.**

---

### How sDORI Works (V1)

#### Deposit Flow

1. User deposits DORI into the Savings Pool
2. Pool mints `sDORI = amount / exchange_rate`
3. User receives sDORI in their wallet

#### Value Growth

sDORI increases in value when:

- **Borrowers pay interest**
  - 85% of all interest goes to the Savings Pool
  - 15% goes to the Stability Pool

When interest arrives, the Pool updates the exchange rate:

```
new_exchange_rate = totalDORI / totalSDORI
```

#### Redemption Flow

1. User sends sDORI to the Pool
2. Pool burns sDORI
3. Pool sends back `DORI = sDORI * exchange_rate`

---

### Properties (V1)

- ✅ **Non-rebasing**
- ✅ **Fully backed at all times**
- ✅ **Always redeemable**
- ✅ **Exchange-rate-based growth** (like sDAI, wstETH, BUIDL wrapper)
- ✅ **Zero lock-in**
- ✅ **Zero deposit fee**
- ✅ **Zero withdrawal fee**
- ✅ **Value accrues passively**

This makes sDORI a natural **"home asset"** for users who want a productive representation of DORI.

---

## Future Design (V2)

In V2, sDORI becomes the **central economic engine of WeissFi**.

The goal is to expand sDORI from a passive yield token into a **composable, productive asset** across the entire Sui ecosystem.

### New Yield Sources (V2)

#### 1. Productive Collateral (haSUI)

All SUI deposited in vaults will be automatically staked to **haSUI**. The staking rewards increase the total value of the collateral base.

#### 2. Protocol Self-Borrowing on Collateral Growth

When collateral grows (via staking yield), the protocol can:

- Open an internal vault
- Borrow DORI against the surplus
- Redirect these DORI into the Savings Pool

This creates **exponential growth** over time.

#### 3. Additional Strategies (Modular)

Future strategies may include:

- DORI/SUI LP fees
- DORI/USDC stability pools on FlowX
- Yield routing modules
- sDORI fixed-income tranches
- Institutional strategies

**sDORI absorbs the returned yield via the exchange-rate update.**

---

### New Utilities for sDORI (V2)

#### 1. sDORI as Collateral

Users will be able to open vaults using sDORI as collateral, similar to:

- stETH on Aave
- wstETH on Morpho
- sDAI on Spark

Since sDORI increases in value, users' **collateral ratios improve over time**.

#### 2. sDORI LP Pairing (DEX Integration)

- sDORI/DORI (low IL pool)
- sDORI/SUI
- sDORI/USDC

**sDORI becomes a core liquidity asset across Sui.**

#### 3. Boosting in the Stability Pool

Holding or depositing sDORI can grant:

- Increased liquidation rewards
- Fee discounts
- Points multipliers

#### 4. Fixed Yield Products

Users may stake sDORI into:

- 30-day
- 90-day
- 180-day

**Locked vaults that offer fixed, predictable yields.**

---

### Economic Flywheel (V2)

The sDORI flywheel becomes:

```
More borrowing → More interest → Higher sDORI exchange rate →
More demand for sDORI → More deposits → More protocol revenue →
More borrowing
```

And with productive collateral:

```
Staked SUI grows → Protocol borrows on growth →
Extra DORI enters Savings → sDORI exchange rate rises faster →
More users stake → TVL increases
```

This creates **compounded, self-reinforcing yield dynamics** unique to WeissFi.

---

## Security Model

- ✅ **Fully backed**: Every sDORI token always corresponds to underlying DORI in the pool
- ✅ **Monotonic exchange rate**: Exchange rate must only increase — never decrease
- ✅ **No reliance on external yield**: All yield sources come from:
  - Borrower interest
  - Collateral growth
  - Protocol internal operations
- ✅ **Withdraw anytime**: Users can redeem sDORI 1:1 against the pool value

---

## Summary

### Current sDORI (V1)

- Share token
- Non-rebasing
- Grows from borrower interest
- Redeemable anytime
- No fees, no lockups

### Future sDORI (V2)

- Receives yield from productive collateral
- Receives yield from protocol self-borrowing
- Becomes a collateral asset
- Becomes a liquidity asset
- Powers fixed-income products
- Integrates with the entire Sui ecosystem
- **Becomes the economic engine of WeissFi**

---

sDORI is designed not only as a yield-bearing version of DORI, but as a **foundational building block** for the long-term architecture of WeissFi V2 and beyond.
