import { Column, Template } from '@tezblock/components/tezblock-table/tezblock-table.component'
import { Conventer } from '@tezblock/components/tezblock-table/amount-cell/amount-cell.component'

export const columns: {
  [key: string]: (options: {
    pageId: string
    showFiatValue: boolean
    symbol: string
    conventer: Conventer
  }) => Column[]
} = {
  transfers: (options: {
    pageId: string
    showFiatValue: boolean
    symbol: string
    conventer: Conventer
  }) => [
    {
      name: 'From',
      field: 'singleFrom',
      width: '1',
      template: Template.address,
      data: (item: any) => ({ data: item.singleFrom, options: { showFullAddress: false, pageId: options.pageId } })
    },
    {
      field: '',
      width: '1',
      template: Template.symbol
    },
    {
      name: 'To',
      field: 'singleTo',
      width: '1',
      template: Template.address,
      data: (item: any) => ({ data: item.singleTo, options: { showFullAddress: false, pageId: options.pageId } })
    },
    {
      name: 'Amount',
      field: 'amount',
      template: Template.amount,
      data: (item: any) => ({
        data: { amount: item.amount },
        options: {
          showFiatValue: options.showFiatValue,
          symbol: options.symbol,
          conventer: options.conventer
        }
      }),
      sortable: false
    },
    {
      name: 'Fee',
      field: 'fee',
      template: Template.amount,
      data: (item: any) => ({ data: { amount: item.fee }, options: { showFiatValue: false } }),
      sortable: false
    },
    {
      name: 'Age',
      field: 'timestamp',
      template: Template.timestamp,
      data: (item: any) => ({ data: item.timestamp * 1000 }),
      sortable: true
    },
    {
      name: 'Block',
      field: 'blockHeight',
      template: Template.block,
      sortable: true
    },
    {
      name: 'Tx Hash',
      field: 'hash',
      template: Template.hash
    }
  ],
  other: (options: {
    pageId: string
    showFiatValue: boolean
    symbol: string
    conventer: Conventer
  }) => [
    {
      name: 'From',
      field: 'source',
      width: '1',
      template: Template.address,
      data: (item: any) => ({ data: item.source, options: { showFullAddress: false, pageId: options.pageId } })
    },
    {
      field: '',
      width: '1',
      template: Template.symbol
    },
    {
      name: 'To',
      field: 'destination',
      width: '1',
      template: Template.address,
      data: (item: any) => ({ data: item.destination, options: { showFullAddress: false, pageId: options.pageId } })
    },
    {
      name: 'Amount',
      field: 'amount',
      template: Template.amount,
      data: (item: any) => ({
        data: { amount: item.amount },
        options: {
          showFiatValue: options.showFiatValue,
          symbol: options.symbol,
          conventer: options.conventer
        }
      }),
      sortable: true
    },
    {
      name: 'Fee',
      field: 'fee',
      template: Template.amount,
      data: (item: any) => ({ data: { amount: item.fee }, options: { showFiatValue: false } }),
      sortable: true
    },
    {
      name: 'Age',
      field: 'timestamp',
      template: Template.timestamp,
      sortable: true
    },
    {
      name: 'Block',
      field: 'block_level',
      template: Template.block,
      sortable: true
    },
    {
      name: 'Tx Hash',
      field: 'operation_group_hash',
      template: Template.hash
    }
  ]
}
