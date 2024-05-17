import { createStyle } from '@gluestack-style/react'

export const Menu = createStyle({
  ':animate': {
    opacity: 1,
  },
  ':exit': {
    opacity: 0,
  },
  ':initial': {
    opacity: 0,
  },
  ':transition': {
    damping: 18,
    opacity: {
      duration: 200,
      type: 'timing',
    },
    stiffness: 250,
    type: 'spring',
  },
  _dark: {
    bg: '$backgroundDark900',
  },
  bg: '$backgroundLight0',
  defaultProps: {
    softShadow: '3',
  },
  minWidth: 200,
  py: '$2',
  rounded: '$sm',
})
