import { IBCChain } from 'src/models';

export const ibcChains: IBCChain[] = [
  {
    id: 'fanfury-2b',
    furyDenom: 'ufury',
    ibc: {
      'osmosis-1': {
        channel: 'channel-0',
        ibcDenom: 'ufury'
      },
      'cosmoshub-4': {
        channel: 'channel-1',
        ibcDenom: 'ufury'
      },
      'juno-1': {
        channel: 'channel-5',
        ibcDenom: 'ufury'
      },
    }
  },
  {
    id: 'osmosis-1',
    furyDenom: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
    ibc: {
      'fanfury-2b': {
        channel: 'channel-73',
        ibcDenom: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452'
      },
    }
  },
  {
    id: 'cosmoshub-4',
    furyDenom: 'ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC',
    ibc: {
      'fanfury-2b': {
        channel: 'channel-229',
        ibcDenom: 'ibc/E7D5E9D0E9BF8B7354929A817DD28D4D017E745F638954764AA88522A7A409EC'
      },
    }
  },
  {
    id: 'juno-1',
    furyDenom: 'ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B',
    ibc: {
      'fanfury-2b': {
        channel: 'channel-17',
        ibcDenom: 'ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B'
      },
    }
  },
  /* {
    id: 'ethereum',
    furyDenom: '',
    ibc: {
      'fanfury-2b': {
        channel: '',
        ibcDenom: ''
      },
    }
  }, */
];
