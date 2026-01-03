# sDORI

## Introduction

**sDORI** is the yield-accruing version of the DORI stablecoin within the WeissFi protocol. It represents a proportional share of DORI held in the WeissFi Savings Pool and increases in value through an exchange-rate mechanism.

Users can deposit DORI into the Savings module to receive sDORI, and redeem sDORI back into DORI at any time at the current exchange rate. sDORI is non-rebasing, fully backed, and always redeemable for its underlying DORI value.

---

## Architecture Overview

sDORI is implemented as:

- **A share token** representing your portion of the Savings Pool
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

## How sDORI Works

### Deposit Flow

1. User deposits DORI into the Savings Pool
2. Pool mints `sDORI = amount / exchange_rate`
3. User receives sDORI in their wallet

### Value Growth

sDORI increases in value when:

- **Borrowers pay interest**
  - 85% of all interest goes to sDORI holders (Savings Pool)
  - 15% goes to gDORI holders (Stability Pool)

When interest arrives, the Pool updates the exchange rate:

```
new_exchange_rate = totalDORI / totalSDORI
```

### Redemption Flow

1. User sends sDORI to the Pool
2. Pool burns sDORI
3. Pool sends back `DORI = sDORI * exchange_rate`

---

## Properties

- **Constant balance** – Your sDORI balance stays the same; value increases via exchange rate
- **Fully backed at all times** – Every sDORI corresponds to underlying DORI
- **Always redeemable** – Withdraw your DORI at any time
- **Exchange-rate-based growth** – Your sDORI is worth more DORI over time
- **Zero lock-in** – No vesting or lockup periods
- **Zero deposit fee** – No fee when depositing DORI
- **Zero withdrawal fee** – No fee when redeeming sDORI
- **Value accrues passively** – No action required to earn yield

This makes sDORI a natural **"home asset"** for users who want a productive representation of DORI.

---

## Security Model

- **Fully backed**: Every sDORI token always corresponds to underlying DORI in the pool
- **Monotonic exchange rate**: Exchange rate only increases — never decreases
- **No reliance on external yield**: All yield comes from borrower interest
- **Withdraw anytime**: Users can redeem sDORI 1:1 against the pool value

---

## Summary

- Share token for the Savings Pool
- Value grows via exchange rate
- Grows from 85% of borrower interest
- Redeemable anytime
- No fees, no lockups
- Simple and safe

---

sDORI is a simple, safe yield-bearing version of DORI for users who want passive, predictable returns.
