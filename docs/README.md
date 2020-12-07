# Abstract

Blockchain is a useful and revolutionary technology which is getting a lot of attention
recently. However, despite much anticipation, no significant blockchain adoption has
been observed.

Icetea is a platform designed to enable the first useful and widely-adopted decentralized
application (dApp). In the long run, it aims to be a viable decentralized alternative to
cloud computing platforms.

The blockchain industry is yearning for a first ’killer app’ to validate this technology.
Although plenty of blockchains exist with billions of USD invested, such an application
remains elusive. If Icetea can do that, it is a game-changer.

In this paper, we will discuss the market potential as well as current limitations of
dApps, architecture and operation of Icetea Platform, and how it will resolve those
challenges.

# Introduction

In essence, blockchain is the technology which offers a new way to freely and safely
store and transfer assets and data, bypassing the middlemen. People can use verifiable
tools instead of depending on institutions. This has the potential of huge impact on the
structure of our society because, currently, organizations (governments, banks, big
companies, etc.) often utilize their role as middlemen to control access, impose rules,
and gain insights about people against their will.

There are 2 main categories of public blockchain use cases: Payment and Application
Platform.

Figure 1: Use cases of public blockchain and its players (Libra is not a public blockchain
but it plans to be one in the future)

Each of these categories faces several challenges. While the biggest challenge for
cryptocurrency payment is legal issues, challenges for application platform are the
technical constraints of the blockchain itself.

According to DAppRadar as of June 26, 2019, current leading dApps across all
well-known blockchains have only some thousands of daily users. Most of them are
gambles, trivial games, exchanges, and are used only by the small and closed crypto
circle.

Figure 2: Top 10 dApps, according to dAppRadar.com on 26 June, 2019

Icetea Platform’s sole goal is to enable the first useful and widely-adopted blockchain
application - one that is used by ‘regular people’. Such an application would validate
blockchain technology, infuse trust, and open the door to a new era of dApps.

The final, long-term goal is to offer a viable alternative platform comparable to cloud
computing application platforms, then developers could choose either centralized or
decentralized technology, or combination of both, depending solely on the value of
application data and trustworthiness of relevant parties, not the mature and usability of
the underlying technology.

Figure 3: Areas of application of centralized vs decentralized platform

Nowadays, users are becoming more and more sensitive about privacy as well as true
ownership of their data and assets. People in many countries are reluctant to use and
start to boycott products which abuse their data. This creates a huge opportunity for
decentralized, trust-free apps to emerge and replace current data-monster,
trust-abusing centralized apps.

We are aware of Ethereum and their quest for a purely decentralized world computer.
While their works are respectful and inspiring, we believe that Icetea Platform’s agile
and pragmatic approach, which attracts and gets ‘regular users’ feedback early and
often, would also greatly benefit the blockchain industry. Therefore, Icetea Platform and
Ethereum are not competitors but complement one another.

# The Problems of Existing dApp Platforms

Making a widely adopted centralized application is very hard, yet making one on a
decentralized platform is much harder. While the benefit of blockchain is still abstract
and vague to users, the hassles it introduces are very concrete and immediate. We
believe that eliminating the hassles while still keeping the benefit is the only way to
mainstream adoption.

Existing blockchains have explored a variety of experiments, but there remains 3
substantial obstacles to overcome.

## Unacceptable UX

Let’s first review the details of these hassles.

- Users have to learn new and foreign concepts, like private key, mnemonic, wallet,
blocks, transactions, cryptocurrency, gas price, digital signature. All those
concepts are not directly related to the application from the user perspective
- Users have to buy cryptocurrency to pay for the application from the start.
There’s no free, trial, or in-app-purchase mode. Furthermore, they have to go to
some exchange service to buy coins to pay. Most of the regular users perceive
crypto exchanges as risky and cumbersome.
- Users have to manage the keys themselves. There is no ‘forget password’
feature. This puts much burden on users. In addition, they are continuously asked
to confirm to approve or ‘sign’ something that’s hard to understand.

While it is fine to introduce new concepts and new ways of doing things to users, it is
expected to improve the user experience instead of dramatically degrade it. The UX of
current dApps shuts the door upon users from the first step. Without users, all other
blockchain solutions might be wrong or at least ineffective because they are trying to
solve _imaginary problems_.

