import { createStyle } from '@gluestack-style/react'

export const ModalBackdrop = createStyle({
  ':animate': {
    opacity: 0.5,
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
      duration: 250,
      type: 'timing',
    },
    stiffness: 250,
    type: 'spring',
  },
  // @ts-ignore
  _dark: {
    bg: '$backgroundDark950',
  },
  // @ts-ignore
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
