import { createStyle } from '@gluestack-style/react'

export const PopoverArrow = createStyle({
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
  h: '$3.5',
  overflow: 'hidden',
  position: 'absolute',
  props: {
    softShadow: '3',
  },
  w: '$3.5',
  zIndex: 1,
})
