import { createStyle } from '@gluestack-style/react'

export const AlertDialogContent = createStyle({
  ':animate': {
    opacity: 1,
    scale: 1,
  },
  ':exit': {
    opacity: 0,
    scale: 0.9,
  },
  //@ts-ignore
  ':initial': {
    opacity: 0,
    scale: 0.9,
  },
  ':transition': {
    damping: 18,
    opacity: {
      duration: 250,
      type: 'timing',
    },
    stiffness: 250,
    type: 'spring',
  },
  // @ts-ignore
  _dark: {
    bg: '$backgroundDark900',
  },
  bg: '$backgroundLight50',
  defaultProps: {
    softShadow: '3',
  },

  overflow: 'hidden',
  rounded: '$lg',
})
