# Icetea Features and Services

## UX-enabling features
### Icetea ID

> Icetea ID is an Icetea Platform's external service and not part of the blockchain.

To prevent central authorities from abusing, blockchain apps require users to keep long and forgettable private keys or mnemonic phrases. Once lost, they lose access to their accounts completely without any way to recover. The “I forgot password” feature is simply non-existed, and calling customer services doesn't make any difference either. In practice, users often save their keys, in plain text, on some note-keeping programs. However, this action significantly increases the risk of their keys being stolen or eavesdropped on. 

Thus, Icetea ID is born to tackle this issue. It encrypts a user’s private key, splits it into parts, and safely stores it on multiple independent and secure key management services. This lifts the burden of keeping keys off users’ shoulder, while still preventing any single central authority from gaining access to the keys. Furthermore, recovery and 2-factor authentication are possible for Icetea ID; and thus, onboarding and authentication will be much smoother with a password-less experience – using either a phone number, email, or social accounts to register. 

### Signing Token

Current blockchains require users to use private keys directly to sign every transaction. This repetition task increases the risk of leaking private keys, which, once happens, will lead to catastrophic consequences. As a result, blockchain apps often request their users to perform many inconvenient steps that drastically damage UX. 

With Icetea blockchain, a signing token can be used in place of the private key for signing transactions. Each signing token has an expiry time and a limited set of permissions (e.g. can only sign transactions whose values are within predefined limits). Thus, leaking signing tokens yield much less serious consequences compared to that of private keys. By using Signing Token, blockchain apps can later introduce handy features such as "remember me on this device" as well as increase session timeout (no need to re-login after a while of inactivity). 

### Account Classification

On current blockchains, all accounts are bank accounts (that is, they store cryptocurrency). Bank accounts require a high level of security. Even if an account is not designed to store cryptocurrency, the same over-strict security policy applies, which is too inconvenient to users.

Icetea distinguishes between bank accounts and regular accounts. Regular accounts cannot receive and store cryptocurrency while bank accounts still function as they have always been. This is a meaningful piece of information for apps to balance the trade-off between security and convenience. For example, apps can include a "don't ask again" checkbox to reduce the number of future permission comfirmations and password prompts. 

### External Payer

A user has to stake or pay some amount of cryptocurrency (often called gas or fees) on available blockchains for each transaction he/she makes. Therefore, to try out an application, they will have to go to some unfamiliar and risky exchanges to buy some cryptocurrency first. This makes onboarding an nasty experience right from the beginning. 

Although some apps try to mitigate this by utilizing a central payer, still, doing this ruins the benefit of blockchain. To overcome this hassle, Icetea allows an application to pay transaction fees for its users in a decentralized manner. As a result, onboarding becomes seamless since apps now can employ much more flexible monetization strategies, such as free, freemium, pay-to-unlock, and in-dapp-purchase models.

## Biz-ready features
### 1-click Token Issuing

Issuing a token is a lengthy and complicated process, especially when it involves customized business rules. This raises the cost of entry to the point that intimidates most small enterprises.

Icetea has built-in support for common token types and rules, which turns the cumbersome process of token issuing and distribution into a simple task. To issue a token, all that users need to do is simply fill out a form, no complex step, no token auditing concern. Plus, a small number of token issuing fees are applied to prevent spamming issues. 

### Reusable Biz Templates

The undeniable truth is, it takes lots of time and manual efforts to create a biz app on a blockchain. The immediate costs, both tangible and opportunity, combining with the uncertainty of future return significantly hamper the blockchain adoption rate. 

Icetea provides templates and building blocks for common tasks. Developers can get started quickly, and have their PoC up and running in a short time while external contributors and 3rd parties can also publish their shared packages to Icetea’s public package repository.

### Privacy Computation

Transparency is a notable characteristic of blockchain. However, in this practical world, most users want to keep some parts of their data secret. Such secrets cannot be posted to smart contracts, thus limit the number of use cases of blockchain.

Another problem is that blockchain transactions are just pseudonymous. In theory, the transaction sender’s address is merely some random text; however it is possible to trace such addresses to real people if they do KYC and their KYC data are unfortunately abused or leaked.

Enterprises are reluctant to make transactions originated from their business dapps visible to competitors and other sensitive parties.

Hence, Icetea comes into the play by providing a TEE (Trusted Execution Environment) for applications run on its platform to handle sensitive data without ever exposing anything to the public. These data are encrypted before sending to the blockchain, then the TEE securely performs computation and discards the data right after. For those who want to conceal their transactions, they could transfer their assets to a privacy-focus sidechain first, do all their transactions there, and withdraw their assets back to the main chain.

