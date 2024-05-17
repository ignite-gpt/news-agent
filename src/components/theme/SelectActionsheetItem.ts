import { createStyle } from '@gluestack-style/react'

export const SelectActionsheetItem = createStyle({
  ':active': {
    bg: '$backgroundLight200',
  },
  ':disabled': {
    _web: {
      cursor: 'not-allowed',
      // @ts-ignore
      pointerEvents: 'all !important',
    },
    opacity: 0.4,
  },
  ':focus': {
    bg: '$backgroundLight100',
  },
  ':hover': {
    bg: '$backgroundLight100',
  },
  _dark: {
    ':active': {
      bg: '$backgroundDark700',
    },

    ':focus': {
      bg: '$backgroundDark800',
    },

    ':hover': {
      bg: '$backgroundDark800',
    },
  },

  _web: {
    ':focusVisible': {
      _dark: {
        bg: '$backgroundDark700',
      },
      bg: '$backgroundLight100',
    },
  },

  alignItems: 'center',

  flexDirection: 'row',

  p: '$3',

  rounded: '$sm',

  w: '$full',
})
