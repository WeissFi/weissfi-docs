# Oracles

Weiss Finance integrates multiple on-chain price oracles to fetch real-time price data used across the protocol. We utilize **Pyth** and **Switchboard** to ensure reliable market prices for supported assets.

Oracle data is queried during key protocol operations, including:

- Opening or modifying vaults
- Updating collateral ratios
- Triggering liquidations when positions fall below required safety thresholds

Accurate price feeds ensure the protocol remains solvent and behaves predictably. These oracles are critical for calculating each user's health factor and determining when positions become undercollateralized.
