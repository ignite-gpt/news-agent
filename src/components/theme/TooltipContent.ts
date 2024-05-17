import { createStyle } from '@gluestack-style/react'

export const TooltipContent = createStyle({
  ':animate': {
    opacity: 1,
    scale: 1,
  },
  ':exit': {
    opacity: 0,
    scale: 0.5,
  },
  ':initial': {
    opacity: 0,
    scale: 0.5,
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
    _text: {
      color: '$textDark50',
    },
    bg: '$backgroundDark800',
  },
  _text: {
    color: '$textLight50',
    fontSize: '$xs',
  },
  _web: {
    pointerEvents: 'auto',
  },
  bg: '$backgroundLight900',

  borderRadius: '$sm',
  defaultProps: {
    hardShadow: '2',
  },
  px: '$3',
  py: '$1',
})
