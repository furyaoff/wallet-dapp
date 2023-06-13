import { Dictionary } from 'lodash';

export interface CoinLookUp {
  viewDenom: string;
  chainDenom: string;
  chainToViewConversionFactor: number;
  name?: string;
  icon: string;
}

export interface NetworkConfigFeeOption {
  denom: string;
  amount: number | string;
}

export interface IBCInfo extends NetworkConfigFeeOption {
  chainTrace?: string[];
}

export interface NetworkConfigFee {
  gasEstimate: number;
  feeOptions: NetworkConfigFeeOption[],
}

export interface IBCChannel {
  channel: string;
  ibcDenom: string;
}

export interface IBCChain {
  id: string;
  furyDenom: string;
  ibc: Dictionary<IBCChannel>
}

export interface NetworkConfig {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  apiURL: string;
  rpcURL: string;
  explorerURL: string;
  supplyURL?: string | null;
  minBlockHeight: number;
  stakingDenom: string;
  coinLookup: CoinLookUp[],
  addressPrefix: string;
  validatorAddressPrefix: string;
  validatorConsensusaddressPrefix: string; // needed to map validators from staking queries to the validator set
  HDPath: string;
  coinType: number;
  coinGeckoId: string;
  lockUpPeriod: string;
  fees: {
    default: NetworkConfigFee,
    [key: string]: NetworkConfigFee
  },
  icon: string;
  localSigning: boolean; // this is only to be used as a developer tool - never deployed in production or for mainnet chains
}
