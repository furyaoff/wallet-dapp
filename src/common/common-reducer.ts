import { ProposalType } from 'src/models';

export const getProposalSummary = (type: ProposalType) => {
  switch (type) {
    case ProposalType.SOFTWARE_UPGRADE:
      return 'This is a software upgrade proposal'
    case ProposalType.TEXT:
      return 'This is a text proposal. Text proposals can be proposed by anyone and are used as a signalling mechanism for this community. If this proposal is accepted, nothing will change without community coordination.'
    case ProposalType.PARAMETER_CHANGE:
      return 'This is a parameter change proposal. Parameter change proposals can be proposed by anyone and include changes to the code of this network. If this proposal is approved the underlying code will change.'
    case ProposalType.TREASURY:
      return 'This is a treasury proposal. Treasury proposals can be proposed by anyone and are a request for funds from the treasury / community pool.'
    default:
      return 'Unknown proposal type'
  }
}
