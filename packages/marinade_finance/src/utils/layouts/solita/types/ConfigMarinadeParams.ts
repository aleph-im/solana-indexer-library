/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import { Fee, feeBeet } from './Fee.js'
export type ConfigMarinadeParams = {
  rewardsFee: beet.COption<Fee>
  slotsForStakeDelta: beet.COption<beet.bignum>
  minStake: beet.COption<beet.bignum>
  minDeposit: beet.COption<beet.bignum>
  minWithdraw: beet.COption<beet.bignum>
  stakingSolCap: beet.COption<beet.bignum>
  liquiditySolCap: beet.COption<beet.bignum>
  autoAddValidatorEnabled: beet.COption<boolean>
}

/**
 * @category userTypes
 * @category generated
 */
export const configMarinadeParamsBeet =
  new beet.FixableBeetArgsStruct<ConfigMarinadeParams>(
    [
      ['rewardsFee', beet.coption(feeBeet)],
      ['slotsForStakeDelta', beet.coption(beet.u64)],
      ['minStake', beet.coption(beet.u64)],
      ['minDeposit', beet.coption(beet.u64)],
      ['minWithdraw', beet.coption(beet.u64)],
      ['stakingSolCap', beet.coption(beet.u64)],
      ['liquiditySolCap', beet.coption(beet.u64)],
      ['autoAddValidatorEnabled', beet.coption(beet.bool)],
    ],
    'ConfigMarinadeParams',
  )
