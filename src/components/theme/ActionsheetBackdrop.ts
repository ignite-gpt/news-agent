import { createStyle } from '@gluestack-style/react'

export const ActionsheetBackdrop = createStyle({
  ':animate': {
    opacity: 0.5,
  },
  ':exit': {
    opacity: 0,
  },
  ':initial': {
    opacity: 0,
  },
  // @ts-ignore
  _dark: {
    bg: '$backgroundDark950',
  },
  // @ts-ignore
  _web: {
    cursor: 'default',
    pointerEvents: 'auto',
  },
  bg: '$backgroundLight950',
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
})
