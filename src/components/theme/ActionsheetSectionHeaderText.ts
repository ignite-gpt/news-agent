import { createStyle } from '@gluestack-style/react'

export const ActionsheetSectionHeaderText = createStyle({
  _dark: {
    color: '$textDark400',
  },
  color: '$textLight500',
  p: '$3',
  props: { size: 'xs' },
  textTransform: 'uppercase',
})