The unusable UX of blockchain apps is _not the matter of dApp UI design_. It lies deeper at
the core blockchain level as part of the blockchain trilemma which we will discuss more
at a later section.

In reality, even a free and user-friendly application still has a hard time to attract users,
let alone an dApp full of friction.

All those hassles overshadow the benefit of blockchain.

## Lack of Essential Services for Developers

Decentralized code runs on every node. This leads to several requirements.

- It has to yield the same result when running on every node (i.e. deterministic)
- It has to finish within a limited amount of resources and time
- Because the code runs on the same environment which manages all the
blockchain state, it must run in an overly strict security sandbox

This make decentralized code very limited in capacity. It cannot utilize advanced
programing languages and container’s features. It cannot reuse most of the abundance
of existing packages designed for centralized apps. Debugging capacity is very limited.
As a result, it is hard and time-consuming to make any non-trivial dApp.

In addition to that, essential services which most of non-trivial applications require are
missing or immature, and scattering. Those services are:

Authorization (permission configuration)
- Off-chain data access
- Privacy of input/output data and business-secret
- High performance computation
- Large data storage and query

This forces the developers to ‘swim in the ocean’.

An adopted platform should free users from infrastructure and framework worries so
that they can focus on the business logic of their own application.

## Poor Scalability

Let’s start with the blockchain trilemma made famous by Vitalik Buterin, founder of
Ethereum.

Figure 4: Blockchain Trilema

::: tip REMARK
We add UX to the Vitalik Buterin’s original trilema. As you can see in the previous
section, increase security and decentralization will hamper UX. Scalability can be
considered an aspect of UX.
:::

This trilemma explains why current dApps are not scalable. Current version of Ethereum
is very slow (~30 seconds for a transaction to get confirmed), has low throughput
(15~20 transactions per second (TPS)), offers weak finality (transaction might still get
‘reorganized’ after confirmation), is expensive, and not scalable enough for simple
games like CryptoKitties. Some recent blockchains utilizing PoS consensus mechanism
have succeeded to scale to 1000~2000 TPS. Despite that huge improvement, this
number is still very far from that of payment networks like VISA’s, let alone popular
real-world huge-traffic apps like Twitter.

The acceptable level of security, decentralization, and scalability varies depending on
the domain of the blockchain (for instance, a general-purpose blockchain vs a
domain-specific blockchain). However, for a specific blockchain, this trilemma is true as
long as:

- The blockchain is already fully optimized, to the point that any significant
improvement leads to a trade-off
- It runs as a fixed and closed system

The former is rarely the case, since blockchain technology is immature at the moment
and contains plenty of room to optimize. In later section, we will introduce some
improvements employed by Icetea blockchain which dramatically improve UX and
scalability without sacrificing either security or decentralization.

The latter could be solved by scaling vertically (adding more resources like RAM, CPU,
etc.) and/or horizontally (clustering, sharding, sidechain, outsourced computation and
storage, etc.). The question is how to implement those strategies effectively and
efficiently.

# Icetea Platform's Solutions

Icetea Platform comes with various innovative features and services to address the known
blockchain's pitfalls in order to enable mainsteam dapps with seamless UX and high scalability.

Those features and services can be divided into 6 catergories.

#### UX-Enabling Features 

Blockchain apps are infamously known to introduce much friction to users. These features solve that.

#### Biz-ready Features

Recipes made ready for most common biz scenarios.

#### Utility Features

Out-of-the-box handy features learned from lessons of user frustration of other blockchains.

#### Scalability Features

Powerful solutions enabling apps to scale to millions.

#### Professional Services

Professional services that every non-trivial app need.

#### Developer Tools

Tools, libraries, and features that improve application developing productivity and quality.

## UX-Enabling Features

Build seamless-UX applications on Icetea Platform.

### Icetea ID

#### The problem

To prevent central authorities from abusing, blockchain apps require users to keep long and hard-to-remember private keys or mnemonic phrases. Once lost, they lose access to their accounts completely. There is no way to recover. No “I forgot password” possibility. Calling customer services is of no help.

To make life a bit easier, in reality, users often save their keys, in plain text, on some note-keeping programs. This increases the risk of their keys being stolen or eavesdropped. 

#### How Icetea ID works?

