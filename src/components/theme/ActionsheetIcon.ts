import { createStyle } from '@gluestack-style/react'

export const ActionsheetIcon = createStyle({
  _dark: {
    //@ts-ignore
    color: '$backgroundDark400',
  },
  color: '$backgroundLight500',
  props: {
    size: 'sm',
  },
})
