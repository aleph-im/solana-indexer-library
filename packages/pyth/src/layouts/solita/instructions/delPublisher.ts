/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'

/**
 * @category Instructions
 * @category DelPublisher
 * @category generated
 */
export type DelPublisherInstructionArgs = {
  pub_: web3.PublicKey
}
/**
 * @category Instructions
 * @category DelPublisher
 * @category generated
 */
export const delPublisherStruct = new beet.BeetArgsStruct<
  DelPublisherInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['pub_', beetSolana.publicKey],
  ],
  'DelPublisherInstructionArgs',
)
/**
 * Accounts required by the _delPublisher_ instruction
 *
 * @property [_writable_, **signer**] funding_account
 * @property [_writable_, **signer**] price_account
 * @category Instructions
 * @category DelPublisher
 * @category generated
 */
export type DelPublisherInstructionAccounts = {
  funding_account: web3.PublicKey
  price_account: web3.PublicKey
}

export const DelPublisherAccounts = ['funding_account', 'price_account']

export const delPublisherInstructionDiscriminator = [2, 0, 0, 0, 6, 0, 0, 0]

export type DelPublisherInstruction = {
  programId: web3.PublicKey
  keys: web3.AccountMeta[]
  data: Buffer
}

/**
 * Creates a _DelPublisher_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category DelPublisher
 * @category generated
 */
export function createDelPublisherInstruction(
  accounts: DelPublisherInstructionAccounts,
  args: DelPublisherInstructionArgs,
): DelPublisherInstruction {
  const { funding_account, price_account } = accounts

  const [data] = delPublisherStruct.serialize({
    instructionDiscriminator: delPublisherInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: funding_account,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: price_account,
      isWritable: true,
      isSigner: true,
    },
  ]

  const ix: DelPublisherInstruction = new web3.TransactionInstruction({
    programId: new web3.PublicKey('NONE'),
    keys,
    data,
  })
  return ix
}