## Utility features
### Asset Inheritance

If a person suddenly passed away (e.g. in an accident), his/her entire crypto fortune will be locked forever as no one else has the private key to access the account. This is a notable characteristic of using cryptocurrency, however not everyone wants that.

To overcome this drawback, Icetea allows a person to set others as inheritors. When the owner is inactive for a predefined period, one of the inheritors could activate the inheritance workflow to claim his/her inheritance rights, similar to a normal inheritance.

### Account Permissions

It is a common situation that an account is owned by a group of people and has specific rules of management. On other blockchains, people achieve this by creating custom smart contracts, which is costly and error-prone. 

Icetea has a built-in, fine-grained permission mechanism that supports each of the common scenarios, from multiple-signature gathering, 2nd-factor authentication to spending budget and quota. Account owners can set permissions for others, right from within their wallets.

### Decentralized Chatbot

Smart contracts are valuable tools to deliver promises in a trusted way. However, instead of interacting with them directly, users have to go through some web or mobile applications which require lots of time and effort to build. Such apps are often opaque, hence raising unwanted trust-issues. 

Icetea supports a special type of smart contract, named "decentralized bot". Those bots reside on blockchain and can respond to users' queries. What’s more, bots can be stateful (e.g. they remember the user's previous messages) which can create meaningful conversations. Users can now chat with smart contracts right inside their wallets.

## Professional services
### DocuGuard

Blockchain storage is scarce; hence, it is unaffordable to keep large data and files on-chain.
It is possible to store those data on a cloud service and link (hash) them back to the blockchain. However, many apps want to avoid that centralized cloud to ensure complete censorship-resistance of their users' files. 

DocuGuard is a professional, reliable, censorship-resistant decentralized storage service built upon the famous IPFS protocol. All applications built on Icetea Platform can now easily integrate with DocuGuard and developers can conveniently pay for DocuGuard usage using the well-known Icetea tokens. 

### Decentralized Gate

Almost every non-trivial blockchain app needs to interact with the off-chain world. Yet blockchain, due to its decentralization nature, prohibits such interaction. To overcome this situation, some applications have been using a centralized service (often called Oracle service). Although such a service does work, it decreases users' trust in the system. 

Icetea offers a solution called Decentralized Gate - a network of computers constantly on the alert and competes to serve off-chain data to smart contracts. A reward-based game is designed to ensure fairness and decentralization. It helps applications access the off-chain world in a decentralized manner and at an affordable price.

### Icetea Enterprise Edition

In practice, many enterprises prefer to use a private chain rather than a public one, because they want to share data to just a limited number of partners.

To resolve the above concern, Icetea comes with _Icetea Enterprise Edition_, a private-chain variation of Icetea. It is also possible to sync portions of the private chain’s data to the public chain, which turns the system into a legitimate _hybrid chain_. 

As a result, enterprises have many options to deploy their apps: either on a private chain, a hybrid chain, a public sidechain, or the Icetea public chain, all depending solely on their business needs.

## Scalability features
Built upon the battle-tested Tendermint engine, Icetea offers powerful solutions that enable apps to scale to millions.

### Powerful Consensus Engine
At its core, Icetea uses Tendermint, an exceptional consensus engine which also powers the world’s top blockchain networks like Cosmos Network and Binance Chain – a super-active decentralized exchange.

### Parallel Transaction Execution
Most blockchains are still in their early stages, and transactions are processed sequentially. Icetea’s capacity of smartly selecting transactions for executing in parallel greatly improves transaction processing throughput.

### Sidechain & Autonomous Area
Highly busy applications can offload workload to sidechains or Autonomous Areas - a special
sidechain whose security and decentralization are taken care of by the mother chain. 

## Developer tools
Developing blockchain apps on Icetea is almost as easy as regular apps: reuse of well-known packages, advanced debugging techniques, and much more ...

### Languages & Tools 
Icetea Studio and other development tools let developers write and test smart contracts easily in either JavaScript or Rust, and integrate seamlessly with existing development workflows.

### Reusing Existing Libraries
No need to reinvent the wheel, developers can reuse existing NodeJS packages, including lodash and @hapi/joi, for their Icetea blockchain apps.

### Enhanced Debugging
Debugging is just a breeze on Icetea which supports advanced debugging techniques like setting breakpoints, stepping, watching variables, and performance profiling.
