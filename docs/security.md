# Security Disclosure / Audit Status

**Project:** WeissFi (Weiss Finance)
**Network:** Sui

**Core assets / modules:**

| Token | Description |
|-------|-------------|
| **DORI** | USD-pegged stablecoin minted against crypto collateral (CDP) |
| **sDORI** | Savings token — yield from protocol activity |
| **gDORI** | Guard / auto-compounding Stability Pool token — liquidation revenue |

---

## 1. Audit Status

As of January 2025, WeissFi smart contracts are **not yet covered by a public third-party security audit**.

We are actively improving code quality, monitoring, and security processes. Audit reports will be published here when available.

---

## 2. Security Model (High-Level)

WeissFi is a collateralized stablecoin protocol where users mint DORI against approved collateral types. The system includes:

- **Borrowing (CDP vaults)** — open / adjust / repay / close positions; fixed user-selected rates.
- **Liquidations** — positions below thresholds can be liquidated according to protocol rules.
- **Stability Pools** — absorb liquidations and receive liquidation revenue and/or protocol yield depending on the product (sDORI vs gDORI design).

---

## 3. Key Risks (User-Facing)

By interacting with WeissFi, users accept the following risks:

| Risk | Description |
|------|-------------|
| **Smart contract risk** | Bugs, logic errors, or unexpected interactions may cause loss of funds. |
| **Liquidation risk** | Collateral value fluctuations can lead to liquidation and realized losses. |
| **Oracle / pricing risk** | Incorrect or delayed price updates can impact liquidations and redemptions. |
| **DEX / swap execution risk** | Liquidation collateral conversion may incur slippage or adverse execution. |
| **Operational risk** | Bots / keepers / automation can fail, be delayed, or behave unexpectedly. |
| **Market risk** | Peg deviations, liquidity constraints, and volatility may affect outcomes. |
| **Admin / governance risk** | Parameters and integrations may change per governance or admin controls. |

---

## 4. Current Mitigations (Non-Exhaustive)

WeissFi uses the following practices to reduce risk — **not a guarantee of safety**:

- **Conservative protocol parameters** — collateralization thresholds and iterative rollouts.
- **Monitoring & alerting** — vault health, liquidation execution, and system status.
- **Operational automation** — liquidation workflows and Stability Pool settlement / compounding.
- **Transparent on-chain state** — public explorer links (see [Mainnet Package IDs](/docs/mainnet-package)).

---

## 5. Official Links for Verification

| Resource | Link |
|----------|------|
| App | [app.weissfi.com](https://app.weissfi.com) |
| Docs | [docs.weiss.finance](https://docs.weissfi.com) |
| Website | [weiss.finance](https://www.weissfi.com) |
| Explorer — Sui Package | [View on SuiScan](https://suiscan.xyz/mainnet/object/0xc436a8ccc36e649e0fd8c7cec88ca89747b69ba5bdefb15be2f93ae1ae632800) |

For a full list of contract addresses, see the [Mainnet Package IDs](/docs/mainnet-package) page.

---

## 6. Responsible Disclosure

If you discover a vulnerability, please report it **privately**:

| Channel | Contact |
|---------|---------|
| Email | [contact@weiss.finance](mailto:contact@weiss.finance) |
| Telegram | [t.me/weissfi](https://t.me/weissfi_) |
| Discord | [discord.gg/SZRnaZCYzy](https://discord.gg/SZRnaZCYzy) |

We aim to acknowledge reports quickly and coordinate fixes responsibly. Please do **not** disclose vulnerabilities publicly before a fix is in place.

---

## 7. Disclaimer

WeissFi is **experimental software**. Use at your own risk. Nothing herein constitutes financial advice. Users should not deposit funds they cannot afford to lose.

---

*Document version: v1 — Last updated: January 2025*
