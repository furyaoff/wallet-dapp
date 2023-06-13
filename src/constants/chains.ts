import { ChainInfo } from '@keplr-wallet/types';

export const suggestChains: ChainInfo[] = [
  {
    chainId: 'juno-1',
    chainName: 'Juno',
    rpc: 'https://rpc-juno.itastakers.com',
    rest: 'https://lcd-juno.itastakers.com',
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: 'juno',
      bech32PrefixAccPub: 'juno' + 'pub',
      bech32PrefixValAddr: 'juno' + 'valoper',
      bech32PrefixValPub: 'juno' + 'valoperpub',
      bech32PrefixConsAddr: 'juno' + 'valcons',
      bech32PrefixConsPub: 'juno' + 'valconspub',
    },
    currencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'JUNO',
        coinMinimalDenom: 'ujuno',
        coinDecimals: 6,
        coinGeckoId: 'juno-network',
      },
    ],
    stakeCurrency: {
      coinDenom: 'JUNO',
      coinMinimalDenom: 'ujuno',
      coinDecimals: 6,
      coinGeckoId: 'juno-network',
    },
    coinType: 118,
    features: ['stargate', 'ibc-transfer'],
  },
  {
    chainId: 'fanfury-2b',
    chainName: 'BitSong',
    rpc: 'https://rpc.explorefanfury.com',
    rest: 'https://lcd.explorefanfury.com',
    bip44: {
      coinType: 639,
    },
    bech32Config: {
      bech32PrefixAccAddr: 'fanfury',
      bech32PrefixAccPub: 'fanfury' + 'pub',
      bech32PrefixValAddr: 'fanfury' + 'valoper',
      bech32PrefixValPub: 'fanfury' + 'valoperpub',
      bech32PrefixConsAddr: 'fanfury' + 'valcons',
      bech32PrefixConsPub: 'fanfury' + 'valconspub',
    },
    currencies: [
      {
        coinDenom: 'FURY',
        coinMinimalDenom: 'ufury',
        coinDecimals: 6,
        coinGeckoId: 'fanfury',
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'FURY',
        coinMinimalDenom: 'ufury',
        coinDecimals: 6,
        coinGeckoId: 'fanfury',
      },
    ],
    stakeCurrency: {
      coinDenom: 'FURY',
      coinMinimalDenom: 'ufury',
      coinDecimals: 6,
      coinGeckoId: 'fanfury',
    },
    coinType: 639,
    features: ['stargate', 'ibc-transfer'],
  }
];
