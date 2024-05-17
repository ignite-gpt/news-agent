import { createStyle } from '@gluestack-style/react'

export const MenuItem = createStyle({
  ':active': {
    bg: '$backgroundLight200',
  },
  ':disabled': {
    ':focus': {
      bg: 'transparent',
    },
    _dark: {
      ':focus': {
        bg: 'transparent',
      },
    },
    _web: {
      cursor: 'not-allowed',
    },
    opacity: 0.4,
  },
  ':focus': {
    bg: '$backgroundLight100',
    outlineStyle: 'none',
    // @ts-ignore
    outlineWidth: '$0',
  },

  ':focusVisible': {
    _dark: {
      outlineColor: '$primary300',
    },
    outlineColor: '$primary700',
    outlineStyle: 'solid',
    // @ts-ignore
    outlineWidth: '$0.5',
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
    cursor: 'pointer',
  },

  alignItems: 'center',

  flexDirection: 'row',
  p: '$3',
})
