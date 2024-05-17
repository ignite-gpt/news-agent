import { createStyle } from '@gluestack-style/react'

export const SelectActionsheetIcon = createStyle({
  _dark: {
    //@ts-ignore
    color: '$backgroundDark400',
  },
  color: '$backgroundLight500',
  h: '$4',
  mr: '$2',
  props: {
    size: 'md',
  },
  w: '$4',
})
