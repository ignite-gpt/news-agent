import { createStyle } from '@gluestack-style/react'

export const PopoverBackdrop = createStyle({
  ':animate': {
    opacity: 0.1,
  },
  ':exit': {
    opacity: 0,
  },
  ':initial': {
    opacity: 0,
  },
  ':transition': {
    damping: 18,
    mass: 0.9,
    opacity: {
      delay: 50,
      duration: 50,
      type: 'timing',
    },
    stiffness: 450,
    type: 'spring',
  },
  _dark: {
    bg: '$backgroundDark950',
  },
  _web: {
    cursor: 'default',
  },
  bg: '$backgroundLight950',
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
})
