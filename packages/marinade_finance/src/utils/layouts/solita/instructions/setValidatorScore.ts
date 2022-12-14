/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * @category Instructions
 * @category SetValidatorScore
 * @category generated
 */
export type SetValidatorScoreInstructionArgs = {
  index: number
  validatorVote: web3.PublicKey
  score: number
}
/**
 * @category Instructions
 * @category SetValidatorScore
 * @category generated
 */
export const setValidatorScoreStruct = new beet.BeetArgsStruct<
  SetValidatorScoreInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['index', beet.u32],
    ['validatorVote', beetSolana.publicKey],
    ['score', beet.u32],
  ],
  'SetValidatorScoreInstructionArgs',
)
/**
 * Accounts required by the _setValidatorScore_ instruction
 *
 * @property [_writable_] state
 * @property [**signer**] managerAuthority
 * @property [_writable_] validatorList
 * @category Instructions
 * @category SetValidatorScore
 * @category generated
 */
export type SetValidatorScoreInstructionAccounts = {
  state: web3.PublicKey
  managerAuthority: web3.PublicKey
  validatorList: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const setValidatorScoreInstructionDiscriminator = [
  101, 41, 206, 33, 216, 111, 25, 78,
]

/**
 * Creates a _SetValidatorScore_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category SetValidatorScore
 * @category generated
 */
export function createSetValidatorScoreInstruction(
  accounts: SetValidatorScoreInstructionAccounts,
  args: SetValidatorScoreInstructionArgs,
  programId = new web3.PublicKey('MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD'),
) {
  const [data] = setValidatorScoreStruct.serialize({
    instructionDiscriminator: setValidatorScoreInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.state,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.managerAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.validatorList,
      isWritable: true,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