Icetea ID encrypts an user private key, splits it into parts, and safely store it on _multiple independent_ and secure key management services. This shifts the burden of keeping keys from users, while still preventing any single central authority from gaining access to the keys.

#### The result

Users are freed from the key-keeping burden. Their keys are safe and cannot be abused. Recovery and 2nd factor authentication are possible. Onboarding and authentication are smooth with password-less experience – using either phone number, email, or social accounts to register.  

### Signing Token

#### The problem

Current blockchains require users to use private keys directly to sign every transaction. This increases the risk of leaking of private keys, which, once happens, will lead to catastrophic consequence.

To prevent private key leaking, blockchain apps request users to perform many inconvenient steps which dramatically harm UX.

#### How Signing Token works?

A signing token can be used in place of the private key for signing transactions. Each signing token has an expiry time and limited set of permissions (e.g. can only sign transactions whose values are within predefined limits). Thus, leaking signing tokens yields much less serious consequences compared to that of private keys.

#### The result

Blockchain apps can introduce handy features like "remember me on this device" and increase session timeout (no need to re-login after a while of inactivity).  

### Account Classification

#### The problem

On current blockchains, all accounts are bank accounts (that is, they store cryptocurrency). Bank accounts require high level of security. Even if an account is not designed to store cryptocurrency, the same over-strict security policy applies, which is too much inconvenient to users.

####  How Account Classification works?

Icetea distinguishes between _bank _accounts_ and _regular accounts_. Regular accounts cannot receive and store cryptocurrency.

#### The result

Account classification is a meaningful piece of information for apps to trade off between security and convenience. For example, apps can include a "don't ask again" checkbox to reduce the number of future permissions or password prompts.  

### External Payer

#### The problem

On current blockchains, an user has to stake or pay some amount of cryptocurrency (often called gas or fees) for each transaction he/she makes. Therefore, to try out an application, they will have to go to some risky and unfamiliar exchange to buy some cryptocurrency first. This makes onboarding a nasty experience.

Some apps try to mitigate this by utilizing a central payer. However, doing this ruins the benefit of blockchain. 

#### How External Payer works?

Icetea allows an application to pay transaction fees for its users in a decentralized manner.

#### The result

Apps can employ much more flexible monetization strategies, such as free, freemium, pay-to-unlock and in-dapp-purchase models. Onboarding becomes seamless.

## Utility Features

What frustrate users on other blockchains just work on Icetea.

### Asset Inheritance

#### The problem

If a person passed away (e.g. in an accident), his/her entire crypto fortune will be locked forever. No one else has private key to access.

#### How Asset Inheritance works?

Icetea allows a person to set others as inheritors. When the owner is inactive for a predefined period of time, one of the inheritors could activate the inheritance workflow to claim his/her inheritance rights. 

#### The result

Inheritance works, just like in real world.

### Account Permissions

#### The problem

It is a common situation that an account is owned by a group of people and has specific rules of management. On other blockchains, people achieve this by creating custom smart contracts, which is costly an error-prone.

#### How Account Permissions work?

Icetea has a built-in fine-grained permission mechanism which supports every of the common scenarios, be it multiple-signature gathering, 2nd factor authentication, spending budget and quota.

#### The result

Account owners can set permissions for others, right from within their wallets.

### Decentralized Chatbot

#### The problem

Smart contracts are valuable tools to deliver promises in a trusted way. However, users cannot interact with them directly. Instead, they have to go through some applications which take time to build, opaque things, and harm trust.

#### How does Decentralized Chatbot works?

Icetea supports a special type of smart contract, named "decentralized bot". Those bots reside on blockchain and can respond to users' queries. What’s more, bots can be stateful (that is, they remember the user's previous messages) which can create meaningful conversations.

#### The result

Users can chat to smart contracts right inside their wallets.

## Biz-ready Features

Enterprises want to craft a PoC for their briliant ideas in a speedy and cost-effective manner. Icetea understands that.

### 1-click Token Issuing

#### The problem

Issuing a token is a complicated process, especially when it contains customized business rules. This raises the cost of entry to the point that intimidates most small enterprises.

#### How 1-click Token Issuing works?

Icetea has built-in support for common token types and rules, which turns the cumbersome process of token issuing and distribution into a simple task.

#### The result

To issue a token, users just need to fill out a form. To prevent spamming, a small amount of token issuing fees are applied.

