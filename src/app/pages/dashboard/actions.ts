import { createAction, props } from '@ngrx/store'

import { Transaction } from '@tezblock/interfaces/Transaction'
import { TokenContract } from '@tezblock/domain/contract'
import { ProposalListDto } from '@tezblock/interfaces/proposal'

const featureName = 'Dashboard'

export const loadContracts = createAction(`[${featureName}] Load Contracts`)
export const loadContractsSucceeded = createAction(`[${featureName}] Load Contracts Succeeded`, props<{ contracts: TokenContract[] }>())
export const loadContractsFailed = createAction(`[${featureName}] Load Contracts Failed`, props<{ error: any }>())

export const loadLatestProposal = createAction(`[${featureName}] Load Latest Proposal`)
export const loadLatestProposalSucceeded = createAction(`[${featureName}] Load Latest Proposal Succeeded`, props<{ proposal: ProposalListDto }>())
export const loadLatestProposalFailed = createAction(`[${featureName}] Load Latest Proposal Failed`, props<{ error: any }>())

export const reset = createAction(`[${featureName}] Reset`)
