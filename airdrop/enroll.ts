import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor";
import { IDL, WbaPrereq } from "../programs/wba_prereq";
import bs58 from 'bs58';
import wallet from "./wba-wallet.json";

// Function to convert base58 (Phantom export) to wallet array.
function base58ToWallet(base58Key: string): Uint8Array {
  return bs58.decode(base58Key);
}

const keypair = Keypair.fromSecretKey(base58ToWallet(wallet));
const connection = new Connection("https://api.devnet.solana.com");
const github = Buffer.from("jcleira", "utf8");

const provider = new AnchorProvider(connection, new Wallet(keypair), {
  commitment: "confirmed",
});

const program: Program<WbaPrereq> = new Program(IDL, provider);

const enrollment_seeds = [
  Buffer.from("prereq"),
  keypair.publicKey.toBuffer(),
];

const [enrollment_key, _bump] = PublicKey.findProgramAddressSync(
  enrollment_seeds,
  program.programId
);

// Execute our enrollment transaction
(async () => {
  try {
    const txhash = await program.methods
      .complete(github)
      .accounts({
        signer: keypair.publicKey,
      })
      .signers([
        keypair,
      ]).rpc();
    console.log(`Success! Check out your TX here:
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();

