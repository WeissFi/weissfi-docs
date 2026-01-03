# gDORI

## Introduction

**gDORI** (Guard DORI) is a yield-bearing token that simplifies participation in WeissFi's Stability Pools. Instead of manually managing deposits across multiple pools, users can deposit DORI and receive gDORI shares that automatically earn yield from liquidations across all supported collateral types.

gDORI represents a proportional share of DORI staked in the Guard Savings Module. The token increases in value through an exchange-rate mechanism as liquidation rewards are captured and compounded.

---

## Why gDORI?

### The Problem with Direct Stability Pool Deposits

Depositing directly into Stability Pools requires:

- **Manual management** of multiple pools (SUI, haSUI, xBTC, etc.)
- **Active monitoring** for liquidation events
- **Manual claiming** and selling of received collateral
- **Price risk exposure** while holding collateral before selling

### The gDORI Solution

gDORI solves these issues by:

- **One-click deposit** – Deposit DORI once, get exposure to all pools
- **Automatic diversification** – Your DORI is distributed across pools based on optimized allocations
- **Instant collateral liquidation** – A bot instantly sells collateral via 7K Aggregator when liquidations occur
- **Auto-compounding** – All gains are automatically restaked, increasing gDORI value

---

## How gDORI Works

### Architecture Overview

gDORI is implemented as:

- **A share token** representing your portion of the Guard Savings Module
- **Backed by DORI** staked across multiple Stability Pools
- **Value growth driven by liquidation gains and protocol interest**

The Guard Savings Module manages:

- Total DORI staked across all pools
- Total gDORI supply
- Exchange rate (DORI per gDORI)
- Allocation ratios per collateral type
- Automated settlement of liquidation rewards

**No locking period, no deposit fees, no withdrawal fees.**

---

### Deposit Flow

1. User deposits DORI into the Guard Savings Module
2. DORI is automatically distributed across Stability Pools based on allocation ratios
3. User receives `gDORI = deposit_amount / exchange_rate`

### Value Growth

gDORI increases in value from multiple yield sources:

#### 1. Liquidation Gains (10% Bonus)
When a vault is liquidated, Stability Pool depositors receive the borrower's collateral at a **10% discount**. The bot instantly sells this collateral via 7K Aggregator and restakes the DORI proceeds.

#### 2. Protocol Interest Distribution (15%)
**15% of all borrower-paid interest** is distributed to Stability Pool depositors in DORI. This provides a steady yield stream independent of liquidation events.

#### 3. Auto-Compounding
All rewards are automatically restaked, increasing the exchange rate:

```
new_rate = total_staked_DORI / total_gDORI
```

### Withdrawal Flow

1. User sends gDORI to the module
2. gDORI is burned
3. DORI is withdrawn pro-rata from all pools
4. User receives `DORI = gDORI * exchange_rate`

---

## Current Allocation Strategy

The current distribution of staked DORI across Stability Pools:

| Pool | Allocation |
|------|------------|
| **SUI** | 90% |
| **haSUI** | 5% |
| **xBTC** | 5% |

These allocations are managed by the protocol and can be adjusted to optimize yield and risk exposure.

---

## Automated Settlement Process

When a liquidation occurs:

1. **Notification** – The protocol notifies the Guard Savings Module
2. **Claim** – The admin bot claims the collateral from the affected pool
3. **Swap** – Collateral is instantly sold for DORI via **7K Aggregator**
4. **Restake** – DORI proceeds are restaked into the pool
5. **Value Accrual** – The exchange rate increases, benefiting all gDORI holders

This process happens near-instantly, minimizing price exposure risk.

---

## Properties

- **Constant balance** – Your gDORI balance stays the same; value increases via exchange rate
- **Fully backed** – Every gDORI is backed by DORI in Stability Pools
- **Always redeemable** – Withdraw your DORI at any time
- **Exchange-rate-based growth** – Your gDORI is worth more DORI over time
- **Zero lock-in** – No vesting or lockup periods
- **Zero fees** – No deposit or withdrawal fees
- **Automatic diversification** – Exposure to multiple collateral types
- **Risk-managed** – Instant collateral sales reduce price exposure

---

## gDORI vs Direct Stability Pool

| Feature | gDORI | Direct Stability Pool |
|---------|-------|----------------------|
| Diversification | Automatic | Manual |
| Collateral management | Automated (bot) | Manual |
| Price risk | Minimized | User bears risk |
| Complexity | Simple | Requires active management |
| Yield source | All pools combined | Single pool |
| Withdrawal | Pro-rata from all pools | Single pool |

---

## gDORI vs sDORI

| Feature | gDORI | sDORI |
|---------|-------|-------|
| **Yield source** | Liquidation gains (10% bonus) + 15% of protocol interest | 85% of protocol interest |
| **Backed by** | DORI in Stability Pools | DORI in Savings Pool |
| **Risk profile** | Higher yield potential, liquidation exposure | Lower risk, stable yield |
| **Use case** | Active yield optimization | Passive savings |

Both tokens are complementary and serve different user needs. Users seeking higher yields with automated management choose gDORI, while those preferring stable, predictable returns choose sDORI.

---

## Security Model

- **Atomic operations** – Deposits and withdrawals use a "hot potato" pattern ensuring all operations complete or revert
- **Pro-rata distribution** – Withdrawals are distributed proportionally across all pools
- **Settlement verification** – The system blocks deposits/withdrawals during active settlements to prevent manipulation
- **Nonce tracking** – Liquidation events are tracked to ensure proper settlement order
- **Admin separation** – Guard Savings has its own admin capability, isolated from other protocol components

---

## Summary

### What gDORI Offers

- Share token for the Guard Savings Module
- Value grows via exchange rate
- **Dual yield sources**: 10% liquidation bonus + 15% of protocol interest
- Automatic diversification across Stability Pools
- Instant collateral settlement via 7K Aggregator
- Auto-compounding of all rewards
- No fees, no lockups
- Redeemable anytime

### Ideal For

- Users who want Stability Pool exposure without active management
- Users who prefer automatic diversification
- Users who want to minimize collateral price risk
- Users seeking a simple "set and forget" yield strategy

---

gDORI transforms Stability Pool participation from an active, complex process into a simple, passive yield opportunity. Deposit DORI, receive gDORI, and let the protocol handle the rest.
