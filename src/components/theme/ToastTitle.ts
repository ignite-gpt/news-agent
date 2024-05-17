import { createStyle } from '@gluestack-style/react'

export const ToastTitle = createStyle({
  _dark: {
    color: '$textDark50',
  },
  color: '$textLight900',
  fontWeight: '$medium',
  props: {
    size: 'md',
  },
})
