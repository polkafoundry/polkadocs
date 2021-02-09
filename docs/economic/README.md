# Token Economics

## Token Information

- Token Name: __PKF token__
- Token Symbol: __PKF__
- Total Supply: __200,000,000__

_PKF token_ is an Ethereum's __ERC-20__ token. In the future, when PolkaFoundry blockchain launches the mainnet, PKF token holders can swap ERC-20 PKF token for _native_ PKF coin at the rate of 1 for 1.

## Token Utility

- Payment for transaction fees (computation & storage)
- Staking for collators to earn share of block rewards
- Staking to participate in the on-chain governance process and earn rewards for voting on proposals
- Payment for PolkaFoundry & partners' services (PolkaID, DocuGuard, etc.)

## Token Allocation

![Token Allocation](./alloc.svg)

## Token Sales
### Sale Rounds
__Total Supply:__ 200,000,000 PKF

| Round | Amount<br>(PKF) | Rate<br>(USDT) | Raise<br>(USDT) | Start<br>(2021) | End<br>(2021) | Diluted<br>MCap<br> |
|-------|--------|------|-------|-------|-----|----|
| Seed A | 4M (2%) | 0.03 | 120K | Jan 4 | Jan 8 | 6M USDT |
| Seed B | 5M (2.5%) | 0.04 | 200K | Jan 4 | Jan 8 | 8M USDT |
| Private A | 20M (10%) | 0.06 | 1.2M | Feb | - | 12M USDT |
| Private B | 15M (7.5%) | 0.075 | 1.125M | Feb | - | 15M USDT |
| Public | 2M (1%) | 0.11 | 220K | Feb | - | 22M USDT |

- __Total Token For Sales__: 46,000,000 PKF (23% of Total Supply)
- __Total Fund Raised:__ 2,865,000 USDT
- __Initial Market cap:__ 1,045,000 USDT
- __Initial Circulating Supply:__ 9,500,000 (4.5%)

#### Note:
- The rate of Seed round is set in ETH. The rate in USDT is approximate.
- The numbers for Private Sales and Public Sale are planned numbers and might change slightly depending on market and business conditions.

### Usage of Fund Raised

![Usage of Fund](./fund.svg)

## Token Release Schedule

### Release Summary
- Seed A: lock for 3 years
- Seed B: 15% at listing, then linearly over 10 months
- Private A: 15% at listing, then linearly over 8 months
- Private B: 25% at listing, then linearly over 5 months
- Public: 100% at listing
- Team & Advisors: 1 year fully locked, then 25% quarterly

### Circulating Supply by Month
![Circulating Suply](./circulating.svg)

**Note** _Team_ in the charts includes Team, Early Investors, and Advisors.

## Collator Economics

::: warning NOTICE

This section is for phase 1 (Tendermint with validators) and not yet updated to reflect phase 2 (Polkadot parachain with collators) yet.

:::

To attract dapp developers and users, PolkaFoundry's transaction fees are cheap, just enough to prevent spamming. Therefore, to ensure collators profitable, most of collators' rewards should come from other sources.

PolkaFoundry blockchain reserves 12% of total supply for Collator Reward Fund (VR Fund). That is 24M PKF.

The VR Fund will be used up after 5 years. In the first 3 years, the entire collator rewards come from this fund. From year 4 onward, PolkaFoundry starts to mint PKF gradually to compensate the collators.

| Year | No. of<br>Collators | Monthly<br>VR Fund | Monthly<br>Mint | Monthly<br>Reward/Collator |
|------|------------|-----|------|-------|
| 1 ~ 3| 30 | 480,000 | 0 | 16,000 PKF |
| 4 ~ 5| 50 |  280,000 | 370,000 | 13,000 PKF |
| 6 onward | 100 | 0 | 1,000,000 | 10,000 PKF |

In the first 3 years, each collator earns 16,000 PKF as _monthly_ reward. At the PKF price of Public Sale, that is worth 1760 USDT. Monthly collator reward in PKF decreases in later periods. However, as we expect PKF price to increase in the long run, the monthly collator revenue converted to USDT should improve.

All of the collator economics parameters (including the number of collators) are subject to PolkaFoundry on-chain governance process. As a result, PolkaFoundry blockchain can alter itself to adapt to the changing economic environment.
