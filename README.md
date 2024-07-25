# turbin3-prerequisites
Welcome to my turbin3 prerequisites repository. This repository contains the prerequisites for my turbin3 cohort. This prereqsuites is a project that aims to create a TS scripts that allows users to create and manage basic solana tasks as:

- Create a wallet
- Create a transfer

The project is written in TypeScript and uses the Solana JavaScript API. it does have a guide that I'm not adding becuase it didn't ask for permission to add it.

## Thoughts
In this section I'm including personal notes writing while working on the project, they include the section of the guide for reference.

### 1.1 Setting up
Pretty simple setup, I like it!

### 1.2 Generate a Keypair
It's pretty clear that the guide is a touch down as the key creation is mostly done to be stored in a file.

There are some typos in the steps to create the keypair, I think they are done in purpose to test debugging skills.

I'm publishing the generated publickey here, but I did a basic protection for the private key using `gitignore` (not super secure I know, but enought for this test).
```json
9E7nfbmqoS6nk8kqjhBZLpeA6yytSeYySboQZo2kSsrA
```

### 1.3 Import/Export to Phantom
There are some rust methods included here (:D) they are an indication that we will likely need to do some conversion from Phamtom exported private keys to the Solana format.

### 2. Claim Token Airdrop
Pretty straight forward, no typos to test; I've done this a few times so no problems on this part.

The output is pretty clear too:
```bash
Success! Check out your TX here:
https://explorer.solana.com/tx/67PvqGDDww9uqTupfFKpsmNfXakMCQiFtMrWKpshUQMxmSVNGwNCoXdvnDU5XDRNxVcJV8HCqQMcifRwQR1VobHt?cluster=devnet
```

### 3. Transfer tokens to your WBA Address
Pretty straight forward too, basic transfer of tokens from one wallet to another.

Initial transfer output:
```bash
Success! Check out your TX here: https://explorer.solana.com/tx/3o3rzNjvJh9Dx7uzHFgj6bgMYf9G5Y2ENL5CyUqa6MSPEmoAkeLHSA1EtgUhVYcS24KR5LpHUQt62CFMqchHNSxA?cluster=devnet
```

### 4. Empty devnet wallet into WBA wallet
I've learned something new here, as I was not aware that you could createa a transfer for them to use the `connection.getFeeForMessage` method (not sure if it's the best way to do it, but it's a way).

Remaining balance transfer output:
```bash
Success! Check out your TX here: https://explorer.solana.com/tx/3LJWVuCTM2ZQmPDf1LS77qJhx1QL6yWCVxRt5nHS78vVirZTPGNxoaG8nXUNv2niYmwY8rsDMC3VHhJRyons4c9M?cluster=devnet
```

### 5. Submit your completion of the WBA pre-requisites program
Looks like this is the meat of the pre-requisites, we will be using concepts I'm also familiar with (PDA, IDL), but goes beyond basic transfers.

Looks like we need to use the private key from the wallet we provided at registration, given that my one is a Phamtom wallet, I guess I will need those methods that I had no use at the beginning.

We will provide to the program invocation the github account, I'm not sure if it's only the username or the full URL, I will the username.

Transaction is sent!, output:
```bash
https://explorer.solana.com/tx/4imxPKXzvZqFgRibpELhLjVFLVugukFY94E1DNYMLZKhVztWzNmrEMmUjgoCsdFMmzMR5rWZkpJXyRQVHLEuqwWx?cluster=devnet
```

I'm not quite sure I would have suceeded today without the existing knowledge I had about PDAs and IDLs, but I'm glad I did!.

## Extras
There are a few more things I could have done to improve the project, but I think I will leave them for another time, I'm happy with the result.
 
Those things are:
- Add a better TS definitions, and make it more composable.
- Add a better logging system, I'm just using `console.log`.
- There are many other production code things that are not applicable here, but I could have add linting, testing, CI, etc.