### Reusable Biz Templates

#### The problem

It takes time to create a biz app on a blockchain. The cost and uncertainty hamper blockchain adoption rate.

#### How Biz Templates works?

Icetea provides templates and building blocks for common tasks. External contributors and 3rd parties can also publish their shared packages to Icetea’s public package repository.

#### The result

Developers can get started quickly, and have their PoC up and running in a short period of time.

### Privacy Computation

#### The problem

Transparency is a notable characteristics of blockchain. However, in real world, most users want to keep some parts of their data secret. Such secrets cannot be posted to smart contracts, thus limit the number of use cases of blockchain.

Another problem is that blockchain transactions are just pseudonymous. Although, in theory, the transaction sender’s address is just some random text, it is possible to trace such addresses to real people if they do KYC and their KYC data are abused or leaked.

#### How Privacy Computation works?

Icetea provides a TEE (Trusted Execution Environment) to handle sensitive data. Sensitive data is encrypted before sending to blockchain. The TEE then performs computation securely and discards the data after that – without ever exposing anything.

For ones who want to conceal their transactions, they could transfer their assets to a privacy-focus sidechain first, do all their transactions there, and withdraw their assets back to main chain.

#### The result

Applications on Icetea Platform can handle sensitive data without ever exposing any secrets to the public.

## Professional Services

A blockchain is like an oasis – disconnected from the external world. Icetea provides the high-quality professional services to bridge that gap.

### DocuGuard

#### The problem

Blockchain storage is precious. Therefore, it is unaffordable to save large data and files on-chain.

#### How DocuGuard works?

DocuGuard is a decentralized storage service built upon the famous IPFS protocol. In addition, developers can pay for DocuGuard services using well-known Icetea tokens.

#### The result

Applications on Icetea Platform can easily integrate with DocuGuard, a professional, reliable, censorship-resistant, decentralized storage service.

### Decentralized Gate

#### The problem

Almost every non-trivial blockchain app need to interact with the offchain world. Yet blockchain, due to its decentralization nature, prohibits such interaction.

#### How Decentralized Gate works?

Icetea features the _Decentralized Gate_ - a network of computers constantly on alert and compete to serve offchain data to smart contracts. A reward-based game is designed to ensure fairness and decentralization.

#### The result

Blockchain applications can access offchain world in a decentralized manner and at a affordable price.

### Icetea Enterprise Edition

#### The problem

Many enterprises prefer to use a private chain rather than a public one, because they want to share data to just a limited number of partners.

#### How Enterprise Edition works?

Icetea comes with Icetea Enterprise Edition, the private-chain variation of Icetea. Moreover, it is possible to sync portions of the private-chain’s data to the public chain, which turns the system into a legitimate _hybrid chain_.

#### The result

Enterprises can choose to deploy their apps on either a private chain, a hybrid chain, a public sidechain, or the Icetea public chain, depending solely on their business needs.

## Scalability Solutions

Built upon the battle-tested Tendermint engine, Icetea offers powerful solutions that enable apps to scale to millions.

### Powerful Consensus Engine

At its core, Icetea uses Tendermint, the exceptional consensus engine which also powers the world’s top blockchain networks like Cosmos Network and Binance Chain – a super-active decentralized exchange.

### Parallel Transaction Execution

Most blockchains are still in their early stages, and transactions are processed sequentially. Icetea’s capacity of smartly selecting transactions for executing in parallel greatly improves transaction processing throughput.

### Sidechain & Autonomous Area

Highly busy applications can offload workload to sidechains or Autonomous Areas - a special sidechain whose security and decentralization are taken care by the mother chain.

## Developer Tools

Developing blockchain apps on Icetea is almost as easy as regular apps: reuse of well-known packages, advanced debugging techniques, and more.

### Languages & Tools

_Icetea Studio_ and other development tools let developers write and test smart contracts easily in either _JavaScript_ or _Rust_, integrate seamlessly with existing development workflow.

### Reusing Existing Libraries

No need to reinvent the wheel, developers can reuse existing NodeJS packages, including _lodash_ and_@hapi/joi_, for their Icetea blockchain apps.

### Enhanced Debugging

Debugging is just a breeze on Icetea which supports advanced debugging techniques like setting breakpoints, stepping, watching variables, and performance profiling.

