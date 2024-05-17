import { createStyle } from '@gluestack-style/react'

export const PopoverContent = createStyle({
  ':transition': {
    damping: 18,
    mass: 0.9,
    opacity: {
      delay: 50,
      duration: 50,
      type: 'timing',
    },
    stiffness: 250,
    type: 'spring',
  },
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
